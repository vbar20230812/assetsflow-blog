# Deployment Guide

## Prerequisites

1. **GitHub Repository**
   - Create a new repository on GitHub (e.g., `assetflow-blog`)
   - Push this code to the repository

2. **Netlify Account**
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your GitHub account

3. **Giscus Setup (for comments)**
   - Go to your GitHub repo settings
   - Enable Discussions in the "Features" section
   - Visit [giscus.app](https://giscus.app) to generate your configuration
   - Update `src/_layouts/post.html` with your values:
     - `data-repo` - Your GitHub repo (e.g., "victor/assetflow-blog")
     - `data-repo-id` - From giscus.app
     - `data-category-id` - From giscus.app

## Initial Deployment

### Option 1: Netlify Dashboard

1. Log in to Netlify
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## Custom Domain Setup

1. In Netlify, go to Site settings → Domain management
2. Add custom domain: `blog.assetsflow.work`
3. Configure DNS:
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify DNS for automatic configuration

## Branch Deploys

Netlify automatically creates branch deploys:

| Branch | URL Pattern |
|--------|-------------|
| `main` | blog.assetsflow.work (production) |
| `develop` | develop--blog.netlify.app |
| PRs | deploy-preview-XXX--blog.netlify.app |

To set up the `develop` branch:

```bash
# Create develop branch
git checkout -b develop
git push origin develop

# Netlify will automatically create a branch deploy
```

## Firebase Cleanup

After the new blog is operational:

### 1. Delete blog_comments collection

```bash
# Using Firebase CLI (be careful - this deletes all data)
firebase firestore:delete blog_comments --project assetflow-backend-2024 --recursive
```

### 2. Update Firestore Rules

Remove blog-related rules from `firestore.rules`:

```
// Remove this section
match /blog_comments/{commentId} {
  allow read: if true;
  allow create: if request.auth != null;
  allow update: if request.auth != null &&
    (request.auth.uid == resource.data.userId ||
     get(/databases/$(database)/documents/userData/$(request.auth.uid)).data.role == 'admin');
}
```

### 3. Remove Blog Files from assetflow3

After confirming the new blog works:

```bash
# In assetflow3 repo
rm -rf hosting/public/blog
rm -rf hosting/public/assets/js/comments.js
rm -rf hosting/public/admin/comments.html
```

## CMS Access

Access the Decap CMS at: `https://blog.assetsflow.work/admin/`

First time setup:
1. You'll be prompted to authenticate with GitHub
2. Grant access to your repository
3. You can now create, edit, and publish posts

## Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Run `npm install` to ensure dependencies are installed
3. Check build logs in Netlify dashboard

### CMS Not Loading

1. Ensure you're logged into GitHub
2. Check that the repo in `admin/config.yml` matches your actual repo
3. Verify OAuth app settings in GitHub

### Comments Not Working

1. Ensure Discussions are enabled in your GitHub repo
2. Verify Giscus configuration in `post.html`
3. Check browser console for errors

## Monitoring

- **Netlify Analytics**: Available in Site settings → Analytics
- **Build Logs**: Available in Deploys tab
- **Function Logs**: Available in Functions tab (if using)
