# Homepage Specification

## 10 — Frequently Asked Questions

Version: 1.0

Status: Ready for Implementation

References

- Steward Constitution
- Homepage Architecture
- Product Truth

---

# Purpose

The FAQ section addresses the most common questions restaurant owners may have after exploring the homepage.

Its purpose is to reduce uncertainty, clarify expectations, and reinforce Steward's commitment to transparency.

Rather than convincing visitors, the FAQ helps them make an informed decision.

---

# User Question

"What do I still need to know before contacting Steward?"

---

# Business Goal

- Remove hesitation.
- Clarify product expectations.
- Reinforce Product Truth.
- Prepare visitors for a demo conversation.

---

# Core Message

Steward is straightforward to understand, simple to adopt, and transparent about what it offers.

---

# Layout

Centered section.

Heading followed by a short introduction.

Accordion list beneath.

Only one question expanded at a time.

Large whitespace between the introduction and the accordion.

---

# Content

## Eyebrow

Frequently Asked Questions

---

## Heading

Everything you might be wondering.

---

## Supporting Copy

If you don't see your question here, we're happy to answer it during a demo.

---

# Questions

---

### What is Steward?

Steward is a restaurant operating system that connects ordering, kitchen operations, payments, and operational insights into one connected platform.

---

### Who is Steward designed for?

Steward is built for restaurants of different sizes—from independent restaurants to growing multi-location businesses.

---

### How do I get started?

The first step is booking a demo.

We'll understand your restaurant's workflow and recommend the most suitable Steward setup.

---

### Does Steward support multiple restaurant branches?

Yes.

Steward is designed to support both single-location restaurants and multi-branch operations.

The available functionality depends on your deployment.

---

### Will Steward work with my existing workflow?

During onboarding, Steward is configured around your restaurant's operational needs whenever possible.

The goal is to improve your workflow rather than replace it unnecessarily.

---

### How long does onboarding take?

Onboarding depends on the size and operational complexity of your restaurant.

We'll discuss the expected timeline during your demo.

Never promise unrealistic deployment times.

---

### How is pricing determined?

Pricing depends on the size of your restaurant, the modules required, and the number of locations.

You'll receive clear pricing before any commitment.

---

### Is my restaurant data secure?

Protecting operational data is a core responsibility.

Steward follows modern security practices and continues to improve its infrastructure as the platform evolves.

Avoid making unsupported compliance claims unless they are verified.

---

### Can I request new features?

Yes.

Feedback from restaurant partners plays an important role in Steward's evolution.

Many improvements are driven by real operational requirements.

---

### Do I need special hardware?

This depends on the modules you choose.

We'll recommend suitable hardware requirements during your demo if necessary.

---

# Accordion Behavior

Only one item expanded.

Opening another closes the previous one.

Smooth height animation.

No excessive motion.

Keyboard accessible.

---

# Visual Hierarchy

1. Questions

2. Heading

3. Supporting Copy

Questions should be easy to scan.

Answers should remain concise.

---

# Visual Style

Minimal.

Editorial.

Soft dividers.

Simple disclosure arrows.

No large icons.

No decorative illustrations.

---

# Motion

Accordion expands smoothly.

Arrow rotates subtly.

No bounce effects.

No dramatic transitions.

Respect reduced-motion preferences.

---

# Interaction

Hover

Slight background emphasis.

Focus

Clearly visible keyboard focus.

Click

Expand or collapse answer.

Entire question row should be clickable.

---

# Accessibility

Semantic accordion implementation.

Proper ARIA attributes.

Keyboard navigation.

Screen-reader friendly.

Logical heading hierarchy.

---

# Copy Principles

Answers should be:

Clear.

Concise.

Honest.

Avoid:

Marketing language.

Overpromising.

Speculation.

Technical jargon.

Artificial urgency.

---

# Voice

Helpful.

Professional.

Calm.

Transparent.

Never defensive.

Never overly promotional.

---

# Engineering Notes

Reusable accordion component.

Support Markdown content if needed.

Only one expanded item.

Future questions configurable through content only.

---

# Acceptance Criteria

Visitors should leave with:

- Fewer unanswered questions.
- Greater confidence in Steward.
- A clear understanding of the next step.

The FAQ should reduce friction rather than increase reading effort.

---

# Out of Scope

Support documentation.

Knowledge base.

Technical manuals.

API documentation.

Troubleshooting guides.

Release notes.

These belong in dedicated documentation, not on the homepage.

---

# Definition of Done

The FAQ is complete when visitors naturally think:

"I understand Steward well enough to book a demo."

The section succeeds when it removes uncertainty without overwhelming visitors with information.