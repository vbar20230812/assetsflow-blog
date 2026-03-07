# AssetFlow Blog

A modern, Netlify-powered blog with Decap CMS and Giscus comments.

## Features

- **11ty (Eleventy)** - Fast, simple static site generator
- **Decap CMS** - Git-based content management (browser-based editing)
- **Giscus** - Comments powered by GitHub Discussions
- **Multi-language** - Hebrew (RTL) and English (LTR) support
- **Accessibility** - Minimal built-in accessibility toolbar
- **Branch deploys** - Automatic dev/prod environments

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run serve

# Build for production
npm run build
```

## Project Structure

```
assetflow-blog/
├── src/
│   ├── _data/           # Site metadata
│   ├── _includes/       # Reusable components
│   ├── _layouts/        # Page templates
│   ├── admin/           # Decap CMS config
│   ├── content/
│   │   └── blog/        # Blog posts (markdown)
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── en/              # English pages
│   └── index.html       # Hebrew index
├── dist/                # Build output
├── .eleventy.js         # 11ty configuration
├── netlify.toml         # Netlify configuration
└── package.json
```

## Content Management

Access the CMS at `/admin/` to:
- Create and edit blog posts
- Upload images
- Manage translations
- Use editorial workflow (draft → review → publish)

## Environments

| Branch | URL | Purpose |
|--------|-----|---------|
| `main` | blog.assetsflow.work | Production |
| `develop` | develop--blog.netlify.app | Development |
| PRs | deploy-preview--blog.netlify.app | Previews |

## Comments Setup (Giscus)

1. Enable Discussions in your GitHub repo settings
2. Visit https://giscus.app to generate your config
3. Update the Giscus widget in `src/_layouts/post.html` with:
   - `data-repo` - Your GitHub repo
   - `data-repo-id` - From giscus.app
   - `data-category-id` - From giscus.app

## Adding a New Post

### Via CMS
1. Go to `/admin/`
2. Click "New Post"
3. Fill in the fields
4. Save and publish

### Via File System
Create `src/content/blog/my-post-slug.md`:

```yaml
---
title: "My Post Title"
slug: "my-post-slug"
date: 2026-03-07
excerpt: "A short summary"
author: "Victor"
lang: "he"
layout: "post.html"
permalink: "/posts/my-post-slug/"
tags: ["tag1", "tag2"]
featured_image: "/static/images/blog/my-image.jpg"
---

Post content here...
```

## Deployment

Push to GitHub - Netlify auto-deploys:
- `main` branch → Production
- `develop` branch → Development
- Pull requests → Preview

## License

Private - AssetFlow
