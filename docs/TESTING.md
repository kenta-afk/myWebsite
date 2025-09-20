# Qwik Project Testing Configuration

## Overview

This document outlines the testing strategy and setup for the Qwik portfolio project.

## Testing Stack

### Unit Testing

- **Framework**: Vitest
- **Utilities**: @testing-library/qwik
- **Coverage**: c8

### E2E Testing

- **Framework**: Playwright
- **Browser Support**: Chromium, Firefox, Safari

### Component Testing

- **Framework**: @testing-library/qwik
- **Utilities**: @testing-library/jest-dom

## Test Structure

```
src/
├── __tests__/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.test.tsx
│   │   │   ├── card.test.tsx
│   │   │   └── container.test.tsx
│   │   ├── project-card.test.tsx
│   │   └── skill-category-card.test.tsx
│   ├── hooks/
│   │   ├── use-async-state.test.ts
│   │   └── use-contact-form.test.ts
│   ├── services/
│   │   ├── api.test.ts
│   │   ├── validation.test.ts
│   │   └── logger.test.ts
│   └── utils/
│       ├── animation.test.ts
│       ├── navigation.test.ts
│       └── data.test.ts
├── e2e/
│   ├── homepage.spec.ts
│   ├── navigation.spec.ts
│   ├── contact-form.spec.ts
│   └── responsive.spec.ts
└── fixtures/
    ├── mock-data.ts
    └── test-utils.ts
```

## Running Tests

### Development

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage

# E2E tests
npm run test:e2e

# Specific test file
npm run test button.test.tsx
```

### CI/CD

```bash
# Production test suite
npm run test:ci

# E2E in headless mode
npm run test:e2e:ci
```

## Test Guidelines

### Unit Tests

- Test component props and behavior
- Mock external dependencies
- Focus on pure functions first
- Aim for 80%+ coverage

### Integration Tests

- Test component interactions
- Verify data flow
- Test form submissions
- Check navigation behavior

### E2E Tests

- Critical user paths
- Cross-browser compatibility
- Responsive behavior
- Performance metrics

## Mock Strategy

- API calls are mocked in tests
- Browser APIs are stubbed
- External services use test doubles
- Static data for predictable tests

## Coverage Targets

- **Statements**: 80%
- **Branches**: 75%
- **Functions**: 80%
- **Lines**: 80%
