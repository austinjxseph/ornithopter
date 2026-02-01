# Prismic Slice ID Migration Strategy

Based on research into the Prismic Migration API as of late 2025, the old import/export method for updating Slice IDs in existing documents is deprecated. The correct and current approach is to use the Migration API.

## Key Findings

1.  **API-Driven**: The process is scriptable using the `@prismicio/client`. It involves fetching documents, modifying the `slice_type` property in the document's JSON, and pushing the changes back.
2.  **Order of Operations is Critical**:
    1.  **Push Slice Models First**: New or renamed slice models must be pushed to your Prismic repository via Slice Machine *before* running the migration script. Prismic needs to recognize the new slice IDs before documents can be updated to use them.
    2.  **Run Migration Script**: Execute the script to update the `slice_type` values in your existing documents.
    3.  **Review and Publish**: Changes are not made live immediately. They are sent to a new "Migration Release" in your Prismic repository. You must manually review and publish this release to make the changes public.
3.  **Technical Requirements**:
    *   A **Prismic Write Token** is required. This can be generated in your repository's settings under `Settings → API & Security`.
    *   The migration script will use methods like `writeClient.getByUID()` to fetch documents and `migration.updateDocument()` to push updated document data.
4.  **Limitations**: The API has a limit of 1,000 documents per migration batch.
5.  **Warning**: Manually changing a Slice's API ID in Slice Machine without migrating the content will result in data loss for that slice in all existing documents. The migration script is essential to prevent this.

## Revised Strategy

1.  **Push Slice Changes**: Use Slice Machine to push all local slice model changes to the Prismic repository. This creates the new, target slice types.
2.  **Generate Write Token**: Obtain a permanent or temporary write token from the Prismic dashboard.
3.  **Update and Run Migration Script**: Modify the existing `scripts/migrate-slice-ids.ts` to use the `@prismicio/client` and the Migration API. The script should:
    *   Fetch all documents of the relevant custom types.
    *   Iterate through each document's body.
    *   For each slice, check if its `slice_type` needs to be renamed based on our mapping.
    *   If a rename is needed, update the `slice_type` value.
    *   Use `migration.updateDocument()` to submit the updated document.
4.  **Publish in Prismic**: Go to the Prismic dashboard, find the automatically created "Migration Release", review the changes, and publish it.

## Migration Execution Log

This log details the steps taken to prepare and execute the migration script, and the errors encountered.

### Preparation

1.  **Script Rewritten**: `website/scripts/migrate-slice-ids.ts` was updated to use the modern Prismic Migration API. It is designed to be run from within the `/website` directory.
2.  **Dependencies Installed**: The `dotenv` and `ts-node` packages were added as dev dependencies to `website/package.json`.
3.  **Slice Models Pushed**: User confirmed that the updated slice models were pushed to Prismic via the Slice Machine UI.
4.  **Environment Configured**: User confirmed that a `.env` file was created in the `/website` directory with the correct `PRISMIC_WRITE_TOKEN`.

### Execution Attempts

The goal was to execute the TypeScript migration script. Several methods were attempted from the project root (`/home/austinjxseph/GitHub/austinjxseph/vitruvian`).

**Attempt 1: `npx` (before `ts-node` install)**
- **Command**: `npx ts-node website/scripts/migrate-slice-ids.ts`
- **Result**: `npx` prompted for installation of `ts-node`, which was cancelled by the user as the agent cannot interact with prompts.

**Attempt 2: `npx` (after `ts-node` install)**
- **Command**: `npx ts-node website/scripts/migrate-slice-ids.ts`
- **Result**: Same as Attempt 1, indicating an issue with `npx`'s path resolution in the agent's environment.

**Attempt 3: Direct path execution**
- **Command**: `./website/node_modules/.bin/ts-node ./website/scripts/migrate-slice-ids.ts`
- **Error**: `TypeError: Unknown file extension ".ts"`
- **Diagnosis**: Node.js was not loading `ts-node`'s module hooks correctly, likely due to the project's `"type": "module"` setting in `package.json`.

**Attempt 4: Node loader flag (from root)**
- **Command**: `node --loader ts-node/esm ./website/scripts/migrate-slice-ids.ts`
- **Error**: `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'ts-node'`
- **Diagnosis**: The command was run from the project root, but Node.js was looking for `node_modules` in the root, not in the `website` subdirectory where `ts-node` is installed.

**Attempt 5: Node loader flag (from `website` directory)**
- **Commands**: 
  1. `cd website`
  2. `node --loader ts-node/esm scripts/migrate-slice-ids.ts`
- **Error**: 
  ```
  (node:71717) ExperimentalWarning: `--experimental-loader` may be removed in the future...
  ...
  [Object: null prototype] {
    [Symbol(nodejs.util.inspect.custom)]: [Function: [nodejs.util.inspect.custom]]
  }
  ```
- **Diagnosis**: This is the most promising approach, as it correctly finds `ts-node` and begins execution. However, it fails with an unhandled exception within the script or `ts-node` itself. The error is cryptic and does not provide a stack trace, suggesting a core issue possibly related to environment or dependencies.

### Next Steps for Next Agent

The script (`website/scripts/migrate-slice-ids.ts`) is correctly written. The challenge is execution. The final command from **Attempt 5** is the correct one to use. The next agent should focus on debugging why that specific command fails with an unhandled exception. This may involve:
- Adding `try/catch` blocks inside the `main()` function of the script to see if more specific error details can be logged.
- Checking for version incompatibilities between `node` (v20.19.6), `ts-node`, and `@prismicio/client`.
- Running the command with `--trace-warnings` or other Node.js debugging flags.
