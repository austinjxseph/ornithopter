import { createClient } from "$lib/prismicio";
import { filter } from "@prismicio/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  try {
    // Fetch all showcase projects
    const projects = await client.getAllByType("project", {
      filters: [filter.at("my.project.showcase", true)],
      orderings: [{ field: "my.project.project_index", direction: "asc" }],
      limit: 4,
    });

    return {
      projects,
    };
  } catch (error) {
    console.error("Failed to fetch projects from Prismic:", error);
    // Return empty array if Prismic fetch fails
    return {
      projects: [],
    };
  }
};
