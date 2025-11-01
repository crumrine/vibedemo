# VibeDemo - Mobile-First User Profile App

A responsive, mobile-first user profile showcase built with Next.js, optimized for Cloudflare Pages deployment.

## Features

- ✨ **Mobile-First Design**: Optimized for all mobile devices with responsive layouts
- 🌓 **Dark/Light Mode**: Automatic theme detection with manual toggle
- ♿ **Accessible**: ARIA labels, keyboard navigation, and proper semantic HTML
- 🚀 **Fast Loading**: Static export with optimized images and minimal layout shifts
- 📱 **Touch-Optimized**: Large touch targets (44px+) and mobile gestures
- 🔄 **Auto-Refresh**: Profiles update when JSON files change in GitHub
- 📊 **SEO Ready**: OpenGraph and Twitter Card metadata for social previews

## Project Structure

```
vibedemo/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with mobile-first CSS
│   └── users/[username]/   # Dynamic user routes
│       ├── page.tsx        # User profile page
│       └── not-found.tsx   # 404 page
├── components/
│   ├── Layout.tsx          # Main layout wrapper
│   ├── UserPage.tsx        # User profile component
│   ├── LinkItem.tsx        # Individual link card
│   ├── ThemeProvider.tsx   # Theme context provider
│   └── ThemeToggle.tsx     # Theme toggle button
├── lib/
│   └── fetchUser.ts        # GitHub JSON fetcher utility
├── public/
│   └── users/
│       └── example.json    # Example user profile
└── next.config.js          # Next.js configuration for static export
```

## User Profile Format

Create JSON files in `public/users/[username].json`:

```json
{
  "username": "example",
  "avatar": "https://example.com/avatar.jpg",
  "bio": "Your bio here",
  "links": [
    {
      "title": "Link Title",
      "url": "https://example.com",
      "icon": "https://example.com/icon.png"
    }
  ]
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start
```

Visit `http://localhost:3000` to see your app.

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Framework**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
3. Deploy!

See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for detailed instructions.

## Responsive Design

- Uses Flexbox and CSS Grid for flexible layouts
- Viewport meta tags for proper mobile scaling
- Mobile-first media queries (base styles for mobile, scaled up for desktop)
- Touch targets minimum 44x44px
- Smooth animations and transitions
- No layout shifts during loading

## Accessibility

- Proper semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- High contrast support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

MIT