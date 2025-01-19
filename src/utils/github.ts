import type { Project } from '../types';

const GITHUB_API_URL = 'https://api.github.com';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  pushed_at: string;
  forks_count: number;
  default_branch: string;
}

export async function fetchGitHubProjects(username: string): Promise<Project[]> {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const repos: GitHubRepo[] = await response.json();
  
  const reposWithCommits = await Promise.all(
    repos
      .filter(repo => !repo.name.includes('.github.io'))
      .map(async (repo) => {
        // Fetch latest commit
        const commitResponse = await fetch(`${GITHUB_API_URL}/repos/${username}/${repo.name}/commits/${repo.default_branch}`);
        const commitData = commitResponse.ok ? await commitResponse.json() : null;
        
        return {
          title: repo.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          description: repo.description || 'No description available',
          github: repo.html_url,
          demo: repo.homepage || '',
          tags: [
            repo.language,
            ...repo.topics
          ].filter(Boolean) as string[],
          lastUpdate: repo.pushed_at,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          latestCommit: commitData ? {
            hash: commitData.sha.substring(0, 7),
            message: commitData.commit.message,
            date: commitData.commit.author.date
          } : null
        };
      })
  );

  return reposWithCommits;
} 