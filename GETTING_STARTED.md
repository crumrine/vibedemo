# Getting Started with VibeDemo

This guide will help you get started with VibeDemo, a mobile-first user profile showcase app.

## Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/crumrine/vibedemo.git
   cd vibedemo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the app.

## Creating User Profiles

### Step 1: Create a JSON file

Create a new file in `public/users/[username].json` with the following structure:

```json
{
  "username": "johndoe",
  "avatar": "https://example.com/avatar.jpg",
  "bio": "Welcome to my profile! I'm passionate about web development.",
  "links": [
    {
      "title": "GitHub",
      "url": "https://github.com/johndoe",
      "icon": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      "title": "Portfolio",
      "url": "https://johndoe.com",
      "icon": "https://johndoe.com/icon.png"
    }
  ]
}
```

### Step 2: Update Static Routes (Optional)

If you want the profile to be pre-rendered at build time, update `app/users/[username]/page.tsx`:

```typescript
export async function generateStaticParams() {
  return [
    { username: 'example' },
    { username: 'johndoe' }, // Add your new username
  ];
}
```

### Step 3: Test Your Profile

Navigate to `http://localhost:3000/users/johndoe` to see your profile.

## Building for Production

### Local Build

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

### Test Production Build

You can serve the static files locally using any static file server:

```bash
npx serve out
```

## Deploying to Cloudflare Pages

### Option 1: Connect via Dashboard

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **Create a project**
4. Select **Connect to Git**
5. Choose your repository
6. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
7. Click **Save and Deploy**

### Option 2: Using Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy out --project-name=vibedemo
```

## Customization

### Theme Colors

Edit `app/globals.css` to customize theme colors:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### Styling Components

All components use Tailwind CSS. Edit component files in the `components/` directory to customize styles.

### Layout

Modify `components/Layout.tsx` to change the overall page layout.

## Features

### Mobile-First Design
- Responsive layouts using Flexbox and CSS Grid
- Touch targets minimum 44x44px
- Optimized for all screen sizes

### Dark/Light Mode
- Automatic system preference detection
- Manual toggle (top-right corner)
- Persisted in localStorage

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast support

### SEO
- OpenGraph metadata
- Twitter Card support
- Dynamic meta tags per profile

## Troubleshooting

### Build Errors

If you encounter build errors, try:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

Make sure:
- Image URLs are accessible
- CORS is enabled on image hosts
- URLs use HTTPS

### Theme Not Switching

Clear your browser's localStorage:
```javascript
// In browser console
localStorage.clear()
```

## Project Structure

```
vibedemo/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── users/             # User routes
│       └── [username]/    # Dynamic user route
├── components/            # React components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── UserPage.tsx      # User profile component
│   ├── LinkItem.tsx      # Link card component
│   ├── ThemeProvider.tsx # Theme context
│   └── ThemeToggle.tsx   # Theme toggle button
├── lib/                  # Utilities
│   └── fetchUser.ts     # User data fetcher
├── public/              # Static files
│   └── users/          # User JSON files
└── out/                # Build output (gitignored)
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT
