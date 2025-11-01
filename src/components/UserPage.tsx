import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserProfile } from '../utils/fetcher';
import LinkItem from './LinkItem';
import type { UserProfile } from '../types';

export default function UserPage() {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError('No username provided');
      setLoading(false);
      return;
    }

    async function loadProfile() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchUserProfile(username!);
        if (data) {
          setProfile(data);
          // Update document title and meta tags for SEO
          document.title = `${data.displayName} (@${data.username}) - Vibe Demo`;
          updateMetaTags(data);
        } else {
          setError('User not found');
        }
      } catch (err) {
        setError('Failed to load user profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="loading" role="status" aria-live="polite">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="not-found" role="alert">
        <h2 className="not-found-title">User Not Found</h2>
        <p>The user "{username}" could not be found.</p>
        <Link to="/" className="home-link">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="user-page">
      <article className="user-card">
        <div className="avatar-container">
          <img
            src={profile.avatar}
            alt={`${profile.displayName}'s avatar`}
            className="avatar"
          />
        </div>
        <h2 className="display-name">{profile.displayName}</h2>
        <p className="username">@{profile.username}</p>
        {profile.bio && <p className="bio">{profile.bio}</p>}
      </article>

      <nav className="links-container" aria-label="User links">
        {profile.links.map((link, index) => (
          <LinkItem key={index} link={link} />
        ))}
      </nav>
    </div>
  );
}

function updateMetaTags(profile: UserProfile) {
  // Update Open Graph tags
  const metaTags = [
    { property: 'og:title', content: `${profile.displayName} (@${profile.username})` },
    { property: 'og:description', content: profile.bio || `Check out ${profile.displayName}'s links` },
    { property: 'og:image', content: profile.avatar },
    { property: 'og:type', content: 'profile' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: `${profile.displayName} (@${profile.username})` },
    { name: 'twitter:description', content: profile.bio || `Check out ${profile.displayName}'s links` },
    { name: 'twitter:image', content: profile.avatar },
    { name: 'description', content: profile.bio || `${profile.displayName}'s profile and links` },
  ];

  metaTags.forEach(({ property, name, content }) => {
    const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (property) {
        element.setAttribute('property', property);
      } else if (name) {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });
}
