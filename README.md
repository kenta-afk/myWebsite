# Kenta-afk Portfolio Website ⚡️

A modern portfolio website for full-stack developers built with Qwik, showcasing projects and skills with a clean, responsive design.

## Tech Stack

- **Framework**: [Qwik](https://qwik.dev/) - Resumable and lightning fast
- **Language**: TypeScript for type safety
- **Styling**: Sass/SCSS + Tailwind CSS for styling
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Code Quality**: ESLint, Prettier, Husky for git hooks

## Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm start`          | Start development server     |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run lint`       | Run ESLint                   |
| `npm run lint:fix`   | Fix ESLint errors            |
| `npm run fmt`        | Format code with Prettier    |
| `npm run type-check` | Run TypeScript type checking |
| `npm run validate`   | Run lint and type-check      |
| `npm run deploy`     | Deploy to Cloudflare Pages   |
| `npm run serve`      | Preview with Wrangler        |

## Project Structure

This project follows a modern, maintainable folder structure:

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── container.tsx
│   ├── project-card.tsx       # Project card component
│   ├── skill-category-card.tsx # Skill category card component
│   └── router-head/           # Router head component
├── sections/                  # Page sections
│   ├── hero-section.tsx       # Hero section
│   ├── about-section.tsx      # About section
│   ├── projects-section.tsx   # Projects section
│   └── skills-section.tsx     # Skills section
├── hooks/                     # Custom hooks
│   └── use-page-effects.ts    # Page effects hook
├── types/                     # Type definitions
│   ├── project.ts             # Project-related types
│   ├── skill.ts               # Skill-related types
│   └── grid.ts                # Grid layout types
├── utils/                     # Utility functions and data
│   ├── animation.ts           # Animation utilities
│   ├── navigation.ts          # Navigation utilities
│   ├── projects-data.ts       # Projects data
│   ├── skills-data.ts         # Skills data
│   └── social-links.ts        # Social links
├── config/                    # Configuration files
│   └── app.ts                 # Application configuration
├── styles/                    # Style files
│   ├── hero-section.module.css
│   ├── about-section.module.css
│   ├── projects-section.module.css
│   └── skills-section.module.css
└── routes/
    ├── index.tsx              # Main page
    └── layout.tsx             # Layout component
```

## Features

- **Modular Architecture**: Each section is an independent component for better maintainability
- **Reusable Components**: Common UI elements are abstracted into reusable components
- **Type Safety**: Full TypeScript support with proper type definitions
- **Responsive Design**: Works seamlessly across all device sizes
- **Modern Animations**: Smooth scroll effects and hover animations
- **CSS Modules**: Scoped styling to prevent style conflicts
- **Glassmorphism Design**: Modern glass effect UI design

## Key Features & Improvements

1. **Separation of Concerns**: Business logic separated from UI components
2. **Better Organization**: Related files grouped together in logical folders
3. **Reusability**: Common patterns extracted into reusable components
4. **Maintainability**: Easy to add new features or modify existing ones
5. **Scalability**: Structure supports future growth and feature additions
6. **CSS Modules**: Component-specific styling and style conflict avoidance

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
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

> Note: During development, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

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

### Static Assets

- `public`: Static assets like images can be placed in the public directory. For more info, see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory).

### Function Invocation Routes

Cloudflare Page's [function-invocation-routes config](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes) can be used to include, or exclude, certain paths to be used by the worker functions. Having a `_routes.json` file gives developers more granular control over when your Function is invoked.

This is useful to determine if a page response should be Server-Side Rendered (SSR) or if the response should use a static-site generated (SSG) `index.html` file.

By default, the Cloudflare pages adaptor does not include a `public/_routes.json` config, but rather it is auto-generated from the build by the Cloudflare adaptor.
