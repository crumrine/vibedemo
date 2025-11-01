import { UserProfile } from '@/components/UserPage';

export interface FetchUserOptions {
  revalidate?: number;
  githubRepo?: string;
}

/**
 * Fetches user profile data from GitHub repository
 * @param username - The username to fetch
 * @param options - Optional configuration
 * @returns UserProfile data
 */
export async function fetchUserProfile(
  username: string,
  options: FetchUserOptions = {}
): Promise<UserProfile | null> {
  const { 
    revalidate = 3600, // Default: revalidate every hour
    githubRepo = 'crumrine/vibedemo' 
  } = options;

  try {
    // Construct GitHub raw content URL
    const url = `https://raw.githubusercontent.com/${githubRepo}/main/public/users/${username}.json`;
    
    const response = await fetch(url, {
      next: { revalidate },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // Validate the data structure
    if (!data.username || !data.avatar || !Array.isArray(data.links)) {
      console.error('Invalid user profile data structure');
      return null;
    }

    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

/**
 * Fetches user profile data from a local file (for static export)
 * @param username - The username to fetch
 * @returns UserProfile data
 */
export async function fetchLocalUserProfile(username: string): Promise<UserProfile | null> {
  try {
    // For local development and static export
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const filePath = path.join(process.cwd(), 'public', 'users', `${username}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    return data as UserProfile;
  } catch (error) {
    // Fallback to GitHub fetch if local file doesn't exist
    return fetchUserProfile(username);
  }
}
