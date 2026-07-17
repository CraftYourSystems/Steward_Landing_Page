# Homepage Specification

## 01 — Navigation

Version: 1.0

Status: Ready for Implementation

References

- Steward Constitution
- Homepage Architecture

---

# Purpose

The navigation provides orientation without becoming the center of attention.

Its responsibility is to help visitors understand where they are, navigate the website effortlessly, and access the primary call-to-action.

The navigation should feel permanent, dependable, and calm.

---

# User Question

"Where am I, and where can I go?"

---

# Business Goal

- Establish brand identity immediately.
- Provide simple navigation.
- Make demo booking easily accessible.
- Reduce navigation friction.

---

# Content

## Left

Steward Logo

Clicking the logo returns users to the homepage.

---

## Center

Product

Pricing

About

Each item scrolls smoothly to its corresponding homepage section.

No dropdown menus.

No secondary navigation.

---

## Right

Primary CTA

Book a Demo

Always visible.

Highest visual priority.

---

# Layout

Height

72px

Container

Centered

Maximum width aligned with homepage content.

Horizontal layout.

Large whitespace.

Balanced spacing.

---

# Visual Hierarchy

Primary

Book a Demo

Secondary

Navigation Links

Tertiary

Logo

The navigation should never dominate the Hero section.

---

# Behavior

Desktop

Navigation remains fixed.

Transparent initially.

Background appears gradually after scrolling.

Background should include:

- subtle blur
- light border
- soft elevation

Never feel heavy.

---

Mobile

Logo

↓

Hamburger Menu

↓

Fullscreen navigation overlay

Links displayed vertically.

Primary CTA remains visible.

Menu closes after navigation.

---

# Scroll Behavior

Navigation remains visible at all times.

Scrolling should feel smooth.

Active section should update automatically while scrolling.

No sudden appearance.

No snapping.

---

# Interaction

Hover

Subtle opacity change.

No dramatic movement.

No large scaling.

Focus

Visible keyboard focus.

Accessible.

Click

Smooth scrolling.

Appropriate offset.

---

# Motion

Fade

Small vertical transition.

Duration should feel quick.

Motion should communicate continuity.

Not decoration.

---

# Accessibility

Keyboard accessible.

Logical tab order.

Visible focus states.

Screen reader labels.

Proper semantic navigation element.

---

# Responsive Behavior

Desktop

Horizontal layout.

Tablet

Reduced spacing.

Mobile

Overlay menu.

CTA remains prominent.

---

# Copy

Navigation Labels

Product

Pricing

About

CTA

Book a Demo

No abbreviations.

No marketing language.

---

# Visual Style

Editorial.

Minimal.

Calm.

Lots of whitespace.

Typography carries hierarchy.

Navigation should feel premium rather than decorative.

---

# Engineering Notes

Sticky navigation.

Scroll spy.

Smooth scrolling.

Responsive menu.

Accessible navigation.

Minimal JavaScript.

No unnecessary animations.

---

# Acceptance Criteria

Navigation should:

✓ Remain visible while scrolling.

✓ Clearly identify current section.

✓ Work entirely via keyboard.

✓ Collapse correctly on mobile.

✓ Maintain alignment across breakpoints.

✓ Never compete visually with page content.

✓ Keep Book a Demo immediately accessible.

---

# Out of Scope

Search

Language switcher

Dark mode toggle

Account login

Dashboard access

Notifications

Mega menus

Dropdowns

Multi-level navigation

These are intentionally excluded from Version 1.

---

# Definition of Done

The navigation is complete when:

- It provides orientation immediately.
- Users understand available sections.
- Demo booking remains one click away.
- Navigation feels calm, dependable, and invisible during normal browsing.

The best navigation is one users rarely think about.