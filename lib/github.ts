const GITHUB_USERNAME = "eduardoluizdev";

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  tags: string[];
  featured: boolean;
}

function formatRepoName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function getFeaturedProjects(limit = 6): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, limit)
      .map((repo) => ({
        name: formatRepoName(repo.name),
        url: repo.html_url,
        description:
          repo.description ||
          `Projeto pessoal desenvolvido em ${repo.language ?? "TypeScript"}.`,
        tags: [repo.language, ...repo.topics].filter(
          (tag): tag is string => Boolean(tag)
        ).slice(0, 4),
        featured: repo.stargazers_count > 0,
      }));
  } catch {
    return [];
  }
}
