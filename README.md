# Vibe Demo

A mobile-first user profile link page application that fetches user data from JSON files in a public GitHub repository.

## Features

- 📱 **Mobile-first responsive design** - Smooth experience on all devices
- 🎨 **Dark/Light mode** - Toggle between themes with preference persistence
- ♿ **Accessible** - ARIA labels, keyboard navigation, and screen reader support
- 🔍 **SEO optimized** - Meta tags and Open Graph support
- ⚡ **Fast** - Built with Vite and React for optimal performance
- 🔄 **Auto-refresh** - Cache-busting headers ensure fresh data on JSON updates
- 🚀 **Deploy-ready** - Configured for Cloudflare Pages

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

## Building

```bash
npm run build
```

The production build will be output to the `dist` directory.

## Usage

### Viewing User Profiles

Navigate to `/users/<username>` to view a user's profile, where `<username>` corresponds to a JSON file in the data repository.

Example: `/users/johndoe`

### User Data Format

User profiles are stored as JSON files in the format:

```json
{
  "username": "johndoe",
  "displayName": "John Doe",
  "avatar": "https://example.com/avatar.jpg",
  "bio": "Software developer and open source enthusiast",
  "links": [
    {
      "title": "GitHub",
      "url": "https://github.com/johndoe",
      "icon": "🔗"
    },
    {
      "title": "Website",
      "url": "https://johndoe.com",
      "icon": "🌐"
    }
  ]
}
```

### Configuration

Edit `src/config.ts` to point to your GitHub repository containing user JSON files:

```typescript
export const config = {
  githubRepoOwner: 'your-username',
  githubRepoName: 'your-data-repo',
  githubBranch: 'main',
};
```

User JSON files should be stored in a `users/` directory in the data repository.

## Deployment to Cloudflare Pages

1. Push this repository to GitHub
2. Connect to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy!

See `CLOUDFLARE.md` for more details.

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Respects `prefers-reduced-motion`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT