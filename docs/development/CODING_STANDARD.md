# CODING STANDARD

Version 1.0

## Purpose

Define code-level conventions for the project so implementation stays consistent and predictable.

## Folder Naming

- Use `kebab-case` for folders.
- Keep folder names short and domain-specific.
- Prefer one responsibility per folder.

## Component Naming

- Use `PascalCase` for component exports.
- Name components after their role, not their implementation detail.
- Keep section components aligned with page meaning.

## Hook Naming

- Use the `use` prefix.
- Use `camelCase` after the prefix.
- Name hooks after the behavior they provide.

## Function Naming

- Use verbs for actions and nouns for data accessors.
- Keep helper names specific and descriptive.
- Avoid overloaded generic names such as `handleStuff`.

## Type Naming

- Use `PascalCase`.
- Prefer singular domain names.
- Use `Props` suffix only for component prop objects.

## Import Order

1. React and framework imports
2. Third-party packages
3. Absolute project imports
4. Relative imports
5. Styles or side-effect imports

## File Size Limits

- Keep components small enough to read in one pass.
- Split files when a file starts mixing responsibilities.
- Treat 250 lines as a review threshold, not a target.

## Component Rules

- One component, one responsibility.
- Prefer composition over conditional complexity.
- Keep presentational and behavioral concerns separated where possible.

## Hook Rules

- Hooks must be reusable and focused.
- Hooks must not render UI.
- Hooks should encapsulate shared behavior instead of duplicating it.

## Tailwind Rules

- Prefer design tokens over raw values when a token exists.
- Keep utility groups readable and consistent.
- Avoid repeated one-off style fragments when a reusable pattern exists.

## TypeScript Rules

- Keep `strict` mode compatibility.
- Avoid `any`.
- Use explicit types at boundaries and inference inside local scope where clear.
- Prefer readonly data where values are static.

## Performance Rules

- Avoid unnecessary re-renders and duplicated work.
- Use client components only when interactivity requires them.
- Keep heavy work out of render paths whenever possible.

## Reusable Component Rules

- Reuse primitives before creating new variants.
- Extract repeated structure before extracting repeated style.
- Prefer configuration-driven content for repeatable sections.

## Magic Number Rules

- Do not introduce unexplained numeric constants.
- Move repeated values to tokens, config, or named helpers.
- Keep exceptional values local only when they are truly one-off.

## Comments Rules

- Comments should explain intent, not restate code.
- Avoid comments for obvious code.
- Document only non-obvious constraints or tradeoffs.

## Formatting Rules

- Use consistent indentation and line breaks.
- Keep files formatted by the project formatter.
- Preserve readable grouping in long class lists or object literals.

Content Rules

Content modules contain:

✓ Headlines
✓ CTA text
✓ Descriptions
✓ Marketing copy
✓ Labels

Content modules must never contain:

✗ React
✗ JSX
✗ Hooks
✗ Styling
✗ Event handlers
✗ Rendering logic
✗ Animation logic

## Barrel File Rule

Do NOT create index.ts by default.

Introduce index.ts only when one of the following conditions is met:

- The folder contains five or more public modules.
- Import statements become repetitive.
- Multiple modules are frequently imported together.
- A single public API improves maintainability.

Otherwise, prefer direct imports.
