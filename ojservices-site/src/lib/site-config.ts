// ---------------------------------------------------------------------------
// OJ Services — central business details.
//
// 👉 EDIT THE VALUES BELOW before going live. Everything on the site reads
//    from this one file, so you only need to change details in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: 'OJ Services',

  // Short strap line shown under the logo / in the footer.
  tagline: 'Plumbing, bathrooms & property work, done properly',

  // Shown on every "Call" button.
  phone: '07305 971841',
  // Same number in international format for the click-to-call link.
  phoneHref: 'tel:+447305971841',

  // The email leads should go to.
  email: 'Ollie@ojservices.co.uk',

  // WhatsApp number, international format, digits only.
  whatsapp: '447305971841',

  // TODO: where you work.
  area: 'your town & surrounding areas',
  areaList: ['Your Town', 'Nearby Town', 'Another Village', 'Wider County'],

  // TODO: set your real number, or remove references to it in the components.
  yearsExperience: '15+',

  domain: 'ojservices.co.uk',
} as const

// Pre-built WhatsApp "click to chat" link.
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Hi ${site.name}, I'd like a quote for some work please.`,
)}`
