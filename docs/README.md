# Premium Skin Care Interactive Landing Page

> A premium interactive landing page focused on storytelling, smooth motion, and high conversion.

---

## Overview

이 프로젝트는 일반적인 피부샵 홈페이지가 아닙니다.

광고(네이버, 인스타그램, 카카오, 구글 등)를 통해 유입된 사용자가 브랜드를 자연스럽게 경험하고 상담 예약까지 이어질 수 있도록 설계된 **프리미엄 인터랙티브 랜딩페이지**입니다.

프로젝트의 핵심은 화려한 애니메이션이 아니라, **브랜드 경험(Brand Experience)** 입니다.

사용자는 페이지를 스크롤하는 동안 피부가 점진적으로 건강해지는 인터랙션을 경험하며, 신뢰 → 공감 → 기대 → 예약으로 이어지는 스토리를 자연스럽게 따라가게 됩니다.

---

# Vision

이 프로젝트의 목표는

> **"예쁜 홈페이지"를 만드는 것이 아니라, "브랜드를 경험하는 인터랙티브 웹"을 만드는 것입니다.**

디자인은 절제되어야 하며,

모션은 자연스러워야 하고,

성능은 빠르며,

코드는 오랫동안 유지보수 가능한 구조를 가져야 합니다.

---

# Design Philosophy

- Mobile First
- Premium Experience
- Storytelling
- Performance First
- Accessibility First
- Reusability
- Maintainability
- Consistency

---

# User Journey

```text
Advertisement

↓

Hero Experience

↓

Interactive Skin Transformation

↓

Brand Trust

↓

Skin Concerns

↓

Programs

↓

Before & After

↓

Customer Reviews

↓

Promotion

↓

FAQ

↓

Location

↓

Reservation

↓

Complete
```

---

# Technology Stack

| Category      | Stack                    |
| ------------- | ------------------------ |
| Framework     | Next.js 15+              |
| Language      | TypeScript (Strict)      |
| Styling       | Tailwind CSS v4          |
| Motion        | GSAP + Framer Motion     |
| Smooth Scroll | Lenis                    |
| Forms         | React Hook Form + Zod    |
| Icons         | Lucide                   |
| Carousel      | Embla Carousel           |
| Images        | Next/Image + AVIF + WebP |
| Deployment    | Vercel                   |

---

# Project Structure

```text
docs/
│
├── 00_MASTER_PROMPT.md
│
├── core/
│   ├── PROJECT_OVERVIEW.md
│   ├── CREATIVE_DIRECTION.md
│   ├── DESIGN_SYSTEM.md
│   ├── MOTION_SPEC.md
│   └── TECHNICAL_ARCHITECTURE.md
│
├── design/
│   ├── STORYBOARD.md
│   ├── COPYWRITING.md
│   ├── IMAGE_PROMPT.md
│   └── COMPONENT_SPEC.md
│
└── development/
    ├── AI_IMPLEMENTATION_RULE.md
    └── TASK_ROADMAP.md
```

---

# Documentation Guide

프로젝트를 시작하기 전에 아래 순서대로 문서를 읽습니다.

1. `00_MASTER_PROMPT.md`
2. `PROJECT_OVERVIEW.md`
3. `CREATIVE_DIRECTION.md`
4. `DESIGN_SYSTEM.md`
5. `TECHNICAL_ARCHITECTURE.md`
6. `MOTION_SPEC.md`
7. `COMPONENT_SPEC.md`
8. `COPYWRITING.md`
9. `IMAGE_PROMPT.md`
10. `STORYBOARD.md`
11. `AI_IMPLEMENTATION_RULE.md`
12. `TASK_ROADMAP.md`

---

# Core Experience

이 프로젝트의 핵심은 Hero Section입니다.

첫 화면에서 사용자는 스크롤과 함께 피부가 점진적으로 건강해지는 인터랙션을 경험합니다.

이 인터랙션은 단순한 이미지 교체가 아니라 Canvas Image Sequence와 Scroll Timeline을 활용하여 자연스럽게 연결됩니다.

---

# Development Principles

모든 개발은 다음 원칙을 따릅니다.

- Mobile First
- Design System First
- Performance First
- Accessibility First
- Reusable Components
- Clean Architecture
- TypeScript Strict
- Component Composition
- Semantic HTML

---

# Performance Targets

| Metric                 | Target  |
| ---------------------- | ------- |
| Lighthouse Performance | 95+     |
| Accessibility          | 95+     |
| SEO                    | 100     |
| Best Practices         | 100     |
| CLS                    | ≤ 0.1   |
| LCP                    | ≤ 2.5s  |
| INP                    | ≤ 200ms |
| Animation              | 60 FPS  |

---

# Accessibility

프로젝트는 WCAG AA 수준을 목표로 합니다.

- Semantic HTML
- Keyboard Navigation
- Focus Visible
- ARIA Labels
- Touch Area 48px 이상
- prefers-reduced-motion 지원

---

# SEO

프로젝트는 검색 엔진과 SNS 공유를 고려하여 구현합니다.

- Metadata API
- Open Graph
- Twitter Card
- JSON-LD
- LocalBusiness Schema
- FAQ Schema
- Sitemap
- Robots.txt

---

# AI Workflow

AI(Codex)는 항상 다음 순서를 따릅니다.

1. MASTER_PROMPT 확인
2. 관련 문서 확인
3. 기존 구조 분석
4. 재사용 가능한 컴포넌트 확인
5. 최소 변경으로 구현
6. 테스트
7. 결과 제출

---

# Git Branch Strategy

```text
main
develop
feature/*
release/*
hotfix/*
```

---

# Commit Convention

```text
feat:
fix:
refactor:
perf:
docs:
style:
test:
chore:
```

---

# Definition of Done

작업은 아래 조건을 모두 만족해야 완료로 간주합니다.

- 기능 구현 완료
- TypeScript 오류 없음
- ESLint 오류 없음
- 모바일 반응형 확인
- 접근성 확인
- 성능 저하 없음
- 디자인 시스템 준수
- 컴포넌트 재사용
- 테스트 완료

---

# Project Goals

사용자는

"예쁜 홈페이지를 봤다."

가 아니라

"프리미엄 브랜드를 경험했다."

라고 느껴야 합니다.

이 프로젝트의 모든 디자인, 모션, 코드, 카피, 성능 최적화는 이 목표를 위해 존재합니다.

---

# Final Statement

Build a premium experience.

Not a beautiful website.

Create trust through design.

Create emotion through motion.

Create conversion through experience.
