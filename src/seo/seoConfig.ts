// Central SEO configuration for all pages
// Edit this file to update titles, descriptions, keywords, and FAQ for each route.

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical: string;
  jsonLd?: object | object[];
  faqs?: FAQItem[];
  answerBlock?: string; // The 2–4 sentence AEO direct-answer block
  relatedPages?: RelatedLink[];
}

const DOMAIN = 'https://steward.com'; // ← update to production domain before deployment

// ─── Canonical Entity Definition ────────────────────────────────────────────
// Steward is the ONE canonical brand name. Never use "StewardLive" as a brand.
// "Steward Live Ops" / "Steward Needle AI" etc. are FEATURE names, not the brand.
// Update SOCIAL_PROFILES as each off-site listing goes live (Phase 2B).
const SOCIAL_PROFILES: string[] = [
  // Add verified URLs here as they go live — order doesn't matter:
  // 'https://www.linkedin.com/company/steward-restaurant',
  // 'https://twitter.com/stewardapp',
  // 'https://www.instagram.com/stewardapp',
  // 'https://www.crunchbase.com/organization/steward-restaurant',
  // 'https://www.g2.com/products/steward',
  // 'https://www.capterra.com/p/steward',
];

export const seoConfig: Record<string, PageSEO> = {
  '/': {
    title: 'Steward — The Operating System for Modern Restaurants',
    description:
      'Steward is a luxury restaurant operating system that unifies ordering, kitchen operations, payments, staff, and analytics in one calm, intelligent platform.',
    keywords: 'restaurant management software, restaurant operating system, restaurant SaaS, QR ordering, kitchen display system',
    canonical: `${DOMAIN}/`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        // Canonical entity name. Do NOT change to StewardLive or any variant.
        name: 'Steward',
        // alternateName helps LLMs and Google understand this is the restaurant SaaS —
        // NOT the English word "steward" or any unrelated company with the same name.
        alternateName: 'Steward Restaurant OS',
        description:
          'Steward is a restaurant SaaS platform — not the English word for a cabin attendant or ship officer. It is a software product that helps restaurant operators manage real-time floor operations, ordering, kitchen display, payments, staff scheduling, and guest intelligence from a single platform, based in Hyderabad, India.',
        url: DOMAIN,
        logo: {
          '@type': 'ImageObject',
          url: `${DOMAIN}/logo.png`,
          width: 512,
          height: 512,
        },
        foundingDate: '2025',
        foundingLocation: {
          '@type': 'Place',
          name: 'Hyderabad, India',
        },
        areaServed: 'IN',
        knowsAbout: [
          'Restaurant management software',
          'Kitchen display system',
          'QR ordering',
          'Restaurant analytics',
          'Food service technology',
        ],
        sameAs: SOCIAL_PROFILES,
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'craftyoursystems@gmail.com',
          telephone: '+919645312345',
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: 'English',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Steward',
        alternateName: 'Steward Restaurant OS',
        url: DOMAIN,
        description:
          'Steward is a restaurant SaaS platform covering QR ordering, kitchen display, real-time operations, payments, staff scheduling, inventory, and AI-powered daily briefings for restaurant managers.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${DOMAIN}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Steward',
        alternateName: 'Steward Restaurant OS',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Restaurant Management Software',
        operatingSystem: 'Web',
        description:
          'Steward is an all-in-one restaurant operating system. It covers QR ordering, kitchen display (KDS), real-time floor management, integrated payments, staff scheduling, inventory tracking, guest CRM, and AI-powered manager briefings.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          description: 'Contact for pricing',
        },
        provider: {
          '@type': 'Organization',
          name: 'Steward',
          url: DOMAIN,
        },
      },
    ],
  },

  '/live-ops': {
    title: 'Steward Live Ops — Real-Time Restaurant Floor Management',
    description:
      'Monitor every table and ticket in real time. Steward Live Ops gives restaurant managers instant floor visibility and quiet, intelligent alerts to move with certainty.',
    keywords: 'restaurant real-time floor management, restaurant operations software, table management system, restaurant live monitoring',
    canonical: `${DOMAIN}/live-ops`,
    answerBlock:
      'Steward Live Ops is a real-time floor monitoring tool for restaurant managers. It tracks every table status, open ticket, and pacing issue as they happen, surfacing quiet alerts when thresholds are crossed — so managers can act before a guest complaint is ever made.',
    relatedPages: [
      { label: 'Needle AI Briefings', href: '/needle' },
      { label: 'Kitchen Board', href: '/kitchen-board' },
      { label: 'Live Counter', href: '/live-counter' },
    ],
    faqs: [
      {
        question: 'What does Steward Live Ops do for restaurant managers?',
        answer:
          'Live Ops gives managers a real-time view of every table, ticket, and operational bottleneck in the restaurant. It updates continuously and sends quiet alerts when a threshold — like a table waiting too long — is crossed.',
      },
      {
        question: 'How is Steward Live Ops different from a basic POS floor plan?',
        answer:
          'Unlike a static POS floor plan, Live Ops is dynamic. It tracks pacing, correlates ticket times with kitchen output, and proactively flags anomalies rather than just showing a snapshot of table occupancy.',
      },
      {
        question: 'Does Steward Live Ops integrate with the kitchen?',
        answer:
          'Yes. Live Ops syncs directly with Steward Kitchen Board, so ticket times shown on the floor map reflect actual kitchen prep state rather than estimated times.',
      },
      {
        question: 'Can Steward Live Ops handle multiple dining sections?',
        answer:
          'Yes. Live Ops supports multiple floor sections and station assignments, making it suitable for restaurants with outdoor seating, bar areas, or private dining rooms.',
      },
      {
        question: 'Does Steward Live Ops work on mobile?',
        answer:
          'Steward is fully responsive. Managers can access Live Ops from any device — tablet, phone, or desktop — without installing a separate app.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Live Ops',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Real-time restaurant floor and operations monitoring. Tracks tables, tickets, and pacing with intelligent alerts.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/needle': {
    title: 'Steward Needle AI — Daily AI Briefings for Restaurant Managers',
    description:
      'Start every shift with the numbers that matter. Needle AI synthesizes your overnight data into a 30-second briefing before your team arrives.',
    keywords: 'AI restaurant briefing, restaurant analytics AI, restaurant daily insights, restaurant manager morning report',
    canonical: `${DOMAIN}/needle`,
    answerBlock:
      'Steward Needle AI is an AI-powered daily briefing tool for restaurant operators. Every morning, it analyses the previous day\'s sales, covers, and operational data and delivers a concise, actionable summary — highlighting what went well, what to watch, and what to prioritize before the first guest arrives.',
    relatedPages: [
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'Finance', href: '/finance' },
      { label: 'Live Counter', href: '/live-counter' },
    ],
    faqs: [
      {
        question: 'What is Steward Needle AI?',
        answer:
          'Needle AI is an artificial intelligence layer inside Steward that reads your restaurant\'s overnight operational data and produces a short, actionable morning briefing for the manager on shift.',
      },
      {
        question: 'Does Steward Needle AI require any setup or training?',
        answer:
          'No. Needle AI connects directly to your existing Steward data — sales, covers, staff, and kitchen performance — and begins generating briefings from day one without any manual configuration.',
      },
      {
        question: 'How is Needle different from looking at a standard analytics dashboard?',
        answer:
          'Dashboards show you raw numbers. Needle reads those numbers, detects patterns and anomalies, and tells you in plain language what actually matters today — saving the average manager 20–30 minutes of manual data review each morning.',
      },
      {
        question: 'Can Needle AI predict future issues based on today\'s data?',
        answer:
          'Yes. Needle flags leading indicators — like a high reservation count combined with low staffing levels — and surfaces them as risks to address before service begins.',
      },
      {
        question: 'Is Steward Needle AI suitable for multi-location restaurants?',
        answer:
          'Yes. Needle can aggregate and compare performance across multiple locations, giving group-level operators a unified picture of their estate each morning.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Needle AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'AI-powered daily briefing tool that synthesizes restaurant data into an actionable morning summary for managers.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/menu': {
    title: 'Steward Menu — QR Code Ordering System for Restaurants',
    description:
      'Let guests browse, order, and pay directly from their table. Steward\'s QR ordering system eliminates wait times and captures every modification accurately.',
    keywords: 'restaurant QR code ordering, QR menu system, contactless ordering restaurant, table ordering app',
    canonical: `${DOMAIN}/menu`,
    answerBlock:
      'Steward Menu is a QR-code-powered table ordering system for restaurants. Guests scan a code at their table, browse a live digital menu, place their order, and optionally pay — all without waiting for a server. Every order routes directly to the kitchen with full modification detail.',
    relatedPages: [
      { label: 'Kitchen Board', href: '/kitchen-board' },
      { label: 'Orders', href: '/orders' },
      { label: 'Finance', href: '/finance' },
    ],
    faqs: [
      {
        question: 'How does Steward QR ordering work for restaurant guests?',
        answer:
          'Guests scan a QR code placed at their table using any smartphone camera. This opens the digital menu in their browser — no app download required. They select items, add modifications, and submit their order directly to the kitchen.',
      },
      {
        question: 'Can Steward Menu handle special requests and allergies?',
        answer:
          'Yes. The ordering flow includes structured fields for dietary restrictions, substitutions, and free-text notes. These are passed verbatim to the kitchen display, ensuring nothing is missed.',
      },
      {
        question: 'Does Steward QR ordering replace servers, or work alongside them?',
        answer:
          'Steward Menu is designed to work alongside your team, not replace them. Servers are freed from order-taking to focus on hospitality while the system handles accuracy and routing.',
      },
      {
        question: 'How quickly can I update the menu prices and items?',
        answer:
          'Instantly. Menu changes in Steward go live in real time — no app update, no reprint, no lag. You can also schedule price changes for specific time windows (e.g. happy hour).',
      },
      {
        question: 'Is Steward QR ordering compatible with my existing POS system?',
        answer:
          'Steward integrates with major POS platforms. Orders placed via QR flow directly into your existing POS and kitchen display system, preserving your current operational setup.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Menu',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'QR code-based contactless table ordering system for restaurants. Real-time menu updates, full modification handling.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/kitchen-board': {
    title: 'Steward Kitchen Board — KDS for Modern Restaurant Kitchens',
    description:
      'Replace paper tickets with a synchronized kitchen display system. Steward Kitchen Board routes every order to the right station with zero manual sorting.',
    keywords: 'restaurant kitchen display system, KDS software, kitchen order management, restaurant ticket system',
    canonical: `${DOMAIN}/kitchen-board`,
    answerBlock:
      'Steward Kitchen Board is a digital kitchen display system (KDS) that replaces paper tickets in restaurant kitchens. Orders arrive instantly from the floor, route automatically to the correct preparation station, and surface all modifications and dietary flags clearly — eliminating sorting errors and reducing prep times.',
    relatedPages: [
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'Orders', href: '/orders' },
      { label: 'QR Ordering', href: '/menu' },
    ],
    faqs: [
      {
        question: 'What is a kitchen display system (KDS) and does Steward have one?',
        answer:
          'A KDS is a digital screen in the kitchen that shows incoming orders in real time, replacing paper dockets. Yes — Steward Kitchen Board is a full KDS built into the Steward platform.',
      },
      {
        question: 'How does Steward Kitchen Board route orders to the right station?',
        answer:
          'Items are tagged in the menu with their preparation station (e.g. grill, cold prep, pastry). When an order arrives, Kitchen Board automatically splits it to the relevant stations simultaneously, so the entire table is ready together.',
      },
      {
        question: 'Does Steward Kitchen Board show modifications and allergy flags?',
        answer:
          'Yes. Every modification, substitution, and allergy note entered at the point of order is displayed prominently on the Kitchen Board — color-coded and impossible to overlook.',
      },
      {
        question: 'Can Steward Kitchen Board sync with third-party delivery platforms?',
        answer:
          'Orders from integrated delivery platforms appear on Kitchen Board alongside dine-in orders, giving the kitchen a single unified queue regardless of order source.',
      },
      {
        question: 'What hardware does Steward Kitchen Board require?',
        answer:
          'Kitchen Board runs on any modern display with a web browser — dedicated kitchen tablets, commercial-grade touchscreens, or repurposed devices all work without specialized hardware.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Kitchen Board',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Digital kitchen display system (KDS) for restaurants. Auto-routes orders, surfaces modifications, eliminates paper tickets.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/finance': {
    title: 'Steward Finance — Integrated Payments & Revenue Analytics',
    description:
      'Track revenue, process payments, and close shifts with confidence. Steward Finance connects your POS, tables, and accounting in one clean dashboard.',
    keywords: 'restaurant payment system, restaurant revenue analytics, restaurant POS integration, integrated restaurant payments',
    canonical: `${DOMAIN}/finance`,
    answerBlock:
      'Steward Finance is the payment and revenue analytics layer of the Steward platform. It processes payments at the table, reconciles shift revenue automatically, and presents managers with a clear financial picture each day — reducing end-of-night close time and eliminating manual reconciliation errors.',
    relatedPages: [
      { label: 'Live Counter', href: '/live-counter' },
      { label: 'Logbook', href: '/logbook' },
      { label: 'QR Ordering', href: '/menu' },
    ],
    faqs: [
      {
        question: 'Does Steward support split billing for restaurants?',
        answer:
          'Yes. Steward Finance supports split billing by seat, item, or custom amount. Guests can pay their portion directly at the table via QR, card, or cash.',
      },
      {
        question: 'How does Steward Finance handle end-of-shift reconciliation?',
        answer:
          'Steward automatically tallies all payments — dine-in, takeaway, delivery, and voids — and produces a reconciliation summary at shift close. Managers review and sign off digitally rather than counting manually.',
      },
      {
        question: 'Can Steward Finance export data to accounting software?',
        answer:
          'Yes. Steward exports financial summaries in formats compatible with major accounting platforms including Xero, QuickBooks, and Zoho Books.',
      },
      {
        question: 'What payment methods does Steward support at the table?',
        answer:
          'Steward Finance supports card (contactless, chip), UPI/QR pay, cash logging, and digital wallets — depending on the payment gateway integrated for your property.',
      },
      {
        question: 'Does Steward Finance track tips and service charges separately?',
        answer:
          'Yes. Tips and service charges are tracked as discrete line items and attributed to the relevant staff member or shift for payroll purposes.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Finance',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Integrated restaurant payments, revenue analytics, and shift reconciliation. Supports split billing, tips, and accounting exports.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/customers': {
    title: 'Steward Customers — Restaurant Guest Intelligence & CRM',
    description:
      'Know your guests before they sit down. Steward Customers surfaces dining history, preferences, and spend to personalize every visit.',
    keywords: 'restaurant CRM, restaurant guest management, restaurant customer database, restaurant loyalty software',
    canonical: `${DOMAIN}/customers`,
    answerBlock:
      'Steward Customers is a guest intelligence and CRM module for restaurants. It automatically builds a profile for every guest — tracking visit frequency, dining preferences, average spend, and special occasions — so your team can provide personalized service without relying on memory.',
    relatedPages: [
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'Finance', href: '/finance' },
      { label: 'Logbook', href: '/logbook' },
    ],
    faqs: [
      {
        question: 'Does Steward have a customer loyalty or CRM system?',
        answer:
          'Yes. Steward Customers is a built-in guest intelligence module. It profiles every guest, tracks their visit history and preferences, and surfaces this information to staff at the point of seating.',
      },
      {
        question: 'How does Steward Customers collect guest data?',
        answer:
          'Guest profiles are built automatically from reservations, QR ordering, and payment history. No manual data entry is required — the profile enriches itself with every visit.',
      },
      {
        question: 'Can Steward tell me which of my customers are at risk of churning?',
        answer:
          'Yes. Steward Customers flags guests who haven\'t visited in a user-defined period so you can trigger a re-engagement campaign via Steward Campaigns before they are lost.',
      },
      {
        question: 'Does Steward Customers support VIP or blacklist tagging?',
        answer:
          'Yes. You can tag guests with custom labels (VIP, media, allergy risk, do-not-seat) that appear as quiet alerts when that guest makes a reservation or walks in.',
      },
      {
        question: 'Is Steward Customers GDPR / data privacy compliant?',
        answer:
          'Steward is built with data privacy controls including guest data deletion requests, consent recording, and data export — supporting compliance with GDPR and equivalent regional regulations.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Customers',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Restaurant guest intelligence and CRM. Tracks visit history, preferences, and spend to enable personalized hospitality.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/inventory': {
    title: 'Steward Inventory — Real-Time Restaurant Stock & Waste Control',
    description:
      'Track stock levels in real time, automate reorder alerts, and eliminate end-of-shift guesswork. Steward Inventory prevents waste before it happens.',
    keywords: 'restaurant inventory management, restaurant stock control software, restaurant waste management, food inventory tracking',
    canonical: `${DOMAIN}/inventory`,
    answerBlock:
      'Steward Inventory is a real-time stock management tool for restaurants. It tracks ingredient levels as orders are placed, triggers reorder alerts when stock falls below defined thresholds, and produces daily waste and usage reports — replacing manual stocktakes and clipboard counts.',
    relatedPages: [
      { label: 'Finance', href: '/finance' },
      { label: 'Kitchen Board', href: '/kitchen-board' },
      { label: 'Logbook', href: '/logbook' },
    ],
    faqs: [
      {
        question: 'How does Steward track restaurant inventory in real time?',
        answer:
          'Steward deducts stock quantities automatically as menu items are ordered, giving you a live view of ingredient levels throughout the day rather than relying on manual end-of-shift counts.',
      },
      {
        question: 'Can Steward Inventory send automatic reorder alerts to suppliers?',
        answer:
          'Yes. You can configure reorder thresholds per ingredient. When stock falls to that level, Steward can generate a reorder notification or a draft purchase order to your supplier.',
      },
      {
        question: 'Does Steward Inventory handle multiple units of measure?',
        answer:
          'Yes. Steward supports multiple unit definitions — you can receive stock in cases and track usage in grams or portions, with automatic conversion applied.',
      },
      {
        question: 'Can I track food waste separately from sales deductions?',
        answer:
          'Yes. Steward has a waste logging workflow that lets staff record spoilage and prep waste separately from order-based deductions, giving you accurate food cost data.',
      },
      {
        question: 'How does Steward Inventory help reduce food costs?',
        answer:
          'By giving kitchen managers real-time visibility into stock depletion rates and waste patterns, Steward enables tighter portion control, better purchasing decisions, and earlier intervention when waste is spiking.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Inventory',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Real-time restaurant stock and waste control. Auto-deducts on order, triggers reorder alerts, and reports daily usage.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/campaigns': {
    title: 'Steward Campaigns — Targeted Restaurant Guest Marketing',
    description:
      'Send the right promotion to the right guest at the right moment. Steward Campaigns uses your own guest data to drive repeat visits.',
    keywords: 'restaurant marketing campaigns, restaurant SMS marketing, restaurant email marketing, restaurant guest retention',
    canonical: `${DOMAIN}/campaigns`,
    answerBlock:
      'Steward Campaigns is a targeted guest marketing tool built directly into the Steward platform. Using your own first-party guest data — visit history, preferences, and spend — it lets you create and send personalized SMS or email promotions to specific guest segments, driving repeat visits without any third-party marketing tool.',
    relatedPages: [
      { label: 'Customers', href: '/customers' },
      { label: 'Finance', href: '/finance' },
      { label: 'Logbook', href: '/logbook' },
    ],
    faqs: [
      {
        question: 'How does Steward Campaigns target the right restaurant guests?',
        answer:
          'Campaigns uses segments built from your Steward guest data — for example, guests who haven\'t visited in 30 days, guests who always order a specific item, or guests with birthdays this week — letting you send precisely targeted messages.',
      },
      {
        question: 'What channels does Steward Campaigns support?',
        answer:
          'Steward Campaigns supports SMS and email. Both are delivered using your own guest contact data collected through reservations and ordering.',
      },
      {
        question: 'Do I need a third-party email marketing tool to use Steward Campaigns?',
        answer:
          'No. Campaigns is fully built into Steward. You create, schedule, and send guest communications without connecting an external platform like Mailchimp or Klaviyo.',
      },
      {
        question: 'Can I measure the ROI of my restaurant marketing campaigns?',
        answer:
          'Yes. Steward correlates campaign sends with subsequent visits and revenue, so you can see exactly which promotions drove return visits and what they were worth.',
      },
      {
        question: 'Is there a template library for restaurant promotion campaigns?',
        answer:
          'Yes. Steward includes pre-written campaign templates for common scenarios — win-backs, birthday offers, quiet night fill, new menu announcements — that you can customise in minutes.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Campaigns',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Targeted guest marketing via SMS and email, built on first-party Steward guest data. No third-party tools required.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/staff': {
    title: 'Steward Staff — Restaurant Workforce Scheduling & Roles',
    description:
      'Schedule shifts, assign roles, and track attendance from one screen. Steward Staff makes managing a restaurant team predictable.',
    keywords: 'restaurant staff scheduling, restaurant workforce management, restaurant rota software, restaurant shift planning',
    canonical: `${DOMAIN}/staff`,
    answerBlock:
      'Steward Staff is a workforce management module for restaurants. It handles shift scheduling, role assignments, attendance tracking, and labour cost reporting in one screen — replacing WhatsApp rotas and spreadsheets with a single controlled system that every team member can access.',
    relatedPages: [
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'Finance', href: '/finance' },
      { label: 'Logbook', href: '/logbook' },
    ],
    faqs: [
      {
        question: 'Can Steward handle restaurant staff scheduling and rotas?',
        answer:
          'Yes. Steward Staff lets managers create, publish, and update shift schedules, assign specific roles per shift, and notify staff of their schedules — all within Steward.',
      },
      {
        question: 'Does Steward Staff track clock-in and clock-out times?',
        answer:
          'Yes. Staff can clock in and out via Steward, and the system logs actual hours worked for each team member against their scheduled shift for payroll and labour cost calculations.',
      },
      {
        question: 'Can restaurant staff view their own schedules in Steward?',
        answer:
          'Yes. Staff members with appropriate permissions can log in to Steward and view their upcoming shifts, request changes, and receive schedule notifications.',
      },
      {
        question: 'How does Steward Staff help control labour costs?',
        answer:
          'Steward reports planned versus actual hours per shift and calculates labour cost as a percentage of revenue — giving managers the data to make scheduling decisions that keep labour within target.',
      },
      {
        question: 'Can I manage staff across multiple restaurant locations in Steward?',
        answer:
          'Yes. Steward Staff supports multi-location management, allowing a central manager to view, compare, and adjust staffing across all sites from one dashboard.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Staff',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Restaurant workforce scheduling, role assignment, attendance tracking, and labour cost reporting in one system.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/orders': {
    title: 'Steward Orders — Unified Order Management for Restaurants',
    description:
      'Handle dine-in, takeaway, and delivery orders from one queue. Steward Orders syncs the front-of-house with the kitchen automatically.',
    keywords: 'restaurant order management, restaurant order tracking, unified restaurant orders, restaurant delivery integration',
    canonical: `${DOMAIN}/orders`,
    answerBlock:
      'Steward Orders is a unified order management system that consolidates dine-in, takeaway, and delivery platform orders into a single queue. Orders route automatically to the kitchen with all modifications intact — eliminating the chaos of managing separate tablets, channels, and paper systems simultaneously.',
    relatedPages: [
      { label: 'Kitchen Board', href: '/kitchen-board' },
      { label: 'QR Ordering', href: '/menu' },
      { label: 'Live Ops', href: '/live-ops' },
    ],
    faqs: [
      {
        question: 'Can Steward manage dine-in, takeaway, and delivery orders together?',
        answer:
          'Yes. Steward Orders aggregates all order types — dine-in from the QR system, takeaway from the counter, and delivery from integrated platforms — into one unified kitchen queue.',
      },
      {
        question: 'Does Steward integrate with Zomato, Swiggy, and other delivery platforms?',
        answer:
          'Steward supports integration with major food delivery platforms. Orders from these platforms appear in the same Steward queue as your own orders, removing the need for separate delivery tablets.',
      },
      {
        question: 'How does Steward handle order modifications and cancellations?',
        answer:
          'Modifications are flagged on the Kitchen Board and trigger a notification to the relevant station. Cancellations update the order status in real time and record any associated financial impact.',
      },
      {
        question: 'Can Steward tell me the average order completion time per station?',
        answer:
          'Yes. Steward tracks ticket open-to-close times per station and presents average completion times, helping identify bottlenecks in the kitchen before they affect the guest experience.',
      },
      {
        question: 'Does Steward Orders support scheduled or pre-ordered takeaway?',
        answer:
          'Yes. Takeaway orders can be placed with a target pickup time and released to the kitchen at the appropriate preparation window to ensure food is ready on time without sitting and degrading.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Orders',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Unified restaurant order management for dine-in, takeaway, and delivery. Automatic kitchen routing with full modification support.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/logbook': {
    title: 'Steward Logbook — Digital Daily Operations Record for Restaurants',
    description:
      'Replace paper logbooks with a searchable, date-stamped digital record. Steward Logbook captures every shift note, incident, and handover in one place.',
    keywords: 'restaurant operations log, digital restaurant logbook, restaurant shift handover, restaurant incident log',
    canonical: `${DOMAIN}/logbook`,
    answerBlock:
      'Steward Logbook is a digital daily operations record for restaurants. It replaces the physical shift logbook with a searchable, date-stamped system where managers record shift events, incidents, maintenance notes, and handover items — creating a permanent, auditable record that any authorized team member can search instantly.',
    relatedPages: [
      { label: 'Staff', href: '/staff' },
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'Finance', href: '/finance' },
    ],
    faqs: [
      {
        question: 'What is a restaurant logbook and does Steward have one?',
        answer:
          'A restaurant logbook is a record of daily shift events — incidents, maintenance issues, handover notes, and unusual occurrences. Steward Logbook is a fully digital version, replacing paper with a searchable, cloud-stored system.',
      },
      {
        question: 'Can multiple managers write to the Steward Logbook simultaneously?',
        answer:
          'Yes. Multiple users can log entries simultaneously, with each entry date-stamped and attributed to the specific team member who created it.',
      },
      {
        question: 'How far back can I search in Steward Logbook?',
        answer:
          'Logbook entries are stored indefinitely and are fully searchable by date range, keyword, category, or author — making it easy to find any past event or pattern.',
      },
      {
        question: 'Can I use Steward Logbook for shift handovers between managers?',
        answer:
          'Yes. Logbook is specifically designed for shift handovers. Outgoing managers record key items and the incoming manager reviews the handover summary at the start of their shift.',
      },
      {
        question: 'Does Steward Logbook support photo attachments for incident records?',
        answer:
          'Yes. Entries can include photo or document attachments — useful for recording maintenance issues, health and safety incidents, or delivery discrepancies with visual evidence.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Logbook',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Digital restaurant shift logbook. Searchable, date-stamped records for incidents, handovers, and daily operational notes.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/live-counter': {
    title: 'Steward Live Counter — Real-Time Revenue & Cover Tracking',
    description:
      'Watch revenue, covers, and table turns update every second. Steward Live Counter gives managers an ambient, always-on pulse on service performance.',
    keywords: 'restaurant live sales dashboard, restaurant revenue tracking, restaurant cover tracking, real-time restaurant metrics',
    canonical: `${DOMAIN}/live-counter`,
    answerBlock:
      'Steward Live Counter is a real-time metrics display for restaurant managers. It shows covers served, revenue earned, average ticket size, and table turn rate updating live throughout service — designed to sit on a dedicated screen in the manager station or back office as an ambient, always-on performance indicator.',
    relatedPages: [
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'Finance', href: '/finance' },
      { label: 'Needle AI', href: '/needle' },
    ],
    faqs: [
      {
        question: 'What metrics does Steward Live Counter show in real time?',
        answer:
          'Live Counter displays covers served, total revenue, average spend per cover, table turn rate, and comparison against yesterday\'s pace — all updating live throughout service.',
      },
      {
        question: 'Can Steward Live Counter be displayed on a dedicated screen?',
        answer:
          'Yes. Live Counter is designed for ambient display on a dedicated monitor in the manager station or back office. It scales to any screen size and updates automatically without user interaction.',
      },
      {
        question: 'How is Steward Live Counter different from Live Ops?',
        answer:
          'Live Ops monitors individual tables and tickets on the floor for active management. Live Counter is a macro-level view — aggregate revenue, covers, and pacing — designed to give managers an instant read on overall service health.',
      },
      {
        question: 'Can I compare today\'s Live Counter metrics against previous periods?',
        answer:
          'Yes. Live Counter shows real-time performance alongside yesterday\'s equivalent period and the same day last week, so managers know immediately whether service is running ahead or behind pace.',
      },
      {
        question: 'Does Live Counter update during high-volume service without lag?',
        answer:
          'Yes. Live Counter uses a real-time data connection that updates every few seconds regardless of transaction volume, making it reliable during the busiest service periods.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Live Counter',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Real-time restaurant revenue and cover tracking dashboard. Designed for ambient display with live service metrics.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },

  '/settings': {
    title: 'Steward Settings — Roles, Permissions & Integrations Hub',
    description:
      'Configure Steward for your restaurant. Define roles, set integrations with your POS, and manage notifications — all in one place.',
    keywords: 'restaurant software settings, restaurant POS integration, restaurant management roles permissions, restaurant software configuration',
    canonical: `${DOMAIN}/settings`,
    answerBlock:
      'Steward Settings is the central configuration hub for the entire Steward platform. From a single screen, restaurant owners and administrators can define team roles and permissions, connect third-party integrations (POS, accounting, delivery), configure notification rules, and manage multi-location preferences — without touching any technical configuration.',
    relatedPages: [
      { label: 'Staff', href: '/staff' },
      { label: 'Finance', href: '/finance' },
      { label: 'Live Ops', href: '/live-ops' },
    ],
    faqs: [
      {
        question: 'How do I set up different permission levels for restaurant staff in Steward?',
        answer:
          'Steward Settings includes a roles and permissions editor where you define what each role (admin, manager, floor staff, kitchen) can view and modify — granularly, per module.',
      },
      {
        question: 'What POS systems does Steward integrate with?',
        answer:
          'Steward integrates with major POS platforms. Integration is configured in Settings by selecting your POS provider and entering the relevant API credentials — typically a 5-minute setup.',
      },
      {
        question: 'Can I connect Steward to my accounting software?',
        answer:
          'Yes. Steward Settings supports integrations with accounting platforms including Xero, QuickBooks, and Zoho Books, enabling automatic export of daily sales summaries.',
      },
      {
        question: 'How do I add a new restaurant location to Steward?',
        answer:
          'New locations are added in Settings under the multi-location configuration panel. Each location can have its own menu, staff, and permission structure while sharing a unified reporting dashboard.',
      },
      {
        question: 'Can I configure what notifications Steward sends and to whom?',
        answer:
          'Yes. Steward Settings has a notifications configuration section where you specify which events trigger alerts, the severity level, the delivery channel (in-app, SMS, email), and the recipient role.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steward Settings',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Steward platform configuration hub. Manages roles, permissions, POS and accounting integrations, notifications, and multi-location setup.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'Steward', url: DOMAIN },
    },
  },
  '/resources': {
    title: 'Steward Resources & Insights — Restaurant Operations Hub',
    description: 'Data reports, operational guides, and free tools built for high-volume restaurant operators and managers.',
    keywords: 'restaurant operations blog, restaurant management resources, restaurant industry data',
    canonical: `${DOMAIN}/resources`,
  },
  '/resources/end-of-pos-report': {
    title: 'The End of the POS: Why High-Volume Restaurants are Moving to Unified Systems',
    description: 'An original data report analyzing the shift from fragmented point-of-sale setups to complete operating systems in modern restaurants.',
    keywords: 'restaurant POS alternatives, restaurant unified operating system, restaurant technology trends',
    canonical: `${DOMAIN}/resources/end-of-pos-report`,
    answerBlock: 'The modern restaurant industry is shifting away from fragmented point-of-sale (POS) systems toward unified restaurant operating systems. This transition eliminates the operational drag of using 5 to 7 disconnected tools for QR ordering, kitchen display, inventory, and staff scheduling.',
    faqs: [
      {
        question: 'Why are restaurants moving away from traditional POS systems?',
        answer: 'Restaurants are moving away from traditional POS systems because they create data fragmentation. When ordering, KDS, inventory, and staff management are in separate apps, managers spend time bridging systems instead of running the floor.'
      },
      {
        question: 'What is a unified restaurant operating system?',
        answer: 'A unified restaurant operating system is a single platform that natively handles all core functions—like table ordering, kitchen routing, payments, and team scheduling—without requiring third-party integrations or middleware.'
      }
    ],
    relatedPages: [
      { label: 'Live Ops', href: '/live-ops' },
      { label: 'One System', href: '/#features' }
    ]
  },
  '/resources/food-cost-calculator': {
    title: 'True Food Cost & Margin Calculator for Restaurants',
    description: 'Stop guessing your margins. Input your recipe costs and see your real profit margins instantly with our free operational tool for restaurants.',
    keywords: 'restaurant food cost calculator, true profit margin calculator, restaurant labor cost formula',
    canonical: `${DOMAIN}/resources/food-cost-calculator`,
    answerBlock: 'Standard food cost only calculates ingredient expenses against selling price. To find the true margin of a dish, operators must also subtract the estimated direct labor cost required to prep and plate the dish.',
    faqs: [
      {
        question: 'How do you calculate true food cost in a restaurant?',
        answer: 'True food cost is calculated by taking the total ingredient cost of a dish plus the estimated direct labor cost (prep and cook time) and dividing it by the selling price.'
      },
      {
        question: 'What is a good food cost percentage for a restaurant?',
        answer: 'A standard target for ingredient food cost is 28% to 32%, but this varies widely by restaurant concept. Fine dining often runs higher food costs offset by higher check averages, while pizzerias may run lower food costs with higher labor.'
      }
    ],
    relatedPages: [
      { label: 'Inventory Management', href: '/inventory' },
      { label: 'Finance & Payments', href: '/finance' }
    ]
  }
};
