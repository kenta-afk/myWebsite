# Kenta-afk Portfolio Website ⚡️

A modern portfolio website built with Qwik, showcasing projects and skills with a clean, responsive design.

## Tech Stack

- **Framework**: [Qwik](https://qwik.dev/) - Resumable and lightning fast
- **Language**: TypeScript for type safety
- **Styling**: Sass/SCSS for enhanced CSS capabilities
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Code Quality**: ESLint, Prettier, Husky for git hooks

## Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm start`          | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run lint`       | Run ESLint                   |
| `npm run lint:fix`   | Fix ESLint errors            |
| `npm run fmt`        | Format code with Prettier    |
| `npm run type-check` | Run TypeScript type checking |
| `npm run validate`   | Run lint and type-check      |
| `npm run deploy`     | Deploy to Cloudflare Pages   |

## Project Structure

This project follows a modern, maintainable folder structure:

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── container.tsx
│   ├── work/            # GitHub works components
│   │   ├── work.tsx
│   │   ├── works.tsx
│   │   └── style.css
│   ├── project-card.tsx
│   └── skill-category-card.tsx
├── sections/            # Page sections
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── works-section.tsx
│   ├── skills-section.tsx
│   └── contact-section.tsx
├── hooks/               # Custom hooks
│   └── use-page-effects.ts
├── types/               # Type definitions
│   ├── project.ts
│   └── skill.ts
├── utils/               # Utility functions and data
│   ├── animation.ts
│   ├── navigation.ts
│   ├── projects-data.ts
│   ├── skills-data.ts
│   └── social-links.ts
└── routes/
    └── index.tsx        # Main page (simplified)
```

## Features

- **Modular Architecture**: Each section is a separate component for better maintainability
- **Reusable Components**: Common UI elements are abstracted into reusable components
- **Type Safety**: Full TypeScript support with proper type definitions
- **Responsive Design**: Works seamlessly across all device sizes
- **Modern Animations**: Smooth scroll effects and hover animations
- **GitHub Integration**: Dynamically displays GitHub repositories

## Key Improvements

1. **Separation of Concerns**: Business logic separated from UI components
2. **Better Organization**: Related files grouped together in logical folders
3. **Reusability**: Common patterns extracted into reusable components
4. **Maintainability**: Easier to add new features or modify existing ones
5. **Scalability**: Structure supports future growth and feature additions

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Adding Integrations

Use the `npm run qwik add` command to add additional integrations:

```bash
npm run qwik add
```

Available integrations include:

- Cloudflare Pages
- Netlify
- Express Server
- [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/myWebsite.git
   cd myWebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

> Note: During development, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Deployment

### Cloudflare Pages

This project is optimized for Cloudflare Pages deployment:

1. **Local preview with Wrangler**

   ```bash
   npm run serve
   ```

   Then visit [http://localhost:8787/](http://localhost:8787/)

2. **Deploy to Cloudflare Pages**
   ```bash
   npm run deploy
   ```

### Deployment Configuration

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 18.x or 20.x

For detailed setup, follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

### Function Invocation Routes

Cloudflare Page's [function-invocation-routes config](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes) can be used to include, or exclude, certain paths to be used by the worker functions. Having a `_routes.json` file gives developers more granular control over when your Function is invoked.
This is useful to determine if a page response should be Server-Side Rendered (SSR) or if the response should use a static-site generated (SSG) `index.html` file.

By default, the Cloudflare pages adaptor _does not_ include a `public/_routes.json` config, but rather it is auto-generated from the build by the Cloudflare adaptor. An example of an auto-generate `dist/_routes.json` would be:

```
{
  "include": [
    "/*"
  ],
  "exclude": [
    "/_headers",
    "/_redirects",
    "/build/*",
    "/favicon.ico",
    "/manifest.json",
    "/service-worker.js",
    "/about"
  ],
  "version": 1
}
```

In the above example, it's saying _all_ pages should be SSR'd. However, the root static files such as `/favicon.ico` and any static assets in `/build/*` should be excluded from the Functions, and instead treated as a static file.

In most cases the generated `dist/_routes.json` file is ideal. However, if you need more granular control over each path, you can instead provide you're own `public/_routes.json` file. When the project provides its own `public/_routes.json` file, then the Cloudflare adaptor will not auto-generate the routes config and instead use the committed one within the `public` directory.
