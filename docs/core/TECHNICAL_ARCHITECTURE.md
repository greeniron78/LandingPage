# 10_TECHNICAL_ARCHITECTURE.md

# TECHNICAL ARCHITECTURE

Version 1.0

---

# Goal

본 프로젝트는 단순한 랜딩페이지가 아니다.

브랜드 경험을 전달하는
Interactive Storytelling Landing Page이다.

Architecture는

확장성

유지보수성

재사용성

성능

접근성

SEO

를 모두 고려하여 설계한다.

---

# Tech Stack

Framework

Next.js 15+

App Router

React 19

TypeScript Strict

TailwindCSS v4

GSAP

Framer Motion

Lenis

React Hook Form

Zod

Lucide

Embla Carousel

Next Image

ESLint

Prettier

---

# Rendering Strategy

Static Rendering

우선

SEO가 필요한 부분은

Server Component

사용

인터랙션이 필요한 부분만

Client Component

사용

Client Component 최소화

---

# Folder Structure

app/

layout.tsx

page.tsx

globals.css

providers.tsx

loading.tsx

error.tsx

not-found.tsx

---

components/

layout/

navigation/

hero/

canvas/

sections/

cards/

buttons/

forms/

accordion/

carousel/

footer/

common/

icons/

motion/

---

features/

hero/

reservation/

reviews/

faq/

programs/

location/

---

hooks/

useScrollProgress

useHeroAnimation

useCanvasSequence

useIntersection

useMediaQuery

useReducedMotion

---

lib/

animation/

constants/

seo/

schema/

utils/

validators/

---

styles/

tokens.css

motion.css

variables.css

---

public/

images/

hero/

frames/

icons/

logos/

reviews/

programs/

---

types/

hero.ts

program.ts

review.ts

common.ts

---

# Component Hierarchy

App

↓

Layout

↓

Navigation

↓

Hero

↓

CanvasSequence

↓

HeroCopy

↓

ScrollIndicator

↓

TrustSection

↓

ConcernSection

↓

ProgramSection

↓

BeforeAfter

↓

ReviewSection

↓

DirectorSection

↓

EventSection

↓

FAQSection

↓

LocationSection

↓

FinalCTA

↓

Footer

---

# State Management

기본

React State

공통 상태

Context

전역 상태가 필요할 경우

Zustand

Redux 사용 금지

---

# Animation Responsibility

GSAP

스크롤

Pin

Timeline

Canvas

Parallax

Framer Motion

Fade

Hover

Cards

Modal

Button

Entrance Animation

두 라이브러리의 역할을 절대 섞지 않는다.

---

# Canvas Architecture

Canvas는

Hero 내부가 아닌

독립 컴포넌트

CanvasSequence

로 구현한다.

Canvas는

이미지만 담당한다.

텍스트

CTA

Glow

Particle

은 별도 컴포넌트로 분리한다.

---

# Canvas Flow

Scroll

↓

Progress 계산

↓

Current Frame 계산

↓

Canvas Render

↓

Next Frame

requestAnimationFrame 기반

---

# Motion Architecture

모든 Motion 값은

motion.config.ts

에서 관리

Animation Hook 사용

useHeroMotion()

useFadeUp()

useReveal()

useParallax()

usePinnedSection()

---

# Scroll Architecture

Lenis

↓

GSAP ScrollTrigger Proxy

↓

Timeline

↓

Canvas

↓

Text

↓

Glow

↓

Section Reveal

Scroll Event 직접 사용 금지

---

# Image Strategy

Hero

Canvas Sequence

WebP

AVIF

Priority

---

Section

Next Image

Lazy Loading

Blur Placeholder

---

Icons

SVG

---

# Performance Strategy

Hero Frame

Preload

처음

5장

이후

Background Loading

---

Image Compression

AVIF 우선

WebP 대체

---

GPU

transform

opacity

사용

---

Layout Shift

CLS 최소화

---

Fonts

Local Font

Preload

---

# Responsive Strategy

Desktop를 줄이지 않는다.

처음부터

Mobile 기준

설계

Canvas도

모바일 우선

---

# Accessibility

prefers-reduced-motion

지원

Canvas Animation Off

Particle Off

Parallax Off

모든 버튼

Keyboard 가능

Focus Visible

ARIA Label

Semantic HTML

---

# SEO

Metadata API

Open Graph

Twitter Card

LocalBusiness Schema

FAQ Schema

Breadcrumb Schema

JSON-LD

Sitemap

Robots

Canonical URL

---

# Error Handling

Error Boundary

Loading UI

Image Fallback

Canvas Fallback

Network Error UI

404

500

예약 실패 처리

---

# Security

환경 변수

.env.local

API Key

노출 금지

Client 전달 금지

Form Validation

Zod

Server Validation

필수

---

# Code Rule

TypeScript Strict

ESLint Error 0

Prettier

Import Order

Magic Number 금지

const 사용

함수 80줄 이하

Component 250줄 이하

Hook 분리

---

# Naming Rule

PascalCase

Component

camelCase

Function

UPPER_CASE

Constant

kebab-case

Folder

---

# CSS Rule

Tailwind Utility 우선

Custom CSS 최소

CSS Module 사용 금지

Inline Style 금지

---

# Component Rule

한 컴포넌트는

한 가지 역할만.

Composition 우선.

Props는 최소.

Children 적극 활용.

---

# Motion Rule

모든 Motion은

재사용.

Timeline 분리.

Hook 분리.

Config 분리.

Animation 중복 금지.

---

# Lazy Loading

Canvas

Priority

Hero

↓

Program

↓

Review

↓

FAQ

↓

Map

순서대로 로딩

---

# Testing

Lighthouse

95+

Accessibility

95+

SEO

100

CLS

0.1 이하

LCP

2.5초 이하

INP

200ms 이하

---

# Browser Support

Chrome

Safari

Edge

Firefox

Mobile Safari

Samsung Internet

---

# Deployment

Vercel

Production

Preview

Development

자동 CI

---

# Logging

Console 제거

Production Error

Sentry

선택사항

---

# Git Strategy

main

production

develop

development

feature/\*

기능 개발

release/\*

배포 준비

hotfix/\*

긴급 수정

---

# Commit Convention

feat:

fix:

refactor:

style:

perf:

docs:

test:

chore:

---

# Final Architecture Vision

이 프로젝트는 단순한 랜딩페이지가 아니라

브랜드 경험을 전달하는 Interactive Web Experience이다.

모든 기능은 독립적으로 유지보수 가능해야 하며,

새로운 기능이 추가되어도 기존 구조를 변경하지 않고 확장할 수 있어야 한다.

성능은 디자인만큼 중요하며,

모바일 환경에서도 부드러운 인터랙션과 빠른 로딩을 제공하는 것을 최우선 목표로 한다.

최종 결과물은 "예쁜 코드"가 아니라 "오랫동안 유지보수 가능한 코드"여야 한다.
