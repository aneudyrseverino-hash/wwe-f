---
name: Main Event Narrative
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d4c5ab'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#9c8f78'
  outline-variant: '#4f4632'
  surface-tint: '#fabd00'
  primary: '#ffe4af'
  on-primary: '#3f2e00'
  primary-container: '#ffc107'
  on-primary-container: '#6d5100'
  inverse-primary: '#785900'
  secondary: '#b9c7e4'
  on-secondary: '#233148'
  secondary-container: '#3c4962'
  on-secondary-container: '#abb9d6'
  tertiary: '#dfe7ff'
  on-tertiary: '#20304f'
  tertiary-container: '#bbcbf2'
  on-tertiary-container: '#465576'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9e'
  primary-fixed-dim: '#fabd00'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b9c7e4'
  on-secondary-fixed: '#0d1c32'
  on-secondary-fixed-variant: '#39475f'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ed'
  on-tertiary-fixed: '#091b39'
  on-tertiary-fixed-variant: '#374767'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 1rem
  gutter: 1.5rem
  container-max: 1320px
  section-padding: 5rem
---

## Brand & Style
The design system embodies the prestige, athleticism, and high-stakes drama of professional wrestling. It moves away from the "grungy" tropes of the past, leaning into a premium "Sports Entertainment" aesthetic that feels more like a luxury sports broadcast or a high-end athletic brand.

The style is **Corporate Modern with a Cinematic Edge**. It utilizes deep, atmospheric backgrounds and high-contrast accents to evoke the feeling of an arena before the main event. The UI should feel authoritative and celebratory, positioning every user and athlete as a "Champion." 

Key stylistic pillars include:
- **Premium Athleticism:** Clean lines and purposeful whitespace.
- **Victory-Driven:** Frequent use of gold and amber to signify achievement and status.
- **Structural Depth:** Using translucent layers to maintain a sense of immersion without losing functional clarity.

## Colors
This design system uses a palette optimized for high-impact dark mode environments.

- **Primary (Champion Gold):** `#FFC107` (Amber). Used for calls to action, active states, and highlighting winners or "Gold Status" items.
- **Secondary (Deep Navy):** `#0A192F`. The foundation of the UI, providing a sophisticated, professional backdrop that mimics arena shadows.
- **Surface (Lighter Navy):** `#112240`. Used for cards and elevated components to create subtle contrast against the background.
- **Text (Pure White):** `#FFFFFF`. Ensures maximum legibility and a crisp, modern feel against dark surfaces.
- **Overlays:** Dark translucent blacks (`rgba(0, 0, 0, 0.6)`) are used to push secondary content back and focus the user on the "Center Ring."

## Typography
The typography is built on **Inter**, utilizing its full variable weight range to create a hierarchy that feels bold and impactful.

- **Headings:** Utilize "Heavy" and "Black" weights (800-900). Headings should feel like they are "cut from stone," utilizing tighter letter spacing to increase visual tension.
- **Body:** Standardized on "Regular" (400) for high readability in long-form roster bios or match reports.
- **Labels:** Use uppercase with increased tracking (letter-spacing) for a technical, "stats-heavy" feel common in sports analytics.

## Layout & Spacing
Built on the **Bootstrap 5 12-column grid system**, the layout emphasizes a cinematic widescreen experience.

- **Grid:** Use standard Bootstrap container classes (`.container`, `.row`, `.col`).
- **Gutter:** A standard 1.5rem (`24px`) gutter provides enough "breathing room" between high-impact visual elements.
- **Rhythm:** Spacing should follow a base-8 scale (8px, 16px, 24px, 48px, 64px) to maintain a systematic, professional feel. 
- **Sectioning:** Large vertical padding (5rem+) is encouraged between major content blocks to give the high-contrast visuals room to shine.

## Elevation & Depth
Depth is created through a combination of **Tonal Layering** and **Subtle Ambient Shadows**.

- **Surfaces:** Use `#112240` for primary containers (Cards, Modals) over the `#0A192F` background.
- **Shadows:** Avoid harsh black shadows. Use soft, large-radius blurs with a navy-tinted shadow (`rgba(0, 0, 0, 0.4)`) to create a "lifted" effect for cards.
- **Translucency:** Use `backdrop-filter: blur(10px)` on navigation bars and secondary overlays to maintain a sense of the "Arena" (background content) while focusing on the foreground.
- **Accents:** Gold borders (1px) should be reserved for the highest level of elevation—reserved for "Champions" or active selections.

## Shapes
The design system uses a generous **1rem (16px) corner radius** for its primary container units. 

This rounding serves to soften the "aggressive" nature of the bold typography and dark colors, making the professional wrestling theme feel modern, approachable, and "tech-forward" rather than dated or industrial. 

- **Primary Radius:** 1rem (Cards, large buttons, input groups).
- **Small Radius:** 0.5rem (Badges, nested elements).
- **Pill:** Used exclusively for status indicators (e.g., "LIVE", "DEFENDING").

## Components
Consistent styling instructions for the core library:

- **Buttons:** 
  - `.btn-primary`: Background `#FFC107`, text `#0A192F`, font-weight `700`, 1rem border-radius.
  - `.btn-outline`: 1px border `#FFC107`, text `#FFC107`.
- **Cards:** 
  - Background `#112240`, border-radius `1rem`, padding `1.5rem`. Add a subtle hover transition that scales the card 1.02x for a dynamic "Main Event" feel.
- **Input Fields:** 
  - Dark background (`rgba(0,0,0,0.2)`), white text, 1rem border-radius, and a `1px` border that glows Gold (`#FFC107`) on focus.
- **Chips/Badges:** 
  - Use for weight classes or "Championship" tags. High contrast backgrounds with `label-bold` typography.
- **Lists:** 
  - Clean rows with `1px` navy borders (`rgba(255,255,255,0.05)`) separating items.
- **Progress Bars:** 
  - Use for "Stamina" or "Power" ratings. Background navy, fill Gold.