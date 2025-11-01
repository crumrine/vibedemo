import { config } from '../config';
import type { UserProfile } from '../types';

/**
 * Fetches user profile data from a GitHub repository
 * @param username - The username to fetch
 * @returns Promise resolving to UserProfile or null if not found
 */
export async function fetchUserProfile(username: string): Promise<UserProfile | null> {
  const url = `https://raw.githubusercontent.com/${config.githubRepoOwner}/${config.githubRepoName}/${config.githubBranch}/users/${username}.json`;
  
  try {
    const response = await fetch(url, {
      // Add cache busting for auto-refresh on JSON updates
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch user profile: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}
