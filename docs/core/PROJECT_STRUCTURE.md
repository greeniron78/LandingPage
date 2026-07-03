# PROJECT STRUCTURE

Version 1.0

## Purpose

Define the responsibility boundary for each folder so the codebase stays predictable, reusable, and easy to scale.

## Dependency Rules

- `config/` provides static business and environment data.
- `hooks/` may depend on `lib/` and `config/`.
- `lib/` may depend on `config/` and shared platform APIs.
- `components/` may depend on `hooks/`, `lib/`, and `config/`.
- `app/` may depend on every lower layer.
- Lower layers must never import from higher layers.

## Root Folder

### Responsibility

Own project-level setup, documentation, build configuration, and source organization.

### Belongs Here

- App router entry points
- Shared configuration files
- Root build and lint config
- Documentation
- Public assets

### Must Never Be Placed Here

- Feature-specific UI
- Hook implementations
- Business data
- Component primitives

## `app/`

### Responsibility

Define routes, metadata, layouts, and route-specific composition.

### Belongs Here

- `layout.tsx`
- `page.tsx`
- Route handlers such as `robots.ts` and `sitemap.ts`
- Loading, error, and not-found routes

### Must Never Be Placed Here

- Reusable UI primitives
- Shared business constants
- Reusable hooks
- Asset loading utilities

## `components/`

### Responsibility

Hold reusable UI building blocks and composed sections.

### Belongs Here

- Layout primitives
- Section components
- Shared cards, buttons, and motion-aware UI
- Presentation-only composition

### Must Never Be Placed Here

- Route handlers
- Environment configuration
- Server-only business rules
- Direct app-level composition

## `hooks/`

### Responsibility

Store reusable React hooks and behavioral logic.

### Belongs Here

- Scroll hooks
- Motion hooks
- Media and observer hooks
- Canvas-related hooks

### Must Never Be Placed Here

- JSX markup
- Static content
- Route definitions
- UI styling tokens

## `lib/`

### Responsibility

Store framework-agnostic utilities, shared logic, and helpers.

### Belongs Here

- Utility functions
- Animation helpers
- SEO helpers
- Validation and schema helpers
- Shared constants that are not UI-specific

### Must Never Be Placed Here

- React components
- Route files
- Hook definitions
- Presentation markup

## `config/`

### Responsibility

Hold centralized application data and environment-facing configuration.

### Belongs Here

- Business contact information
- Site metadata values
- Feature flags
- Static content sources

### Must Never Be Placed Here

- UI markup
- Derived presentation logic
- Hook code
- Animation code

## `public/`

### Responsibility

Serve static assets directly.

### Belongs Here

- Images
- Icons
- Fonts
- Downloadable files

### Must Never Be Placed Here

- Source code
- Generated UI state
- Build output

## `styles/`

### Responsibility

Store global design tokens and motion-related CSS.

### Belongs Here

- CSS variables
- Token definitions
- Global motion rules

### Must Never Be Placed Here

- Component-specific logic
- Page-specific overrides
- Application data

## `types/`

### Responsibility

Collect shared TypeScript types when they are reused across multiple layers.

### Belongs Here

- Cross-cutting domain types
- Shared interfaces
- Reusable type aliases

### Must Never Be Placed Here

- Runtime values
- UI components
- Hooks

## `docs/`

### Responsibility

Define the project’s architectural source of truth.

### Belongs Here

- Core architecture docs
- Design system docs
- Development standards
- Task templates
- Decision history

### Must Never Be Placed Here

- Application code
- Generated assets
- Temporary notes that are not part of the project record

## Naming Conventions

- Folders: `kebab-case`
- Components: `PascalCase`
- Hooks: `useCamelCase`
- Utility files: `kebab-case`
- Config files: domain-based names such as `contact.ts`
- Types: singular names unless the domain naturally requires plural naming

## File Placement Examples

- `components/layout/section.tsx`
- `components/hero/hero-canvas.tsx`
- `hooks/use-canvas-sequence.ts`
- `lib/seo/site.ts`
- `config/contact.ts`
- `styles/tokens.css`
- `app/sitemap.ts`

