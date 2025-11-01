import Image from 'next/image';
import { Layout } from './Layout';
import { LinkItem, Link } from './LinkItem';

export interface UserProfile {
  username: string;
  avatar: string;
  bio: string;
  links: Link[];
}

interface UserPageProps {
  profile: UserProfile;
}

export function UserPage({ profile }: UserPageProps) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <article className="space-y-6 md:space-y-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={profile.avatar}
                alt={`${profile.username}'s avatar`}
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                unoptimized
                priority
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              @{profile.username}
            </h1>
          </div>

          {/* Bio Section */}
          {profile.bio && (
            <div className="text-center px-4">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                {profile.bio}
              </p>
            </div>
          )}

          {/* Links Section */}
          <nav 
            className="space-y-3 md:space-y-4"
            aria-label="User links"
          >
            {profile.links.map((link, index) => (
              <LinkItem key={index} link={link} index={index} />
            ))}
          </nav>
        </article>
      </div>
    </Layout>
  );
}
