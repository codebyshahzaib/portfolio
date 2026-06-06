---
name: Cyber-Minimalist Portfolio
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#859398'
  outline-variant: '#3c494e'
  surface-tint: '#3cd7ff'
  primary: '#a8e8ff'
  on-primary: '#003642'
  primary-container: '#00d4ff'
  on-primary-container: '#00586b'
  inverse-primary: '#00677e'
  secondary: '#c9bfff'
  on-secondary: '#2e009c'
  secondary-container: '#4720ca'
  on-secondary-container: '#baaeff'
  tertiary: '#ffd9a1'
  on-tertiary: '#432c00'
  tertiary-container: '#feb528'
  on-tertiary-container: '#6c4900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#3cd7ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c9bfff'
  on-secondary-fixed: '#1a0063'
  on-secondary-fixed-variant: '#441cc8'
  tertiary-fixed: '#ffdeae'
  tertiary-fixed-dim: '#ffba3d'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
  surface-card: '#111118'
  surface-alternate: '#0D0D16'
  text-primary: '#E8E8F0'
  border-subtle: '#1E1E2E'
  tag-bg: '#1A1A2E'
  tag-border: '#2A2A4A'
  nav-glass: rgba(10, 10, 15, 0.85)
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-base:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.7'
  label-caps:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.08em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  card-padding: 32px
  container-max: 1200px
---

## Brand & Style

The design system is engineered to project a persona of technical mastery, precision, and high-craft engineering. It targets technical recruiters and high-end clients who value production-grade code and modern aesthetics. 

The visual style is a **Dark-Minimal** approach fused with **Cyber-Industrial** accents. It leverages deep navy-black surfaces to create a sense of infinite depth, contrasted by high-energy neon highlights. The interface utilizes high-quality typography and strategic motion to feel "alive" yet controlled. It is characterized by:
- **Professionalism:** Sharp edges and a rigid grid structure.
- **Innovation:** Neon glows and glassmorphic navigation that feel forward-looking.
- **Clarity:** A "function over decoration" philosophy where color is used strictly to signal interactivity or hierarchy.

## Colors

This design system uses a high-contrast dark palette to minimize eye strain while highlighting key technical data. 

- **Primary (Electric Cyan):** Reserved for high-priority actions, active states, and technical signals. Use it sparingly to maintain its impact.
- **Secondary (Muted Purple):** Employed exclusively for decorative gradients and secondary timeline nodes to add depth without distracting from primary content.
- **Neutral (Deep Navy):** The foundational surface color. Contrast is achieved through subtle value stepping (`#0A0A0F` to `#111118`) rather than shadows.
- **Glassmorphism:** The navigation bar uses a semi-transparent surface with a 20px backdrop blur to maintain context as the user scrolls.

## Typography

The typographic hierarchy is built on a "Three-Tier Stack":
1. **Space Grotesk (Brand):** Used for headlines and project titles. Its geometric nature signals modernity.
2. **Inter (Function):** Used for all body copy. The high x-height ensures readability on dark backgrounds.
3. **JetBrains Mono (Technical):** Used for code snippets, metadata, and "terminal-style" accents. This signals a deep understanding of developer tools.

Large display sizes should use negative letter spacing to maintain a tight, professional look. On mobile, font sizes scale down by approximately 30-40% to fit smaller viewports without losing impact.

## Layout & Spacing

The layout utilizes a **Fixed-Fluid Hybrid** grid. While the main content is capped at `1200px` for optimal readability, background elements and the navigation bar span the full viewport.

- **Bento-Grid Logic:** Projects are displayed in an asymmetrical grid (e.g., 2/3 and 1/3 splits) on desktop to create visual interest. On mobile, this collapses into a single-column vertical stack.
- **Vertical Rhythm:** Sections are separated by a generous `120px` gap to emphasize focus on one topic at a time.
- **Rhythm:** An 8px base unit governs all internal padding and margins to ensure technical precision.

## Elevation & Depth

Elevation in this design system is achieved through **Tonal Layering** rather than traditional drop shadows.
- **Base Layer (`#0A0A0F`):** The primary page canvas.
- **Elevated Layer (`#111118`):** Card surfaces and containers.
- **Interactive Depth:** When a card is hovered, it uses a subtle 1px border of `Electric Cyan` and a soft `box-shadow: 0 0 20px rgba(0, 212, 255, 0.1)` to simulate a neon glow.
- **Translucency:** The navigation bar uses `backdrop-filter: blur(20px)` to create a frosted-glass effect that suggests the content exists in a multi-layered 3D space.

## Shapes

The shape language balances modern approachability with technical precision:
- **Cards & Containers:** Use a `1rem` (16px) radius to soften the dark aesthetic.
- **Tags & Badges:** Use a "Pill" shape (fully rounded) to distinguish them as functional, clickable units.
- **Accents:** Use sharp geometric shapes like diamonds (`◆`) for timeline nodes and vertical/horizontal lines to anchor the layout.

## Components

### Buttons & CTAs
- **Primary:** Solid background (`#00D4FF`) with dark text. On hover, apply a "Fill" animation sweeping from left to right.
- **Ghost:** `1px` border of `#00D4FF` with transparent background. Hover state fills the background with a 10% opacity cyan glow.

### Cards (Bento-Style)
- **Structure:** Background `#111118`, border `1px solid #1E1E2E`.
- **Interaction:** On hover, card translates `-4px` on the Y-axis and the border transitions to `#00D4FF`.

### Input Fields & Terminal
- **Styling:** Use `#0D0D16` as the field background with `JetBrains Mono` for all input text. 
- **Focus State:** 1px solid `#00D4FF` border with a subtle inner glow.

### Skills & Tags
- **Styling:** Small pills with background `#1A1A2E` and border `#2A2A4A`.
- **Active State:** Border changes to `#00D4FF` with a light text color shift.

### Timeline
- **Visuals:** A vertical line in `#1E1E2E` with small diamond nodes (`◆`) in `#00D4FF`. Secondary highlights use `#7B61FF`.

### Custom Cursor
- **Desktop Only:** A 10px solid dot in `#00D4FF` surrounded by a 24px trailing ring. The ring should expand and change color when hovering over interactive elements.