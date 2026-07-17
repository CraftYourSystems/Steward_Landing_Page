# Brand Typography

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language
- Brand Colors

---

# Purpose

Typography is the primary visual element of Steward.

Rather than relying on decorative graphics or excessive color, Steward uses typography to create hierarchy, rhythm, and clarity.

Every type decision should improve readability before aesthetics.

---

# Typography Philosophy

Restaurant owners often view Steward in busy, fast-moving environments.

Typography should therefore feel:

- Calm
- Professional
- Editorial
- Spacious
- Timeless

It should never feel:

- Trendy
- Futuristic
- Playful
- Compressed
- Decorative

The goal is effortless reading.

---

# Font Families

## Primary Typeface

Used for:

- Headings
- Navigation
- Buttons
- UI Labels

Recommendation

**Inter**

Reasons:

- Excellent screen readability
- Modern without feeling trendy
- Wide range of weights
- Outstanding variable font support
- Industry standard for SaaS products

Fallback

system-ui, sans-serif

---

## Secondary Typeface

Used sparingly for:

- Hero headlines
- Section headings
- Pull quotes
- Editorial emphasis

Recommendation

**Newsreader**

Reasons:

- Editorial character
- High readability
- Warm and premium appearance
- Complements Inter beautifully

Fallback

Georgia, serif

The serif font should create moments of emphasis—not dominate the interface.

---

# Font Weights

Light (300)

Rarely used.

Avoid for UI.

---

Regular (400)

Body text.

Descriptions.

Paragraphs.

---

Medium (500)

Navigation.

Buttons.

Labels.

---

SemiBold (600)

Section headings.

Cards.

Important labels.

---

Bold (700)

Hero headlines.

Major emphasis.

Use sparingly.

---

# Type Scale

## Display

Purpose

Hero headline.

Desktop

64px

Tablet

56px

Mobile

42px

Weight

700

Line Height

1.1

---

## H1

48px

Weight

700

Line Height

1.2

---

## H2

40px

Weight

700

Line Height

1.2

---

## H3

32px

Weight

600

Line Height

1.3

---

## H4

24px

Weight

600

Line Height

1.3

---

## H5

20px

Weight

600

Line Height

1.4

---

## H6

18px

Weight

600

Line Height

1.4

---

## Body Large

18px

Weight

400

Line Height

1.7

Used for:

Hero supporting text.

Section introductions.

---

## Body

16px

Weight

400

Line Height

1.7

Default paragraph size.

---

## Small

14px

Weight

400

Line Height

1.6

Captions.

Metadata.

Supporting information.

---

## Tiny

12px

Weight

400

Line Height

1.5

Only when absolutely necessary.

Examples:

Timestamps.

Operational metadata.

Version numbers.

---

# Line Length

Optimal reading width

60–75 characters per line.

Avoid extremely long paragraphs.

Use whitespace to improve readability.

---

# Letter Spacing

Default

Normal.

Large Headlines

Slight negative tracking if appropriate.

Small UI Labels

Very slight positive tracking.

Avoid excessive tracking adjustments.

---

# Text Alignment

Default

Left aligned.

Hero

Centered.

Dashboard

Left aligned.

Forms

Left aligned.

Avoid justified text.

---

# Hierarchy Principles

Hierarchy should primarily be created using:

1. Size
2. Weight
3. Whitespace

Not:

- Color
- Capitalization
- Decoration

Typography should communicate importance naturally.

---

# Capitalization

Sentence case by default.

Examples

Book a Demo

One system. Every part of your restaurant.

Avoid ALL CAPS except for:

- Tiny metadata
- Optional status labels

---

# Buttons

Weight

500

Sentence case.

Centered.

Comfortable padding.

Readable at every breakpoint.

---

# Navigation

Weight

500

16px

Minimal emphasis.

Navigation should never compete with the Hero.

---

# Cards

Headings

600

Body

400

Metadata

400

Maintain clear spacing between text elements.

---

# Dashboard Typography

Operational information should prioritize readability over personality.

Avoid decorative typography.

Consistency is more important than expression.

---

# Accessibility

Minimum body size: 16px.

Maintain sufficient contrast.

Respect browser zoom.

Avoid relying on thin font weights.

Line spacing should support comfortable reading.

---

# Responsive Typography

Typography should scale fluidly across breakpoints.

Maintain hierarchy without abrupt size changes.

Never reduce body text below 16px.

---

# Do

✓ Prioritize readability.

✓ Use whitespace generously.

✓ Maintain consistent hierarchy.

✓ Use serif sparingly for emphasis.

✓ Keep typography calm and timeless.

---

# Don't

✗ Use multiple sans-serif fonts.

✗ Use decorative display fonts.

✗ Overuse bold text.

✗ Use ALL CAPS for headings.

✗ Compress line spacing.

✗ Sacrifice readability for aesthetics.

---

# Future Work

Exact font loading strategy, CSS variables, clamp() values, and design tokens will be documented during implementation.

This document defines the typography system and the principles every implementation should follow.