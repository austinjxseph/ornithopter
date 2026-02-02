import { kirby } from "$lib/kirby";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    // Fetch homepage content and showcase projects in parallel
    const [home, projects] = await Promise.all([
      kirby.getHome(),
      kirby.getProjects({ showcase: true, limit: 4 }),
    ]);

    return {
      home,
      projects,
    };
  } catch (error) {
    console.error("Failed to fetch from Kirby:", error);
    // Return empty/default data if Kirby fetch fails
    return {
      home: {
        hero_eyebrow: "Available for freelance work",
        hero_title: "Digital Designer and Creative Developer",
        hero_button_label: "Information",
        hero_button_link: "/about",
      },
      projects: [],
    };
  }
};
