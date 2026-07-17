# Accessibility

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language
- Typography
- Motion
- Layout Grid

---

# Purpose

Accessibility ensures Steward can be understood and used by as many people as possible.

Accessibility is not a feature.

It is a quality standard that applies to every page, every component, and every interaction.

Every design decision should improve usability before aesthetics.

---

# Philosophy

Restaurants are fast-paced environments.

Steward should reduce friction—not create it.

Every user deserves an interface that is:

- Readable
- Understandable
- Predictable
- Operable
- Forgiving

Accessibility benefits everyone.

Not only users with disabilities.

---

# Principles

Steward follows four core principles.

## Perceivable

Users should always be able to perceive information.

Nothing important should rely on:

- Color alone
- Motion alone
- Sound alone

Every important state must have multiple indicators.

---

## Operable

Every interface should be usable with:

- Keyboard
- Mouse
- Touch
- Assistive technologies

Users should never become trapped inside an interface.

---

## Understandable

Interfaces should behave consistently.

Labels should be clear.

Actions should be predictable.

Navigation should remain familiar throughout the product.

---

## Robust

Steward should work with:

- Screen readers
- Browser zoom
- High contrast modes
- Reduced motion settings
- Future assistive technologies

---

# Color Contrast

Minimum standard

WCAG AA

Preferred

WCAG AAA whenever practical.

Never sacrifice readability for branding.

---

# Typography

Minimum body size

16px

Line spacing

Comfortable.

Avoid:

Tiny fonts.

Compressed spacing.

Thin font weights.

Decorative fonts.

---

# Keyboard Navigation

Every interactive element must be reachable using the keyboard.

Users should always know:

Where they are.

What is focused.

What happens when activated.

---

# Focus States

Every interactive element requires a visible focus indicator.

Focus should never rely only on browser defaults.

Focus indicators should:

- Be clearly visible
- Maintain sufficient contrast
- Never be removed

---

# Semantic HTML

Prefer native HTML elements whenever possible.

Examples

button

nav

header

main

section

article

footer

Avoid replacing semantic elements with generic divs.

---

# Forms

Every input requires:

- Label
- Placeholder (optional)
- Validation message
- Error explanation

Labels should never be replaced by placeholders.

Errors should explain:

What happened.

How to fix it.

---

# Buttons

Buttons should communicate:

Action.

State.

Availability.

Disabled buttons should explain why when appropriate.

Touch targets

Minimum

44 × 44 px.

---

# Links

Links should:

Clearly indicate interactivity.

Remain distinguishable from body text.

Avoid generic labels like:

Click here.

Learn more.

Read more.

Instead use descriptive language.

---

# Icons

Icons never replace labels.

Icons support understanding.

Every icon-only button requires:

Accessible label.

Tooltip where appropriate.

---

# Images

Decorative images

Hidden from screen readers.

Informative images

Require meaningful alt text.

Avoid:

"Image"

"Picture"

"Graphic"

Describe the purpose instead.

---

# Motion

Respect

prefers-reduced-motion

Remove unnecessary movement.

Never hide important information behind animation.

---

# Notifications

Status messages should be announced to assistive technologies.

Examples

Success

Error

Loading complete

Validation

Use appropriate ARIA live regions.

---

# Error Handling

Errors should:

Explain the problem.

Explain the solution.

Avoid blaming users.

Poor

Invalid input.

Better

Please enter a valid email address.

---

# Tables

Only use tables for tabular data.

Never use tables for layout.

Provide:

Headers.

Scope attributes.

Readable structure.

---

# Navigation

Navigation should remain consistent across pages.

Current page should always be identifiable.

Breadcrumbs should be used where navigation depth increases.

---

# Dashboard

Operational status should never rely only on color.

Example

Instead of:

Green dot

Use:

Green dot

+

Connected

Every operational state should include text.

---

# Responsive Accessibility

Interfaces should remain usable at:

200% zoom

320px viewport width

Landscape mobile orientation

Large system text settings

---

# Screen Readers

Use:

ARIA only when necessary.

Prefer semantic HTML first.

Reading order should match visual order.

Avoid hidden content that becomes confusing.

---

# Performance

Accessibility includes performance.

Pages should:

Load quickly.

Remain responsive.

Avoid blocking interactions.

Slow software is less accessible.

---

# Testing Checklist

Every release should verify:

✓ Keyboard navigation

✓ Screen reader compatibility

✓ Color contrast

✓ Focus visibility

✓ Touch targets

✓ Responsive layouts

✓ Reduced motion

✓ Form validation

✓ Error messaging

---

# Engineering Notes

Use automated tools:

- axe DevTools
- Lighthouse
- WAVE

Combine automated testing with manual testing.

Automation alone is insufficient.

---

# Do

✓ Write descriptive labels.

✓ Maintain strong contrast.

✓ Use semantic HTML.

✓ Design for keyboard users.

✓ Test with real assistive tools.

---

# Don't

✗ Remove focus outlines.

✗ Depend on color alone.

✗ Use placeholder-only forms.

✗ Hide content behind animation.

✗ Assume mouse-only interaction.

---

# Future Work

Accessibility should be reviewed continuously.

Compliance is not the goal.

Usability is.

---

# Guiding Principle

The best accessibility feature is thoughtful design.

When Steward is simple, predictable, and respectful of every user, accessibility becomes a natural outcome rather than an afterthought.