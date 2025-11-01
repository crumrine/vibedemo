import type { UserLink } from '../types';

interface LinkItemProps {
  link: UserLink;
}

export default function LinkItem({ link }: LinkItemProps) {
  return (
    <a
      href={link.url}
      className="link-item"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${link.title}`}
    >
      <span className="link-icon" aria-hidden="true">
        {link.icon}
      </span>
      <span className="link-title">{link.title}</span>
      <span className="link-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
