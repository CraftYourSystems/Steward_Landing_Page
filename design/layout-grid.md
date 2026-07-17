# Layout Grid

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language
- Spacing System

---

# Purpose

The layout grid provides a consistent structural framework for every Steward interface.

It ensures content remains balanced, readable, and predictable across all screen sizes.

Users should never consciously notice the grid.

They should only experience the clarity it creates.

---

# Philosophy

A layout should organize content—not decorate it.

Every page should feel:

- Structured
- Balanced
- Predictable
- Spacious
- Calm

Layouts should remain stable as content changes.

Consistency creates confidence.

---

# Layout Principles

Every interface should prioritize:

1. Readability
2. Hierarchy
3. Consistency
4. Flexibility
5. Responsiveness

Content should dictate the layout.

The layout should never dictate unnecessary content.

---

# Primary Container

Maximum Width

1280px

Content remains centered horizontally.

Large screens should use whitespace rather than stretching content indefinitely.

---

# Reading Container

Maximum Width

720px

Used for:

- Long paragraphs
- Documentation
- FAQ answers
- Legal pages
- Editorial content

Long-form text should never span the full page width.

---

# Wide Container

Maximum Width

1440px

Used only for:

- Dashboard previews
- Large visual components
- Hero illustrations
- Wide imagery

Use sparingly.

---

# Breakpoints

## Mobile

0–639px

Single-column layout.

---

## Tablet

640–1023px

Primarily single-column.

Optional two-column layouts where appropriate.

---

## Laptop

1024–1279px

Multi-column layouts.

Comfortable spacing.

---

## Desktop

1280px+

Full layout system.

Maximum content width enforced.

---

# Grid System

Desktop

12-column grid.

---

Tablet

8-column grid.

---

Mobile

4-column grid.

The grid provides alignment—not restriction.

Components may span multiple columns as required.

---

# Gutters

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent gutters throughout the application.

---

# Margins

Desktop

64px minimum outer margin.

Tablet

32px.

Mobile

16px.

Whitespace around the layout is as important as whitespace within it.

---

# Section Widths

Homepage content

Centered.

Maximum width:

1280px.

Editorial sections

720px.

Feature grids

1280px.

Dashboard previews

1440px maximum.

---

# Navigation

Navigation aligns with the primary container.

Logo remains aligned with page content.

CTA aligns with container edge.

Navigation should never extend beyond the content grid.

---

# Hero Layout

Centered.

Maximum content width:

720–800px.

The Hero intentionally feels narrower than the rest of the homepage to improve readability.

---

# Cards

Cards align to the grid.

Avoid arbitrary positioning.

Card widths should remain consistent within the same section.

---

# Dashboard Layout

Sidebar

Fixed width.

Content

Fluid.

Widgets align to the grid.

Maintain consistent spacing between cards.

Avoid asymmetrical layouts unless they improve hierarchy.

---

# Forms

Labels.

Inputs.

Validation.

Buttons.

All align vertically.

Avoid multi-column forms unless necessary.

---

# Images

Images align with the surrounding grid.

Do not allow images to extend beyond their container unless intentionally creating a full-width visual section.

Maintain consistent aspect ratios where possible.

---

# Homepage Rhythm

Each homepage section aligns with the same container.

Avoid changing page width between sections.

Large visual components may expand within the wide container while maintaining visual alignment.

---

# Alignment Principles

Default

Left alignment.

Hero

Centered.

Dashboard

Left aligned.

Forms

Left aligned.

Pricing

Centered within cards.

Consistency is more important than novelty.

---

# Responsive Behavior

Layouts should adapt smoothly.

Avoid dramatic structural changes between breakpoints.

Users should recognize the same interface regardless of device.

---

# Accessibility

Layouts should remain usable at:

- 200% browser zoom
- Large text settings
- Reduced viewport widths

Avoid horizontal scrolling unless absolutely necessary.

---

# Engineering Notes

Implement using CSS Grid.

Use Flexbox for component-level layouts.

Define reusable container classes.

Examples:

container

container-wide

container-reading

Avoid hardcoded widths inside components.

Components should inherit layout behavior from containers.

---

# Do

✓ Keep layouts predictable.

✓ Align related content.

✓ Maintain consistent margins.

✓ Respect the grid.

✓ Allow whitespace to define structure.

---

# Don't

✗ Stretch content across ultra-wide screens.

✗ Mix multiple container widths within one section.

✗ Break alignment without purpose.

✗ Center large bodies of text.

✗ Create unnecessary asymmetry.

---

# Future Work

Grid tokens, CSS variables, and implementation utilities will be documented during development.

This document establishes the structural principles every Steward page should follow.

---

# Guiding Principle

The layout should quietly disappear.

Users should notice the content—not the grid that organizes it.