# Component Standards

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language
- Colors
- Typography
- Spacing System
- Layout Grid
- Motion
- Accessibility
- Responsive Design

---

# Purpose

Components are the building blocks of Steward.

Every component should behave consistently throughout the product.

Users should never need to relearn the interface simply because they navigated to another page.

Consistency builds confidence.

---

# Philosophy

Components solve problems.

They are not opportunities for creativity.

Every component should be:

- Predictable
- Accessible
- Reusable
- Minimal
- Consistent

The simplest component that solves the problem is usually the correct one.

---

# Component Principles

Every component should be:

## Clear

Its purpose should be immediately obvious.

---

## Consistent

Appearance and behavior should never change unexpectedly.

---

## Accessible

Every interaction must work with:

- Keyboard
- Touch
- Mouse
- Screen readers

---

## Responsive

Every component adapts naturally across supported devices.

---

## Reusable

No page-specific implementations.

Components belong to the design system—not individual pages.

---

# Foundations

## Button

Purpose

Trigger a primary or secondary action.

Variants

- Primary
- Secondary
- Ghost
- Destructive (Application only)

Rules

- Sentence case
- Minimum height: 44px
- Clear hover state
- Visible focus state
- Loading state supported
- Disabled state supported

Never use more than one Primary button in the same visual group.

---

## Link

Purpose

Navigation.

Links should always be identifiable.

Hover should communicate interactivity.

Avoid using links as buttons.

---

## Icon

Purpose

Support understanding.

Icons never replace labels.

Use a single icon library throughout the product.

Recommended:

Lucide

---

# Inputs

## Text Input

Requirements

- Label
- Placeholder (optional)
- Helper text (optional)
- Error message
- Disabled state

Labels always remain visible.

---

## Textarea

Supports longer content.

Resizable only if necessary.

Maintain comfortable spacing.

---

## Select

Native behavior preferred unless custom functionality is required.

---

## Checkbox

Use for multiple selections.

Never use for mutually exclusive choices.

---

## Radio Group

Use when exactly one option may be selected.

---

## Switch

Represents immediate on/off settings.

Should never submit forms.

---

# Navigation Components

## Navigation Bar

Sticky.

Responsive.

Minimal.

CTA always visible.

---

## Sidebar

Supports application navigation.

Collapsible.

Current page clearly indicated.

---

## Tabs

Switch between related views.

Never replace navigation.

Keep labels concise.

---

## Breadcrumbs

Used only when navigation depth increases.

Avoid unnecessary breadcrumbs.

---

# Data Display

## Card

Purpose

Group related information.

Cards should rely on spacing before borders.

No excessive shadows.

---

## Table

Use only for structured data.

Support:

Sorting

Empty states

Responsive behavior

---

## Timeline

Used for chronological information.

Simple.

Readable.

Avoid decorative styling.

---

## Accordion

Used for progressive disclosure.

One section expanded by default only if it improves understanding.

---

## Dashboard Widget

Displays operational information.

Every widget should answer one question.

Avoid decorative metrics.

---

# Feedback Components

## Alert

Purpose

Communicate important information.

Variants

- Success
- Information
- Warning
- Error

Messages should explain what happened and what users can do next.

---

## Toast

Used for temporary confirmation.

Never contain critical information.

Disappear automatically.

Accessible announcement required.

---

## Badge

Used sparingly.

Represents status—not decoration.

Examples

Connected

Pending

Offline

---

## Skeleton

Preferred loading state.

Match the layout of final content.

Avoid layout shifts.

---

## Spinner

Only for short loading operations.

Avoid indefinite spinners.

---

# Overlay Components

## Modal

Purpose

Focused interaction.

Should interrupt only when necessary.

Supports:

Escape key

Focus trapping

Accessible labels

---

## Drawer

Used for secondary workflows.

Prefer drawers over modals on mobile.

---

## Dropdown

Simple choices.

Keyboard accessible.

Avoid deeply nested menus.

---

## Tooltip

Supplementary information only.

Never required to understand functionality.

Accessible through keyboard.

---

# Empty States

Every empty state should answer:

Why is this empty?

What can I do next?

Avoid playful illustrations.

Maintain the Steward voice.

---

# Error States

Errors should:

Explain the issue.

Offer a next step.

Avoid technical language.

Never blame the user.

---

# Loading States

Prefer skeletons.

Avoid blocking interfaces.

Loading should feel calm and responsive.

---

# Component Naming

Use consistent naming.

Examples

PrimaryButton

DashboardCard

NeedleCard

PricingCard

Accordion

Modal

Avoid:

Button2

NewCard

FinalModal

---

# Composition Principles

Pages are built from components.

Components are built from smaller components.

Avoid deeply nested custom implementations.

Prefer composition over duplication.

---

# Accessibility

Every component must support:

- Keyboard navigation
- Visible focus
- Screen readers
- Sufficient contrast
- Touch targets ≥44×44px

Accessibility is a release requirement.

---

# Motion

All components use shared motion presets.

Avoid defining animations within components.

Motion belongs to the Motion System.

---

# Responsive Behavior

Every component defines:

Desktop behavior.

Tablet behavior.

Mobile behavior.

No component should become unusable on smaller screens.

---

# Engineering Notes

Each component should have:

Purpose

Props

Variants

States

Accessibility notes

Usage examples

Do's

Don'ts

Future implementations should reference this document before creating new components.

---

# Do

✓ Build reusable components.

✓ Keep APIs simple.

✓ Maintain consistent spacing.

✓ Support accessibility.

✓ Document every variant.

---

# Don't

✗ Duplicate components.

✗ Introduce page-specific behavior.

✗ Break naming conventions.

✗ Hide important functionality.

✗ Add variants without purpose.

---

# Future Work

Each major component will eventually receive its own specification including:

- Visual anatomy
- Properties
- States
- Accessibility
- Responsive behavior
- Motion
- Implementation examples

---

# Guiding Principle

Components are the vocabulary of Steward.

When every component speaks the same language, the entire product feels calm, reliable, and thoughtfully designed.