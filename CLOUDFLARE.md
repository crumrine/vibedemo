# Cloudflare Pages Build Configuration

This project is configured for deployment on Cloudflare Pages.

## Build Configuration

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 18 or higher

## Environment Variables

No environment variables are required. The app fetches user data from a public GitHub repository.

## Deployment

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command to: `npm run build`
3. Set the build output directory to: `dist`
4. Deploy!

The application will automatically rebuild when JSON files are updated in the data repository.

## SPA Routing

Cloudflare Pages automatically handles SPA routing for Vite apps. All routes will be served correctly.
