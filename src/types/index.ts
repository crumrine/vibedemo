export interface UserProfile {
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  links: UserLink[];
}

export interface UserLink {
  title: string;
  url: string;
  icon: string;
}

export interface Config {
  githubRepoOwner: string;
  githubRepoName: string;
  githubBranch: string;
}
