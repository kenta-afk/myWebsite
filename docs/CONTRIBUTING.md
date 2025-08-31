# Contributing to Kenta-afk Portfolio

## Development Setup

### Prerequisites
- Node.js 18.17.0+ or 20.3.0+
- npm or yarn or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd myWebsite

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

## Project Architecture

### Folder Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI building blocks
│   └── *-card.tsx      # Specific component cards
├── sections/           # Page sections (Hero, About, etc.)
├── hooks/              # Custom Qwik hooks
├── services/           # Business logic & API calls
├── types/              # TypeScript type definitions
├── utils/              # Pure utility functions
├── config/             # Application configuration
└── routes/             # Qwik City routes
```

### Design Patterns

1. **Component Composition**: Prefer composition over inheritance
2. **Custom Hooks**: Extract reusable logic into hooks
3. **Service Layer**: Separate business logic from components
4. **Type Safety**: Use TypeScript for all code
5. **Configuration**: Centralize app settings

## Code Standards

### TypeScript
- Use strict mode
- Define interfaces for all data structures
- Prefer `type` over `interface` for simple types
- Use generic types where appropriate

### Components
```tsx
// ✅ Good
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  onClick$?: PropFunction<() => void>;
}

export const Button = component$<ButtonProps>(({ 
  variant = 'primary', 
  size = 'md',
  ...props 
}) => {
  return (
    <button class={getButtonClasses(variant, size)} {...props}>
      <Slot />
    </button>
  );
});
```

### Styling
- Use Tailwind CSS classes
- Create reusable CSS classes for complex styles
- Follow mobile-first responsive design
- Use CSS custom properties for theming

### State Management
- Use `useSignal` for simple state
- Use `useStore` for complex objects
- Implement custom hooks for shared logic
- Keep state close to where it's used

## Testing Guidelines

### Unit Tests
```tsx
// components/__tests__/button.test.tsx
import { render, screen } from '@testing-library/qwik';
import { Button } from '../button';

describe('Button Component', () => {
  it('renders with correct variant classes', async () => {
    await render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-700');
  });
});
```

### Service Tests
```ts
// services/__tests__/validation.test.ts
import { ValidationService } from '../validation';

describe('ValidationService', () => {
  describe('validateEmail', () => {
    it('validates correct email format', () => {
      expect(ValidationService.validateEmail('test@example.com')).toBe(true);
      expect(ValidationService.validateEmail('invalid-email')).toBe(false);
    });
  });
});
```

## Performance Guidelines

### Code Splitting
- Use lazy loading for heavy components
- Implement route-based code splitting
- Split vendor libraries when beneficial

### Bundle Optimization
- Tree shake unused code
- Optimize images and assets
- Use appropriate compression

### Runtime Performance
- Minimize re-renders
- Use `useSignal` appropriately
- Implement proper error boundaries

## Git Workflow

### Branch Naming
- `feature/component-name`
- `bugfix/issue-description`
- `hotfix/critical-fix`

### Commit Messages
```
type(scope): description

[optional body]

[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

### Pull Request Process
1. Create feature branch from `develop`
2. Implement changes with tests
3. Run linting and type checking
4. Submit PR with clear description
5. Address review feedback
6. Merge after approval

## Release Process

### Versioning
Follow Semantic Versioning (SemVer):
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

### Deployment
1. Merge to `main` branch
2. Tag release version
3. Build production bundle
4. Deploy to Cloudflare Pages
5. Update documentation

## Getting Help

- Check existing issues and discussions
- Read the documentation
- Ask questions in team channels
- Reach out to maintainers
