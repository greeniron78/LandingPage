# 03_DESIGN_SYSTEM.md

# DESIGN SYSTEM

Version 1.0

---

# Purpose

본 문서는 Premium Skin Care Landing Page의 모든 UI를 동일한 규칙으로 제작하기 위한 디자인 시스템이다.

모든 화면은 이 문서를 기준으로 구현한다.

새로운 컴포넌트를 만들 때도 기존 규칙을 우선적으로 재사용한다.

일관성(Consistency)은 새로운 디자인보다 우선한다.

---

# Design Principle

Minimal

Premium

Luxury

Elegant

Modern

Natural

Readable

Comfortable

Accessible

---

# Grid System

Desktop

12 Columns

Container Width

1280px

Max Width

1440px

---

Tablet

8 Columns

---

Mobile

4 Columns

---

Container Padding

Desktop

80px

Tablet

48px

Mobile

24px

Small Mobile

20px

---

# 8pt Spacing System

Base Unit

8px

Spacing Tokens

4

8

12

16

24

32

40

48

56

64

72

80

96

120

160

200

240

Section Spacing

Desktop

160px

Tablet

120px

Mobile

96px

---

# Border Radius

XS

8px

Small

12px

Medium

16px

Large

24px

XL

32px

Pill

999px

---

# Shadow System

Shadow XS

0 2px 6px rgba(0,0,0,0.04)

Shadow Small

0 6px 20px rgba(0,0,0,0.05)

Shadow Medium

0 12px 40px rgba(0,0,0,0.08)

Shadow Large

0 24px 60px rgba(0,0,0,0.10)

Hover Shadow

0 20px 50px rgba(0,0,0,0.12)

Shadow는 항상 매우 은은하게 사용한다.

---

# Color Tokens

Primary

#C8A97E

Primary Hover

#B28D63

Primary Active

#9E7852

Secondary

#F8F6F3

Background

#FFFFFF

Surface

#FCFBF9

Surface Soft

#F5F2ED

Border

#ECE8E1

Divider

#F2F2F2

Text Primary

#202020

Text Secondary

#666666

Text Light

#999999

Success

#57A66B

Warning

#EAA13A

Danger

#D96B6B

Info

#7A9BCB

---

# Typography

Font

Pretendard

Fallback

Noto Sans KR

---

Display

64px

Bold

Desktop Only

---

H1

48px

700

---

H2

40px

700

---

H3

32px

600

---

H4

28px

600

---

H5

24px

600

---

Body Large

20px

400

---

Body

18px

400

---

Body Small

16px

400

---

Caption

14px

400

---

Small

12px

400

---

Line Height

150%

Letter Spacing

-1%

---

# Mobile Typography

H1

36px

H2

30px

H3

26px

Body

16px

Caption

14px

---

# Button System

Primary Button

Background

Primary

Text

White

Radius

999px

Height

56px

Padding

24px

Hover

Primary Hover

Transition

200ms

---

Secondary Button

Border

Primary

Background

Transparent

---

Ghost Button

Transparent

No Border

---

Floating CTA

Height

64px

Radius

999px

Shadow Medium

Always Visible

Bottom Safe Area

---

# Card System

Radius

24px

Background

White

Border

1px

Border Color

Border

Shadow Small

Padding

24px

Hover

TranslateY

-6px

Shadow Medium

Transition

250ms

---

# Form System

Input Height

56px

Radius

16px

Border

1px

Focus

Primary Border

Soft Shadow

Label

16px

Placeholder

#999999

---

Textarea

Radius

16px

Min Height

140px

---

Checkbox

Rounded

Simple

---

Radio

Minimal

---

# Icon System

Lucide Icons

Stroke

1.75

Sizes

16

20

24

32

40

48

Outline Only

Filled Icons 금지

---

# Image System

Image Ratio

16:9

1:1

4:5

Portrait

2:3

Hero

Canvas Sequence

WebP

AVIF

Lazy Loading

Priority

Hero Only

---

# Motion Tokens

Fast

150ms

Normal

250ms

Medium

400ms

Slow

800ms

Luxury

1200ms

---

# Animation Curves

ease-out

기본

ease-in-out

Section

Custom Cubic

Luxury Motion

cubic-bezier(0.22,1,0.36,1)

Bounce 금지

Elastic 금지

---

# Hover Rules

Scale

1.02

Maximum

TranslateY

-6px

Opacity

95%

---

# Scroll Animation

Fade

Slide Up

Blur

Scale

Parallax

Canvas Sequence

Pinned Section

---

# Layer System

Background

0

Content

10

Sticky

100

Header

500

Floating CTA

900

Modal

1000

Toast

1100

Loading

1200

---

# Breakpoints

Mobile

0

Tablet

768

Laptop

1024

Desktop

1280

Wide

1440

---

# Component Naming

HeroSection

TrustSection

ProgramCard

ReviewCard

FAQAccordion

CTAButton

FloatingCTA

SectionTitle

SectionContainer

GlassCard

---

# Accessibility

Touch Area

48px 이상

Focus Visible

필수

Keyboard Navigation

지원

ARIA

필수

Semantic HTML

필수

Contrast

WCAG AA

---

# Performance

Lighthouse

Performance

95+

Accessibility

95+

SEO

100

Best Practices

100

CLS

0.1 이하

LCP

2.5초 이하

INP

200ms 이하

---

# Responsive Rule

모든 컴포넌트는

Mobile First

Desktop Later

를 원칙으로 구현한다.

Desktop 레이아웃을 Mobile로 축소하지 않는다.

Mobile 경험을 먼저 설계한다.

---

# Reusability Rule

모든 UI는 컴포넌트 기반으로 제작한다.

동일한 UI는 반드시 재사용한다.

중복 스타일 작성 금지.

Tailwind Utility 우선.

Magic Number 사용 금지.

---

# Coding Rule

TypeScript Strict

ESLint Error 0

Props Type 정의

Component 분리

Custom Hook 적극 활용

Animation 재사용

Canvas Component 분리

---

# Final Design Goal

모든 UI는 사용자가 의식하지 못할 정도로 자연스럽고 일관되어야 한다.

여백, 타이포그래피, 컬러, 애니메이션, 컴포넌트는 각각 따로 존재하는 것이 아니라 하나의 브랜드 경험을 구성하는 요소이다.

최종 목표는 사용자가 "예쁘다"를 넘어 "이 브랜드는 신뢰할 수 있고 고급스럽다"라고 느끼게 만드는 것이다.

디자인은 화려함보다 절제된 완성도를 지향하며, 모든 화면은 모바일에서 가장 아름답고 사용하기 쉬워야 한다.
