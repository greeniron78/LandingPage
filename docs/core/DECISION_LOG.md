# DECISION LOG

Version 1.0

## Purpose

Record architecture decisions that shape implementation, maintenance, and future task scope.

## Format

- Date
- Decision
- Reason
- Impact
- Status

## Decisions

| Date | Decision | Reason | Impact | Status |
| --- | --- | --- | --- | --- |
| 2026-07-03 | Hero uses Canvas Image Sequence | The landing page depends on a high-fidelity scroll-linked visual transition. | Hero rendering remains canvas-driven and frame-based. | Approved |
| 2026-07-03 | GSAP manages scroll only | Scroll coordination needs to stay isolated from UI animation logic. | Scroll timelines remain centralized in GSAP-driven logic. | Approved |
| 2026-07-03 | Framer Motion manages UI animation only | UI motion should stay separate from scroll orchestration. | Component-level animation can use a different motion layer. | Approved |
| 2026-07-03 | Contact information is centralized in `config/contact.ts` | Contact data must stay reusable and easy to update. | Contact UI consumes shared configuration only. | Approved |
| 2026-07-03 | Mobile First architecture | The audience and conversion flow are mobile-led. | Layout decisions prioritize small screens first. | Approved |
| 2026-07-03 | No hardcoded business data | Business information should not be duplicated across UI files. | Source data lives in configuration, not in components. | Approved |
| 2026-07-03 | Configuration separated from UI | Static values should be independent from presentation. | Components remain easier to reuse and test. | Approved |
| 2026-07-03 | Components follow Single Responsibility Principle | Each component should have one clear job. | Components stay smaller and easier to maintain. | Approved |
| 2026-07-03 | Hero loader refactoring is on hold | Current hero behavior is stable enough to keep implementation risk low. | Loader changes are deferred until a dedicated task. | On Hold |
| 2026-07-03 | Hero rendering changes are on hold | The existing hero architecture remains the current baseline. | Rendering changes are deferred to a later task. | On Hold |
| 2026-07-03 | Frame loading optimization is on hold | Optimization work needs a separate scope and performance baseline. | Frame loading changes are deferred. | On Hold |
| 2026-07-03 | Remove `useScrollProgress` is on hold | Cleanup should happen only after dependency review. | The hook remains available until a later task decides otherwise. | On Hold |
| 2026-07-03 | Remove providers wrapper is on hold | The root layout should not change without a broader composition review. | `app/providers.tsx` remains in place for now. | On Hold |
| 2026-07-03 | Folder restructuring is on hold | Structural changes should wait until the foundation is stable. | Existing folder boundaries remain unchanged. | On Hold |
| 2026-07-03 | Path alias restructuring is on hold | Import path changes are deferred to avoid churn. | Current aliasing remains unchanged. | On Hold |
| 2026-07-03 | `next.config.ts` optimization is on hold | Build-level tuning should happen after the foundation is finalized. | Next config remains minimal for now. | On Hold |
| 2026-07-03 | Do not create a new `src/` directory | The current repository layout is already established. | Root structure remains flat. | Rejected |
| 2026-07-03 | Do not move existing folders | Structural churn would not improve the current task. | Existing folder locations remain intact. | Rejected |
| 2026-07-03 | Do not rename folders | Folder names already align with the current architecture. | Naming remains stable. | Rejected |
| 2026-07-03 | Do not replace the current Hero architecture | The current hero implementation is the approved baseline. | Hero architecture stays as-is until a new task changes it. | Rejected |
| 2026-07-03 | Do not replace existing rendering logic | Rendering logic changes require a separate approved scope. | Existing rendering remains the baseline. | Rejected |

