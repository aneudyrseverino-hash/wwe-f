---
name: Apex Arena
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e7bdb8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#ae8883'
  outline-variant: '#5d3f3c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#e21b21'
  on-primary-container: '#fff8f7'
  inverse-primary: '#c00013'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#727373'
  on-tertiary-container: '#fafafa'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system captures the raw energy, high-stakes drama, and kinetic motion of professional sports entertainment. The brand personality is aggressive, commanding, and larger-than-life, designed to resonate with an audience that demands intensity and spectacle.

The visual style is **High-Contrast / Bold** with a focus on **Modern Corporate Athletics**. It utilizes a "Dark Mode First" philosophy to allow media content—vibrant photography and high-definition video—to pop against a deep, structural background. The aesthetic balances brutalist weight with cinematic polish, using sharp red accents to guide the eye toward "Main Event" actions. Surfaces are layered to suggest a physical arena, using depth and subtle gradients to create a premium, high-production feel.

## Colors

The palette is built on a foundation of absolute blacks and dark grays to provide maximum contrast for the signature red.

- **Primary Red (#E21B21):** Used for critical calls to action, live indicators, and urgent branding. It represents energy and blood-pumping action.
- **Surface Palette:** The background uses **Deep Black (#000000)** for the primary canvas, with **Dark Gray (#1F1F1F)** used for containers, cards, and secondary navigation tiers to provide structural separation.
- **Typography & Accents:** **Pure White (#FFFFFF)** is reserved for primary headings and essential readability, while mid-tone grays are used for utility text to maintain visual hierarchy.
- **Gradients:** Use linear gradients from `#E21B21` to a darker `#8B1114` for buttons and active states to add a metallic, high-octane sheen.

## Typography

Typography is used as a graphic element. The pairing of **Anton** and **Archivo Narrow** creates a high-pressure, editorial feel that mimics sports broadcasting overlays.

- **Headlines:** Must always be uppercase. The condensed nature of Anton allows for massive, impactful sizing without sacrificing horizontal space. Use tight line-heights to keep the "wall of text" feeling.
- **Body Text:** Archivo Narrow provides high legibility while maintaining the "condensed" aesthetic. It is efficient for data-heavy sections like rosters or match results.
- **Labels:** Use bold, tracked-out uppercase labels for metadata (e.g., "LIVE," "MATCH PREVIEW," "CHAMPION").

## Layout & Spacing

The layout follows a **Fluid Grid** model that emphasizes density and impact.

- **Grid:** A 12-column grid system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** An 8px base unit drives all spacing. Larger gaps (64px+) should be used between sections to allow the aggressive typography room to breathe.
- **Full-Width Bleeds:** Key sections—like Hero banners and "Breaking News"—should bleed to the edges of the viewport to maximize the cinematic effect.
- **Safe Zones:** High-priority content should be contained within a 1440px max-width container to ensure readability on ultra-wide monitors.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Light Sources**.

- **Z-Axis:** The background is the lowest level (`#000000`). Cards and content blocks sit on the next level (`#1F1F1F`).
- **Glows:** Instead of traditional drop shadows, use subtle "Atmospheric Glows." For example, a Red Primary button may have a soft red outer glow (`rgba(226, 27, 33, 0.3)`) to simulate neon or stadium lighting.
- **Overlays:** Use 40% black-to-transparent linear gradients on the bottom of image containers to ensure white text remains legible over busy photography.
- **Interaction:** Hovering over cards should trigger a slight scale increase (1.02x) and a shift from a flat gray border to a subtle white or red border.

## Shapes

The shape language is **Soft (Level 1)**, prioritizing architectural strength over roundness.

- **Base Radius:** 4px (0.25rem) is the standard for cards and buttons. This provides just enough modern polish without losing the "hard" edge required for a sports brand.
- **Large Components:** Hero images and large containers use an 8px radius.
- **Interactive Elements:** Checkboxes and inputs maintain a sharp 2px radius to feel mechanical and precise.
- **Circular Elements:** Reserved exclusively for user avatars or "Live" status indicators.

## Components

### Buttons
- **Primary:** Background `#E21B21`, text `#FFFFFF`, 4px border-radius. On hover: darken background and add a subtle red glow.
- **Secondary:** Transparent with a 2px `#FFFFFF` border. On hover: solid white background with black text.
- **Text:** All-caps Anton font, 14px or 16px, centered.

### Cards
- **Structure:** Background `#1F1F1F`, 4px radius.
- **Media:** Images should fill the top half of the card. Use a hard cut between the image and the content area.
- **Hover:** The border should transition from `#1F1F1F` to `#E21B21`.

### Inputs & Fields
- **Style:** Deep black background with a 1px `#1F1F1F` border.
- **Active State:** Border changes to `#E21B21` with a very subtle inner glow.
- **Label:** Small, Archivo Narrow Bold, uppercase, placed above the field.

### Status Chips
- **"Live":** Solid `#E21B21` background, white text, blinking dot icon.
- **Category:** Semi-transparent white (10% opacity) with white text, all-caps.

### Transitions
- All interactive states (hover, focus, active) must use a `200ms ease-out` transition curve. 
- Use "Slide-in" animations for loading list items to mimic sports broadcast tickers.