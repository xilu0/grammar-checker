# Angular SPA Constitution

## Core Principles

### I. Component-First Architecture
- Each functional module exists as an independent component.
- Components must be highly cohesive and loosely coupled.
- Follow the Angular style guide and best practices.
- Prefer standalone components over NgModules.

### II. State Management
- Use NgRx/Akita/Signal Store for global state management.
- Use Angular Signals or RxJS for local state.
- State changes must be traceable and debuggable.
- Follow the unidirectional data flow principle.

### III. Test-First Development
- Unit test coverage must be at least 80%.
- Use Jasmine/Karma for unit testing.
- Use Cypress/Playwright for E2E testing.
- The CI/CD pipeline must include a testing stage.

### IV. Performance & Optimization
- Implement lazy loading and code splitting.
- Use the OnPush change detection strategy.
- Optimize bundle size; initial load should not exceed 500KB.
- Core Web Vitals metrics must be met.

### V. Accessibility & i18n
- Comply with WCAG 2.1 AA level.
- Use Angular i18n for internationalization.
- Use semantic HTML and ARIA labels.
- Support keyboard navigation.

## Development Standards

### TypeScript Configuration
- Enable strict mode (strict: true).
- No implicit any.
- Strict null checks.
- Enforce code style with ESLint + Prettier.

### API Integration
- Use HttpClient and interceptors.
- Unified error handling mechanism.
- Define API response types.
- Manage API endpoints with environment variables.

### Routing & Navigation
- Implement permission control with route guards.
- Optimize preloading strategy.
- Support for breadcrumb navigation.
- Deep linking and state preservation.

## Quality Gates

### Code Review Requirements
- Reviewed by at least one team member.
- Automated code quality checks must pass.
- No unresolved linting errors.
- Update the change log.

### CI/CD Pipeline
- Build → Unit Test → E2E Test → Deploy.
- Production deployment requires manual approval.
- Automatic version number management.
- Rollback mechanism in place.

## Governance

- The Constitution has priority over other practices.
- Modifications require a 2/3 majority approval from the team.
- Review and update quarterly.
- New members must study this document upon onboarding.

**Version**: 1.0.0 | **Ratified**: 2025-01-15 | **Last Amended**: 2025-01-15
