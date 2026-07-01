# 04_MOTION_SPEC.md

# MOTION SPECIFICATION

Version 1.0

---

# Motion Philosophy

모든 애니메이션은

사용자의 시선을 유도하기 위한 도구이다.

애니메이션이 주인공이 되어서는 안 된다.

콘텐츠가 주인공이다.

움직임은

조용하고

우아하며

부드럽고

자연스러워야 한다.

Apple Product Page 수준의 Motion Quality를 목표로 한다.

---

# Motion Keywords

Luxury

Organic

Elegant

Natural

Smooth

Calm

Premium

Minimal

Editorial

Timeless

---

# Motion Principle

절대

빠르게 튀지 않는다.

Bounce 사용 금지.

Elastic 사용 금지.

Flash 사용 금지.

Zoom In 과도하게 사용 금지.

Rotate Animation 금지.

Animation은

스크롤을 방해하지 않는다.

---

# Global Motion

Default Duration

400ms

Fast

200ms

Medium

600ms

Luxury

1200ms

Very Slow

1800ms

---

# Easing

Default

ease-out

Luxury Motion

cubic-bezier(0.22,1,0.36,1)

Opacity

ease-in-out

Scale

ease-out

Scroll

linear

---

# Hero Experience

Hero Height

100vh

Pinned Section

Enabled

Pin Duration

250vh

Canvas Enabled

Yes

---

# Hero Canvas

Canvas

Full Screen

Frame Count

60

Image Sequence

frame0001.png

↓

frame0060.png

Canvas Resolution

Auto DPR

Max DPR

2

60FPS 유지

---

# Hero Scroll Timeline

Scroll Progress

0%

↓

100%

Canvas Progress

Frame 1

↓

Frame 60

Scroll과 Frame은

1:1 Mapping

---

# Hero Image Animation

Frame 1

여드름 피부

↓

Frame 10

붉은기 감소

↓

Frame 20

톤 개선

↓

Frame 30

피부결 개선

↓

Frame 40

광채 증가

↓

Frame 50

건강한 피부

↓

Frame 60

프리미엄 화장품 광고 수준의 피부 표현

---

# Background Animation

0%

Warm White

↓

30%

Soft Beige

↓

60%

Light Gold

↓

100%

Pure White

Transition

Linear

---

# Glow Animation

Glow Opacity

0%

↓

35%

Glow Blur

60px

↓

120px

Glow Scale

1.0

↓

1.15

---

# Floating Particle

Particle Count

20

Speed

Very Slow

Opacity

8%

Movement

Random Floating

No Rotation

No Flash

---

# Hero Typography

Initial

Opacity

0

Y

40px

Blur

12px

↓

Visible

Opacity

1

Y

0

Blur

0

Duration

1000ms

---

# Hero Text Transition

0%

피부는 바뀔 수 있습니다.

↓

30%

당신만의 피부 솔루션

↓

60%

프리미엄 스킨케어

↓

100%

지금 첫 상담을 시작하세요.

Fade Cross Animation

---

# Hero Exit

Hero Scale

1

↓

0.92

Opacity

1

↓

0.7

Blur

0

↓

6px

Background Brightness

105%

↓

100%

---

# Section Reveal

각 Section은

Viewport

75%

도달 시 등장

Animation

Fade Up

Opacity

0

↓

1

Y

40px

↓

0

Blur

8px

↓

0

Duration

800ms

---

# Image Reveal

Scale

1.05

↓

1

Opacity

0

↓

1

Duration

1000ms

---

# Card Hover

TranslateY

-6px

Scale

1.02

Shadow

Small

↓

Medium

Duration

250ms

---

# Button Hover

Scale

1.02

Brightness

102%

Duration

180ms

---

# Floating CTA

Always Visible

Bottom

24px

Safe Area 대응

Hide

없음

Opacity

95%

Hover

100%

---

# Review Slider

Auto Slide

Disabled

사용자가 직접 넘긴다.

Swipe Enabled

Infinite

Enabled

Snap

Enabled

---

# Before & After

Scroll Reveal

Image Scale

1.08

↓

1

Opacity

0

↓

1

Duration

1000ms

---

# FAQ

Accordion

Height Animation

Enabled

Duration

300ms

Ease

ease-out

Arrow Rotation

180°

---

# Navigation

Transparent

↓

White

Scroll 80px

Transition

300ms

Blur

12px

---

# CTA Reveal

마지막 CTA는

전체 화면

Fade In

Scale

0.96

↓

1

Duration

1000ms

Glow

Soft

---

# Scroll Indicator

Hero 하단

Animated

Opacity

50%

↓

0%

Scroll 10%

사라짐

---

# Loading Animation

Logo Fade

Opacity

0

↓

1

Duration

1200ms

Loading Progress

Natural

---

# Lazy Motion

Section이 보이기 전에는

Animation 실행 금지

Intersection Observer 사용

---

# Performance Rule

모든 Motion

GPU Rendering

transform

opacity

사용

Layout Animation 최소화

Reflow 최소화

---

# Accessibility Motion

사용자가

prefers-reduced-motion

설정 시

Canvas Animation 비활성화

Fade만 유지

Parallax 제거

Particle 제거

---

# Mobile Optimization

모바일에서는

GPU 메모리를 고려한다.

Canvas Image는

WebP

또는 AVIF

사용

필요 시

30 Frame으로 자동 축소

---

# Motion Hierarchy

가장 중요한 Motion

① Hero Canvas

↓

② Hero Typography

↓

③ Section Reveal

↓

④ Before & After

↓

⑤ Card Hover

↓

⑥ Button Hover

↓

⑦ FAQ

↓

⑧ Floating CTA

---

# Motion Never

절대 하지 않는다.

❌ Bounce

❌ Elastic

❌ Flash

❌ Shake

❌ Infinite Rotation

❌ Neon Glow

❌ 강한 Parallax

❌ 과도한 Blur

❌ 과도한 Zoom

❌ 자동 재생 영상

❌ 시선을 방해하는 움직임

---

# Technical Stack

GSAP ScrollTrigger

Lenis

Framer Motion

Canvas API

requestAnimationFrame

Intersection Observer

CSS Transform

Next.js Dynamic Import

---

# Implementation Rules

Canvas Animation은 별도 컴포넌트로 분리한다.

ScrollTrigger와 Canvas는 하나의 Timeline으로 관리한다.

모든 Motion 값은 상수로 관리한다.

Magic Number를 사용하지 않는다.

GPU 가속 가능한 속성(transform, opacity)만 애니메이션한다.

애니메이션은 컴포넌트마다 중복 구현하지 않고 재사용 가능한 Hook 또는 Motion Utility를 사용한다.

모바일 성능이 우선이며, 60FPS를 목표로 한다. 저사양 기기에서는 자동으로 프레임 수와 효과를 줄여 부드러운 경험을 유지한다.

---

# Final Motion Goal

사용자는 페이지를 스크롤하는 것이 아니라

한 편의 프리미엄 브랜드 영화를 경험해야 한다.

첫 화면의 피부 변화는 사용자의 시선을 사로잡고,

이후의 모든 Motion은 브랜드에 대한 신뢰를 자연스럽게 쌓아가는 역할을 해야 한다.

모든 애니메이션은 절제되어야 하며, 사용자가 "움직인다"는 사실보다 "브랜드가 고급스럽다"는 인상을 먼저 받도록 설계한다.

최종 결과물은 Apple 제품 소개 페이지 수준의 완성도와 성능을 목표로 하며, 모바일 환경에서도 자연스럽고 끊김 없는 인터랙션을 제공해야 한다.
