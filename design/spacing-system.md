# Spacing System

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language

---

# Purpose

The spacing system establishes a consistent rhythm across the Steward experience.

Spacing is one of Steward's primary design tools.

Rather than relying on borders, shadows, or decoration, Steward uses spacing to organize information, create hierarchy, and reduce cognitive load.

Every spacing decision should improve readability before aesthetics.

---

# Philosophy

Whitespace is not empty space.

Whitespace creates:

- Clarity
- Hierarchy
- Focus
- Calm
- Confidence

Steward should always feel spacious.

If a layout feels crowded, increase spacing before introducing additional visual elements.

---

# Base Unit

The entire design system is built on an **8-point grid**.

Every spacing value should be a multiple of 8 whenever practical.

Small exceptions may exist for typography and borders.

---

# Spacing Scale

| Token | Value | Usage |
|-------|------:|------|
| xs | 4px | Fine adjustments, icon spacing |
| sm | 8px | Tight spacing between related elements |
| md | 16px | Default spacing inside components |
| lg | 24px | Related groups of content |
| xl | 32px | Component separation |
| 2xl | 48px | Section internals |
| 3xl | 64px | Major content groups |
| 4xl | 96px | Section padding |
| 5xl | 128px | Large page spacing |

Do not invent arbitrary spacing values unless necessary.

---

# Vertical Rhythm

Pages should establish a predictable reading rhythm.

Recommended spacing:

Heading

↓

16–24px

↓

Supporting paragraph

↓

32–48px

↓

Primary component

↓

64–96px

↓

Next section

Large sections should feel visually independent.

---

# Section Spacing

Desktop

Top Padding

96–128px

Bottom Padding

96–128px

---

Tablet

80–96px

---

Mobile

64–80px

Never allow sections to feel compressed.

---

# Component Spacing

Cards

Internal padding

24px

Large cards

32px

Compact cards

16px

---

Buttons

Horizontal padding

24–32px

Vertical padding

12–16px

---

Inputs

Vertical padding

12–16px

Horizontal padding

16px

---

Navigation

Height

72px

Horizontal spacing

32px

---

# Grid Gutters

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent gutters across layouts.

---

# Content Width

Reading width

60–75 characters.

Long paragraphs should wrap naturally.

Avoid full-width text blocks.

---

# Card Layout

Cards should breathe.

Typical spacing:

Title

↓

12px

↓

Description

↓

24px

↓

Actions

Avoid stacking elements too tightly.

---

# Lists

Related list items

8px

Separate list groups

24px

Checklist spacing

12–16px

---

# Forms

Field spacing

24px

Section spacing

48px

Button spacing

32px

Labels should remain close to their inputs.

---

# Dashboard

Dashboard widgets

24px

Sidebar padding

24px

Card spacing

24px

Section spacing

32px

Dashboard density should remain comfortable.

---

# Homepage Rhythm

Each homepage section should feel independent.

Avoid abrupt transitions.

Whitespace should naturally guide scrolling.

Large visual components deserve additional breathing room.

---

# Mobile Principles

Reduce spacing proportionally.

Never remove spacing entirely.

Maintain visual rhythm even on smaller screens.

Touch targets should remain comfortable.

---

# Accessibility

Whitespace improves readability.

Avoid crowding interactive elements.

Maintain sufficient spacing between touch targets.

Spacing should support users with motor impairments.

---

# Do

✓ Prefer generous spacing.

✓ Use consistent spacing tokens.

✓ Increase spacing before adding decoration.

✓ Maintain vertical rhythm.

✓ Let layouts breathe.

---

# Don't

✗ Use arbitrary values.

✗ Compress layouts.

✗ Stack unrelated content tightly.

✗ Reduce whitespace to fit more content.

✗ Depend on borders instead of spacing.

---

# Engineering Notes

Implement spacing through design tokens.

Example:

spacing-xs

spacing-sm

spacing-md

spacing-lg

spacing-xl

...

Avoid hardcoded pixel values throughout the codebase.

Use reusable spacing variables instead.

---

# Future Work

During implementation, define spacing tokens as CSS custom properties or Tailwind theme values.

The spacing philosophy should remain unchanged regardless of implementation technology.

---

# Guiding Principle

Steward should never feel crowded.

Every screen should have enough room for users to think before they act.

Whitespace is one of Steward's strongest design elements.