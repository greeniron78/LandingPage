# GIT WORKFLOW

Version 1.0

## Purpose

Define the Git process used for long-term development, review, and delivery.

## Branch Strategy

- `main` holds release-ready code.
- `develop` holds integrated work before release.
- `feature/*` holds task-scoped implementation.
- `release/*` holds stabilization work before a release.
- `hotfix/*` holds urgent production fixes.

## Task Workflow

Task

↓

Implementation

↓

Test

↓

Commit

↓

Push

↓

Preview

↓

Merge

↓

Delete Branch

## Commit Convention

- Use short, imperative commit messages.
- Keep each commit focused on one logical change.
- Prefer task-scoped wording when possible.

## Merge Rules

- Merge only after the task is verified.
- Keep feature branches small and short-lived.
- Do not mix unrelated changes in a single merge request.

## Rollback Strategy

- Prefer reverting the specific commit or merge that introduced the issue.
- Do not rewrite published history unless a release process explicitly requires it.
- Preserve the audit trail for review and recovery.

## Code Review Checklist

- Task scope is complete.
- No unrelated files changed.
- Documentation is updated when required.
- Existing behavior remains intact.
- Performance and accessibility are not regressed.

## Deployment Flow

1. Work on a feature branch.
2. Validate locally.
3. Push the branch.
4. Review the preview deployment.
5. Merge after approval.
6. Promote through the release branch when needed.

## Best Practices

- Keep branch names descriptive.
- Commit early enough to preserve meaningful history.
- Avoid long-running branches when a task can be completed sooner.
- Rebase or merge intentionally, not casually.
- Delete branches after merge to keep the repository clean.

