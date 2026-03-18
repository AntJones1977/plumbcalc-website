import type { Tutorial } from 'tutorial-components'

export const tutorials: Tutorial[] = [
  {
    slug: 'bathroom-estimate',
    title: 'Creating a Bathroom Estimate',
    description:
      'Walk through building a full bathroom installation estimate — from selecting materials to generating a professional quote.',
    category: 'Estimating',
    estimatedMinutes: 3,
    iconName: 'Calculator',
    steps: [
      {
        step: 1,
        title: 'Open the Bathroom Estimator',
        description:
          'From the dashboard, navigate to the Estimating section and select "Bathroom Installation" from the available job types.',
        mediaPath: '/tutorials/bathroom-estimate/step-1.png',
        mediaType: 'image',
        annotation: 'PlumbCalc includes 5 pre-built estimator templates for common plumbing jobs.',
        durationSeconds: 5,
      },
      {
        step: 2,
        title: 'Select Materials and Quantities',
        description:
          'Choose the fixtures, fittings, and materials from the 95-item price database. Quantities auto-calculate based on the room dimensions you enter.',
        mediaPath: '/tutorials/bathroom-estimate/step-2.png',
        mediaType: 'image',
        annotation: 'Prices update automatically from your customised price list.',
        durationSeconds: 6,
      },
      {
        step: 3,
        title: 'Add Labour Rates',
        description:
          'Set your hourly or day rate. PlumbCalc calculates the estimated labour time based on the complexity of the job and materials selected.',
        mediaPath: '/tutorials/bathroom-estimate/step-3.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
      {
        step: 4,
        title: 'Review the Cost Breakdown',
        description:
          'See a complete breakdown of materials, labour, markup, and VAT. Adjust your margin percentage to hit your target profit.',
        mediaPath: '/tutorials/bathroom-estimate/step-4.png',
        mediaType: 'image',
        annotation: 'The margin calculator helps you stay competitive while maintaining profitability.',
        durationSeconds: 6,
      },
      {
        step: 5,
        title: 'Generate and Send the Quote',
        description:
          'Export the estimate as a professional PDF quote. Share it directly with your customer via email or a shareable link.',
        mediaPath: '/tutorials/bathroom-estimate/step-5.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
    ],
    ctaLabel: 'Try It Free',
    ctaHref: 'https://app.plumbcalc.com',
  },
  {
    slug: 'price-list-setup',
    title: 'Setting Up Your Price List',
    description:
      'Customise the 95-item price database with your supplier prices, markup rates, and preferred brands.',
    category: 'Setup',
    estimatedMinutes: 2,
    iconName: 'List',
    steps: [
      {
        step: 1,
        title: 'Navigate to the Price List',
        description:
          'From the main menu, open the Price List section. You will see all 95 items organised by category — copper, plastic, fittings, radiators, and more.',
        mediaPath: '/tutorials/price-list-setup/step-1.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
      {
        step: 2,
        title: 'Update Your Supplier Prices',
        description:
          'Click any item to update its unit price to match your supplier rates. Changes apply instantly to all future estimates.',
        mediaPath: '/tutorials/price-list-setup/step-2.png',
        mediaType: 'image',
        annotation: 'You can update prices individually or import from a spreadsheet.',
        durationSeconds: 5,
      },
      {
        step: 3,
        title: 'Set Category Markup Rates',
        description:
          'Apply percentage markups per category. For example, set 20% on copper fittings and 15% on plastic — your estimates calculate the customer price automatically.',
        mediaPath: '/tutorials/price-list-setup/step-3.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
    ],
    ctaLabel: 'Start Customising',
    ctaHref: 'https://app.plumbcalc.com',
  },
  {
    slug: 'gas-certificate',
    title: 'Generating a Gas Safety Certificate',
    description:
      'Complete a CP12 gas safety record digitally — capture readings, sign off, and send the certificate to your customer.',
    category: 'Compliance',
    estimatedMinutes: 2,
    iconName: 'ShieldCheck',
    steps: [
      {
        step: 1,
        title: 'Start a New Gas Certificate',
        description:
          'Open Gas Certificates from the dashboard and tap "New CP12". Enter the property address and landlord details.',
        mediaPath: '/tutorials/gas-certificate/step-1.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
      {
        step: 2,
        title: 'Record Appliance Readings',
        description:
          'For each gas appliance, enter the make, model, flue type, and combustion readings. PlumbCalc validates entries against safe limits.',
        mediaPath: '/tutorials/gas-certificate/step-2.png',
        mediaType: 'image',
        annotation: 'Red warnings appear if readings fall outside safe parameters.',
        durationSeconds: 6,
      },
      {
        step: 3,
        title: 'Sign Off and Issue',
        description:
          'Add your Gas Safe registration number, sign the certificate digitally, and issue it as a branded PDF to the landlord or homeowner.',
        mediaPath: '/tutorials/gas-certificate/step-3.png',
        mediaType: 'image',
        durationSeconds: 5,
      },
    ],
    ctaLabel: 'Try Gas Certificates Free',
    ctaHref: 'https://app.plumbcalc.com',
  },
]
