/**
 * Kirby API Client
 *
 * Replaces Prismic client for fetching content from Kirby CMS.
 * Configure VITE_KIRBY_API_URL in .env for your Kirby instance.
 */

const KIRBY_API_URL = import.meta.env.VITE_KIRBY_API_URL || 'http://localhost:8000/api';

// ============================================================================
// Types
// ============================================================================

export interface KirbyImage {
  url: string;
  alt: string | null;
  width: number;
  height: number;
}

export interface KirbyProject {
  uid: string;
  name: string;
  title: string;
  description: string;
  tags: string[];
  showcase: boolean;
  index: number;
  published: string | null;
  thumbnail_base: KirbyImage | null;
  thumbnail_overlay: KirbyImage | null;
  metadata?: KirbyMetadataItem[];
  blocks?: KirbyBlock[];
  meta?: KirbyMeta;
}

export interface KirbyMetadataItem {
  label: string;
  content: string;
}

export interface KirbyPage {
  uid: string;
  title: string;
  blocks: KirbyBlock[];
  meta?: KirbyMeta;
}

export interface KirbyMeta {
  title: string;
  description: string | null;
  image: string | null;
}

export interface KirbyHome {
  hero_eyebrow: string;
  hero_title: string;
  hero_button_label: string;
  hero_button_link: string;
}

export interface KirbySite {
  title: string;
  description: string;
  social: {
    email: string | null;
    linkedin: string | null;
    github: string | null;
    bluesky: string | null;
    readcv: string | null;
  };
}

// ============================================================================
// Block Types
// ============================================================================

export interface KirbyBlock {
  type: string;
  content: Record<string, unknown>;
}

export interface ArticleHeaderContent {
  title: string;
  description: string;
}

export interface ArticleImageBlockContent {
  columns: string;
  images: Array<{
    image: KirbyImage | null;
    caption: string;
  }>;
}

export interface ArticleTextBlockContent {
  columns: string;
  items: Array<{
    content: string;
  }>;
}

export interface ArticleNumberedGridContent {
  columns: string;
  show_numbers: boolean;
  items: Array<{
    heading: string;
    description: string;
  }>;
}

export interface ArticleFullBleedContent {
  image: KirbyImage | null;
  caption: string;
}

export interface StaticBioBlockContent {
  heading: string;
  content: string;
  images: KirbyImage[];
  items: Array<{
    type: 'header' | 'row';
    heading: string;
    subtitle: string;
    index: string;
    description: string;
  }>;
}

// ============================================================================
// API Client
// ============================================================================

interface KirbyResponse<T> {
  status: 'ok' | 'error';
  data?: T;
  message?: string;
  code?: number;
}

async function fetchKirby<T>(endpoint: string): Promise<T> {
  const url = `${KIRBY_API_URL}/${endpoint}`;

  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Kirby API error: ${res.status} ${res.statusText}`);
  }

  const json: KirbyResponse<T> = await res.json();

  if (json.status === 'error') {
    const error = new Error(json.message || 'Unknown error');
    (error as any).code = json.code;
    throw error;
  }

  return json.data as T;
}

// ============================================================================
// Public API
// ============================================================================

export const kirby = {
  /**
   * Get homepage content
   */
  async getHome(): Promise<KirbyHome> {
    return fetchKirby<KirbyHome>('home');
  },

  /**
   * Get all published projects
   */
  async getProjects(options?: {
    showcase?: boolean;
    limit?: number;
  }): Promise<KirbyProject[]> {
    let projects = await fetchKirby<KirbyProject[]>('projects');

    // Filter by showcase if specified
    if (options?.showcase !== undefined) {
      projects = projects.filter(p => p.showcase === options.showcase);
    }

    // Sort by index
    projects.sort((a, b) => a.index - b.index);

    // Limit results
    if (options?.limit) {
      projects = projects.slice(0, options.limit);
    }

    return projects;
  },

  /**
   * Get a single project by slug
   */
  async getProject(uid: string): Promise<KirbyProject> {
    return fetchKirby<KirbyProject>(`projects/${uid}`);
  },

  /**
   * Get a page by slug
   */
  async getPage(uid: string): Promise<KirbyPage> {
    return fetchKirby<KirbyPage>(`pages/${uid}`);
  },

  /**
   * Get global site settings
   */
  async getSite(): Promise<KirbySite> {
    return fetchKirby<KirbySite>('site');
  },
};

export default kirby;
