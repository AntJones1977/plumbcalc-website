// ---------------------------------------------------------------------------
// OJ Services — central business details.
//
// 👉 EDIT THE VALUES BELOW before going live. Everything on the site reads
//    from this one file, so you only need to change details in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: 'OJ Services',

  // Short strap line shown under the logo / in the footer.
  tagline: 'Gas, heating & plumbing services, done properly',

  // Shown on every "Call" button.
  phone: '07305 971841',
  // Same number in international format for the click-to-call link.
  phoneHref: 'tel:+447305971841',

  // The email leads should go to.
  email: 'Ollie@ojservices.co.uk',

  // WhatsApp number, international format, digits only.
  whatsapp: '447305971841',

  // Where OJ Services works.
  area: 'Broxbourne & the surrounding counties',
  town: 'Broxbourne',
  region: 'Hertfordshire',
  areaList: ['Broxbourne', 'Hoddesdon', 'Cheshunt', 'Waltham Cross', 'Ware', 'Hertford', 'Harlow', 'Enfield', 'Epping'],

  // TODO: set your real number, or remove references to it in the components.
  yearsExperience: '15+',

  // Gas Safe registration. While `gasSafeRegistered` is true the site shows a
  // "Gas Safe registered" badge. The registration NUMBER only appears once you
  // fill it in below — so the live site stays tidy until you add the real one.
  // 👉 TODO: add your real Gas Safe registration number (placeholder is blank).
  gasSafeRegistered: true,
  gasSafeNumber: '', // e.g. '123456' — leave blank until you add the real one

  domain: 'ojservices.co.uk',
} as const

// Pre-built WhatsApp "click to chat" link.
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Hi ${site.name}, I'd like a quote for some work please.`,
)}`
