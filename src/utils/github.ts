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
}

export async function fetchGitHubProjects(username: string): Promise<Project[]> {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const repos: GitHubRepo[] = await response.json();
  
  return repos
    .filter(repo => !repo.name.includes('.github.io')) // Exclude GitHub Pages repo
    .map(repo => ({
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
    }));
} 