import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UserPage } from '@/components/UserPage';
import { fetchLocalUserProfile } from '@/lib/fetchUser';

interface PageProps {
  params: {
    username: string;
  };
}

// Generate static params for known users at build time
export async function generateStaticParams() {
  // For static export, return known usernames
  return [
    { username: 'example' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const profile = await fetchLocalUserProfile(params.username);
  
  if (!profile) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: `${profile.username} - VibeDemo`,
    description: profile.bio || `Check out ${profile.username}'s profile`,
    openGraph: {
      title: `${profile.username} - VibeDemo`,
      description: profile.bio || `Check out ${profile.username}'s profile`,
      images: [{ url: profile.avatar }],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.username} - VibeDemo`,
      description: profile.bio || `Check out ${profile.username}'s profile`,
      images: [profile.avatar],
    },
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const profile = await fetchLocalUserProfile(params.username);

  if (!profile) {
    notFound();
  }

  return <UserPage profile={profile} />;
}
