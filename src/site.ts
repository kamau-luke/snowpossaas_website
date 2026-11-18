/**
 * Everything on the site that you may need to change lives here.
 * Items marked TODO are placeholders: fill them in before showing the site to anyone.
 */

/** The Clubio POS app (the UI). In development, the UI's dev server. */
export const APP_URL = (import.meta.env.PUBLIC_APP_URL || 'http://localhost:5174').replace(
  /\/+$/,
  '',
);

export const LINKS = {
  signIn: `${APP_URL}/`,
  signup: `${APP_URL}/signup`,
  terms: `${APP_URL}/terms`,
  privacy: `${APP_URL}/privacy`,
};

export const BUSINESS = {
  /** TODO: your registered business name (as on the terms and privacy pages) */
  legalName: '[Business name]',
  city: 'Nairobi, Kenya',
};

export const CONTACT = {
  /** TODO: WhatsApp number in international form, digits only: 2547XXXXXXXX */
  whatsapp: '254700000000',
  whatsappMessage: "Hi, I'd like a Clubio POS demo",
  /** TODO: phone number as people should see it */
  phoneDisplay: '0700 000 000',
  /** TODO: the same number in +254 form, for tap-to-call */
  phoneTel: '+254700000000',
  /** TODO: your email address */
  email: 'hello@example.com',
};

export const whatsappUrl = (message = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

/** Must match the backend's TRIAL_DAYS (snowpossaas_backend/src/modules/business/business.service.ts) */
export const TRIAL_DAYS = 14;

/**
 * Must match the plans in Platform admin → Plans & pricing (KES per active outlet per month).
 * Update this whenever prices change there.
 */
export const PLANS = [
  {
    code: 'BASIC',
    name: 'Basic',
    price: 2500,
    blurb: 'Everything a bar needs to stop losses at the counter.',
    features: [
      'Point of sale with your own prices per outlet',
      'Stock, deliveries, low-stock alerts and history',
      'Bar shifts with handover and blind closing counts',
      'Cash-ups, expenses and disputes',
      'M-Pesa codes typed and checked at close',
      'Reports, CSV exports and the dashboard',
    ],
  },
  {
    code: 'PRO',
    name: 'Pro',
    price: 4500,
    blurb: 'For busy clubs with kegs, waiters and more than one place stock lives.',
    highlight: true,
    features: [
      'Everything in Basic',
      'Kegs: weighed taps, keg changes and keg profit',
      'Waiters, tabs and staff bills',
      'A connected M-Pesa till: payments appear on their own',
      'Stores and transfers between outlets',
    ],
  },
] as const;

export const formatKes = (n: number) => `KES ${n.toLocaleString('en-KE')}`;
