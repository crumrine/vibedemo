# Cloudflare Pages Build Configuration

## Build settings
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node.js version**: 20

## Environment Variables
No environment variables are required for basic deployment.

## Static Export
This Next.js app is configured for static export with `output: 'export'` in `next.config.js`.

## Deployment Steps

1. **Connect your GitHub repository** to Cloudflare Pages
2. **Configure build settings**:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
3. **Deploy**: Cloudflare Pages will automatically build and deploy on every push

## Custom Domain
After deployment, you can add a custom domain in the Cloudflare Pages dashboard.

## Automatic Revalidation
The app fetches user profiles from GitHub raw content with a 1-hour revalidation period. To update profiles:
1. Update JSON files in the `public/users/` directory
2. Commit and push to GitHub
3. Cloudflare Pages will rebuild automatically on push, or profiles will refresh after the revalidation period

## Local Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your app.
