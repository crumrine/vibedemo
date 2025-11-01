import Image from 'next/image';

export interface Link {
  title: string;
  url: string;
  icon?: string;
}

interface LinkItemProps {
  link: Link;
  index: number;
}

export function LinkItem({ link, index }: LinkItemProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card block w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-4 md:p-5 hover:border-blue-500 dark:hover:border-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
      aria-label={`Visit ${link.title}`}
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        {link.icon && (
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 relative">
            <Image
              src={link.icon}
              alt=""
              width={48}
              height={48}
              className="rounded-lg object-cover"
              unoptimized
              aria-hidden="true"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base md:text-lg text-gray-900 dark:text-gray-100 truncate">
            {link.title}
          </h3>
        </div>
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-gray-400 dark:text-gray-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}
