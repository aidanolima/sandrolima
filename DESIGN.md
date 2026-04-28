---
name: SANDRO LIMA
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffffff'
  on-tertiary: '#490080'
  tertiary-container: '#f0dbff'
  on-tertiary-container: '#8a33d9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
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
    lineHeight: '1.6'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding: 120px
  card-gap: 24px
  container-max: 1280px
  gutter: 32px
---

## Brand & Style

The design system is engineered for a high-performance mentorship environment, blending the precision of data analytics with the energy of social growth. It adopts a **High-Contrast / Modern** style that leans heavily into a sophisticated dark mode to establish immediate authority and professionalism. 

The aesthetic is characterized by deep, layered grays that provide a canvas for vibrant, neon-inflected accents. This juxtaposition represents the "spark" of insight within complex data. The atmosphere is intentional and results-driven, utilizing structured card layouts to organize dense information into digestible, high-impact modules. Visual storytelling is achieved through a mix of technical abstraction—representing the "algorithm"—and professional lifestyle imagery that anchors the service in real-world success.

## Colors

The palette is anchored by a "Midnight Carbon" base, providing a high-end, cinematic feel. 

- **Primary (Neon Lime):** Used exclusively for primary calls to action, success metrics, and critical focus points. It provides maximum contrast against the dark background.
- **Secondary (Electric Indigo) & Tertiary (Deep Purple):** These colors are used for data visualization, decorative accents, and to distinguish between different service tiers. They add depth and a tech-forward "glow" to the interface.
- **Neutrals:** A range of cool grays are used to create structural hierarchy. Backgrounds use the darkest values, while cards and containers use slightly lighter tones to create a sense of physical layering.

## Typography

This design system utilizes a high-impact typographic pairing to balance technical innovation with readability. 

**Space Grotesk** is the voice of the brand, used for all headlines and functional labels. Its geometric, slightly eccentric letterforms evoke a futuristic, cutting-edge feel. Headlines should be set with tight tracking and significant weight to command attention.

**Inter** serves as the workhorse for body copy and data descriptions. Its neutral, highly legible design ensures that complex mentoring advice and traffic strategies remain accessible and professional.

## Layout & Spacing

The layout follows a **Fixed Grid** model within a 1280px container, utilizing a 12-column system. Large vertical margins (120px+) between sections create a rhythmic "breathing room" that allows the bold typography and imagery to stand out.

Spacing follows an 8px linear scale. We prioritize "Information Grouping," where related cards are grouped with 24px gaps, while disparate content blocks are separated by much larger intervals to signify a change in topic. Horizontal alignment is strict, ensuring that text and visual elements feel locked into a professional, engineered structure.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Subtle Glows** rather than traditional drop shadows.

1.  **Base Layer:** The deepest neutral hex (#0F1115) acts as the canvas.
2.  **Surface Layer:** Cards and interactive sections use #1C1F26.
3.  **Accent Depth:** High-priority cards may feature a very soft, 10% opacity outer glow in the primary color (Neon Lime) or secondary color (Indigo) to simulate a "backlit" tech screen effect.
4.  **Glassmorphism:** Navigation bars and floating overlays should use a backdrop-blur (20px) with a semi-transparent dark fill to maintain context of the content beneath them.

## Shapes

The shape language is precise and disciplined. A **Soft** roundedness (0.25rem) is applied to buttons and small UI elements to prevent the design from feeling too aggressive or "sharp." Larger containers like cards and image frames use a slightly more pronounced radius (0.75rem) to provide a modern, premium finish. 

Icons should be stroke-based with consistent 2px weights, echoing the technical line-work found in abstract graphics and data charts.

## Components

- **Buttons:** Primary buttons feature a solid Neon Lime background with black text. Hover states should include a subtle scale increase (1.02x) and a slight indigo outer glow. Secondary buttons use a "Ghost" style with a white or lime border and no fill.
- **Cards:** Cards are the primary container for services and benefits. They should have a subtle 1px border (#2D3139) to define them against the dark background. Header text within cards should always be bold.
- **Data Charts:** Visualizations should utilize gradients transitioning from Secondary (Indigo) to Tertiary (Purple). Lines should be crisp with "glow" effects at data points.
- **Status Chips:** Small, pill-shaped indicators for "Live," "Scaling," or "Optimized" status, using low-opacity versions of the accent colors with high-contrast text.
- **Input Fields:** Dark backgrounds with 1px borders that change to Neon Lime upon focus. Placeholder text should be in the secondary text color for clear hierarchy.
- **Imagery:** Marketing lifestyle photos should be treated with a slight dark overlay or desaturation to ensure they blend seamlessly with the dark UI components.