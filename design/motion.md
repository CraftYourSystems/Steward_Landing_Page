# Motion System

Version: 1.0

Status: Active

References

- Steward Constitution
- Brand Philosophy
- Visual Language
- Spacing System
- Layout Grid

---

# Purpose

Motion communicates continuity, hierarchy, and feedback.

Every animation should help users understand:

- What changed.
- Why it changed.
- Where their attention should go.

Motion should never exist purely for decoration.

---

# Motion Philosophy

Steward moves with intention.

Animations should feel:

- Calm
- Predictable
- Professional
- Natural
- Quiet

Motion should never feel:

- Playful
- Flashy
- Aggressive
- Distracting
- Overproduced

Users should notice improved understanding—not the animation itself.

---

# Guiding Principles

Every animation must answer one question:

"Does this help the user?"

If the answer is no, remove it.

Motion should:

✓ Explain

✓ Guide

✓ Confirm

✓ Connect

Never:

✗ Entertain

✗ Show off

✗ Delay interactions

---

# Motion Characteristics

Movement should be:

Small.

Subtle.

Purposeful.

Natural.

Avoid large translations.

Avoid exaggerated scaling.

Avoid dramatic rotations.

Avoid complex choreography.

---

# Motion Hierarchy

## Level 1

Instant Feedback

Examples

Button hover

Focus ring

Pressed state

Checkbox

Toggle

Duration

100–150ms

---

## Level 2

Component Transition

Examples

Cards

Dropdowns

Accordions

Modals

Tabs

Duration

180–250ms

---

## Level 3

Page Motion

Examples

Section reveal

Hero appearance

Timeline

Dashboard preview

Duration

300–500ms

Only once.

Never repeated.

---

# Easing

Primary

Ease Out

Most animations should slow naturally toward completion.

---

Secondary

Ease In Out

Used for reversible transitions.

---

Avoid

Linear.

Elastic.

Bounce.

Overshoot.

Spring effects unless carefully tuned.

---

# Scroll Animations

Allowed

Fade

Small upward movement

Opacity transitions

Sequential appearance

Not Allowed

Parallax backgrounds

Floating elements

Continuous movement

Large translations

Animations should reinforce reading—not distract from it.

---

# Hover States

Hover should communicate interactivity.

Allowed

Opacity

Border emphasis

Very subtle elevation

Small shadow adjustment

Not Allowed

Large scaling

Rotation

Glow effects

Color explosions

Complex transitions

---

# Buttons

Hover

Slight elevation.

Minor opacity adjustment.

Pressed

Small downward movement.

Immediate feedback.

Loading

Spinner.

Never freeze the interface.

Avoid animated gradients.

---

# Navigation

Background fades in while scrolling.

Links use subtle opacity transitions.

No sliding menus on desktop.

Mobile menu opens smoothly without excessive animation.

---

# Cards

Cards may:

Lift slightly.

Strengthen border.

Increase shadow subtly.

Avoid floating effects.

Cards should remain grounded.

---

# Modals

Fade in.

Small upward movement.

Backdrop fades.

Avoid dramatic zoom effects.

Closing motion mirrors opening.

---

# Accordions

Smooth height expansion.

Arrow rotates gently.

One section at a time.

No bounce.

---

# Timeline

Timeline items appear progressively while scrolling.

Do not replay every time users scroll.

Animations should feel like reading.

---

# Dashboard

Dashboard widgets should not animate continuously.

Avoid:

Blinking indicators.

Counting numbers.

Fake live updates.

Continuous loading states.

Operational software should feel stable.

---

# Page Transitions

Keep transitions minimal.

Fast enough to feel responsive.

Slow enough to preserve continuity.

Avoid transitions that interrupt user flow.

---

# Loading States

Prefer:

Skeletons.

Subtle shimmer.

Progress indicators.

Avoid:

Spinners for long waits.

Large loading animations.

Brand mascots.

Decorative loading screens.

---

# Empty States

Appear naturally.

No animation required.

Focus on clarity rather than delight.

---

# Success States

Use:

Small fade.

Checkmark.

Subtle color transition.

Never:

Confetti.

Fireworks.

Exploding particles.

Celebration animations.

Steward celebrates through confidence—not spectacle.

---

# Error States

Communicate clearly.

Shake animations should generally be avoided.

Instead use:

Clear message.

Accessible color.

Helpful guidance.

Users should feel informed—not punished.

---

# Reduced Motion

Respect the user's operating system preference.

When reduced motion is enabled:

Remove movement.

Preserve opacity transitions where appropriate.

Do not hide information behind animation.

Accessibility takes priority over aesthetics.

---

# Accessibility

Animations must never:

Trigger seizures.

Cause motion sickness.

Delay important interactions.

Respect WCAG recommendations.

---

# Engineering Notes

Use Framer Motion consistently.

Create reusable animation presets.

Examples

fadeIn

fadeUp

slideDown

modalOpen

accordionExpand

buttonHover

Avoid defining custom animations inside individual components.

Motion should be centralized.

---

# Performance

Animations should:

Maintain 60 FPS.

Prefer transform and opacity.

Avoid animating:

Width

Height (unless necessary)

Top

Left

Box-shadow continuously

Minimize layout recalculations.

---

# Do

✓ Animate with purpose.

✓ Keep movement subtle.

✓ Reinforce hierarchy.

✓ Respect accessibility.

✓ Maintain consistency.

---

# Don't

✗ Animate everything.

✗ Delay user interactions.

✗ Use bounce.

✗ Use exaggerated easing.

✗ Loop animations continuously.

✗ Compete with the content.

---

# Future Work

Animation tokens and reusable Framer Motion variants will be documented during implementation.

This document establishes the principles every Steward animation should follow.

---

# Guiding Principle

Motion should feel like a well-trained restaurant team.

Everyone moves with purpose.

Nothing moves without a reason.

Nothing calls unnecessary attention to itself.