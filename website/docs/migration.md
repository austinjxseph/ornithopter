# Prismic Slice ID Migration

This document details the slice ID migration performed on the Vitruvian project to improve slice naming conventions.

## Overview

The migration renamed slice IDs to follow a consistent naming pattern with prefixes indicating their purpose:
- `article_` prefix for slices used in project/article content
- `static_` prefix for slices used in static pages (e.g., about page)

## Slice ID Changes

| Old Slice ID | New Slice ID | Description |
|--------------|--------------|-------------|
| `full_width_image` | `article_full_bleed` | Full-bleed image section |
| `image_block` | `article_image_block` | Image block with layout options |
| `numbered_grid` | `article_numbered_grid` | Numbered grid layout |
| `text_block` | `article_text_block` | Rich text content block |
| `bio_block` | `static_bio_block` | Bio section for about page |

## Files Updated

### Slice Models (model.json)
- `src/lib/slices/ArticleFullBleed/model.json`
- `src/lib/slices/ArticleImageBlock/model.json`
- `src/lib/slices/ArticleNumberedGrid/model.json`
- `src/lib/slices/ArticleTextBlock/model.json`
- `src/lib/slices/StaticBioBlock/model.json`

### Slice Components (renamed folders)
- `FullWidthImage` → `ArticleFullBleed`
- `ImageBlock` → `ArticleImageBlock`
- `NumberedGrid` → `ArticleNumberedGrid`
- `TextBlock` → `ArticleTextBlock`
- `BioBlock` → `StaticBioBlock`

### Slice Exports
- `src/lib/slices/index.ts` - Updated component mappings

### Custom Types
- `customtypes/project/index.json` - Updated slice zone choices
- `customtypes/page/index.json` - Updated slice zone choices

## Migration Process

### 1. Push New Slice Models First

Before migrating existing content, the new slice models must be pushed to Prismic via Slice Machine:

```bash
npx @slicemachine/init
# Then push slices via the Slice Machine UI
```

### 2. Run Migration Script

The migration script updates existing Prismic documents to use the new slice IDs:

```bash
npx tsx scripts/migrate-slice-ids.ts
```

### 3. Publish Migration Release

After the script runs:
1. Go to https://vitruvian.prismic.io/
2. Navigate to **Migration Releases** (rocket icon)
3. Review the changes
4. Publish the release to make changes live

## Migration Script Details

**Location:** `scripts/migrate-slice-ids.ts`

### What it does:
1. Fetches all `project` and `page` documents from Prismic
2. Transforms slice data by updating:
   - `slice_type` field (e.g., `image_block` → `article_image_block`)
   - `id` field which has format `slice_type$uuid` (e.g., `image_block$abc123` → `article_image_block$abc123`)
3. Registers updates with the Prismic Migration API
4. Executes the migration (changes saved as drafts)

### Prerequisites:
- Prismic Write Token set in `.env`:
  ```
  PRISMIC_WRITE_TOKEN="your-token-here"
  ```
- New slice models already pushed to Prismic

### Key Technical Details

The Prismic Migration API has specific requirements:

1. **Rate Limiting:** 1 request per second per repository
2. **Draft Mode:** All changes are saved as drafts in a Migration Release
3. **Slice ID Format:** Both `slice_type` and `id` (format: `slice_type$uuid`) must be updated together
4. **Order of Operations:** New slice models MUST be pushed before migration runs

## Documents Migrated

The following documents were successfully migrated:

| Document | Type | Slices Updated |
|----------|------|----------------|
| circle | project | 13 slices |
| nuro | project | 11 slices |
| copacabana | project | 11 slices |
| petrichor | project | 8 slices |

**Total:** 43 slices across 4 documents

## Prismic API References

- [Migration API Documentation](https://prismic.io/docs/migration)
- [Migration API Technical Reference](https://prismic.io/docs/migration-api-technical-reference)
- [@prismicio/client v7 Documentation](https://prismic.io/docs/technical-reference/prismicio-client/v7)

## Troubleshooting

### "Validation failed" Error
- Ensure new slice models are pushed to Prismic before running migration
- Check that both `slice_type` and `id` fields are being updated

### "Rate limit exceeded" Error
- The script includes rate limiting (1.1s between requests)
- Wait and retry if you hit limits

### Documents Not Updating
- Verify the write token has correct permissions
- Check that documents contain slices with old IDs
- Ensure you're targeting the correct document types in the script

## Rollback

If needed, the migration can be reversed by:
1. Updating the `SLICE_ID_MAP` in the script to swap old/new values
2. Running the migration script again
3. Publishing the new migration release

Note: This requires the OLD slice models to still exist in Prismic.
