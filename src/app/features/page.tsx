import { Bath, Flame, ChefHat, Droplets, Building2, Calculator, ShieldCheck, Thermometer, FileText, Receipt, CalendarDays, AlertTriangle, ClipboardList, Wrench, WifiOff, Lock, BarChart3, Users } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'

const sections = [
  {
    id: 'estimating',
    title: 'Parametric Job Estimating',
    subtitle: 'The only estimator that calculates quantities for you',
    description: 'Select fixtures and materials — PlumbCalc automatically calculates every pipe length, fitting, clip, and labour hour. No templates, no spreadsheets.',
    icon: Calculator,
    features: [
      'Bathroom Estimator — 22 auto-calculated line items with grade tiers (Basic/Mid/Premium)',
      'Central Heating — Boiler, radiators, TRVs, controls, powerflush, with heat loss import',
      'Kitchen — Sink, taps, dishwasher and washing machine connections',
      'Hot Water — Vented/unvented cylinders, immersion, expansion vessel, PRV',
      'Full Refurbishment — Combines all 4 estimators into sectioned multi-room estimates',
      'Live recalculation as inputs change — see totals update instantly',
      'Cascading fixture selections with conditional item inclusion',
      'Materials and labour tracked separately with 20% UK VAT',
    ],
  },
  {
    id: 'gas-certificates',
    title: 'Gas Certificates & Compliance',
    subtitle: 'All 4 Gas Safe certificate types, built in',
    description: 'Create, edit, issue, and print gas safety certificates without switching apps. CP12 expiry tracking keeps you compliant and your landlords notified.',
    icon: ShieldCheck,
    features: [
      'CP12 — Landlord Gas Safety Certificate with multi-appliance inspections',
      'CP6 — Warning Notice for safety defects (ID/AR/NCS classification)',
      'CD10 — Commissioning Certificate for new installations',
      'CD11 — Unsafe Situation Report for imminent danger',
      'Edit-in-draft mode with auto-save, then issue to lock as read-only',
      'Print-to-PDF with company branding, signature areas, and legal disclaimer',
      'Appliance registry — track boilers, fires, cookers with service dates',
      'CP12 expiry reminders — batch email customers before annual renewal due',
      'Encrypted PII storage (AES-256) for landlord and tenant data',
    ],
  },
  {
    id: 'heat-loss',
    title: 'Heat Loss Calculator',
    subtitle: 'Room-by-room analysis to BS EN 12831',
    description: 'Professional heat loss calculations that feed directly into your central heating estimates. Size radiators on-site with confidence.',
    icon: Thermometer,
    features: [
      'Room-by-room heat loss analysis with UK construction U-values',
      'Wall, floor, roof, glazing, and door configuration per room',
      'Ventilation loss calculation with exposure levels',
      'Radiator sizing from 35-specification database',
      'Boiler sizing recommendation with safety factor and DHW allowance',
      '"Import from Heat Loss" button in Central Heating estimator',
      'Saved reports (HLR-YYYY-NNNN) for documentation',
    ],
  },
  {
    id: 'quotes-invoicing',
    title: 'Quotes & Invoicing',
    subtitle: 'From estimate to payment in a few clicks',
    description: 'Share professional branded quotes via unique links. Customers accept online. Convert to invoices and track payments — no separate billing app needed.',
    icon: Receipt,
    features: [
      'Shareable quote links — customers view and respond without logging in',
      'Email notifications on quote send and customer acceptance/rejection',
      'Quote status tracking: Draft, Sent, Viewed, Accepted, Rejected, Expired',
      'Configurable validity period (default 30 days) with auto-expiry',
      'One-click quote-to-invoice conversion',
      'Invoice ledger with payment tracking and overdue alerts',
      'PDF output with company branding, bank details, and terms',
    ],
  },
  {
    id: 'job-management',
    title: 'Job Management & Scheduling',
    subtitle: 'Track every job from survey to sign-off',
    description: 'Schedule jobs, track status, manage maintenance callouts, and see your week at a glance. Everything links back to the customer and the original estimate.',
    icon: CalendarDays,
    features: [
      'Job board with status tracking (Scheduled, In Progress, Completed)',
      'Linked estimates and invoices per job',
      'Maintenance callout workflow — 11 fault categories, 3 urgency levels, 9 status steps',
      'On-site diagnosis and time-and-materials costing',
      'Escalate maintenance callout to full estimate with pre-populated data',
      'Survey wizard collects scope across 8 categories, pre-fills estimators',
      'Dashboard alerts for upcoming jobs, overdue work, and open callouts',
    ],
  },
  {
    id: 'offline-security',
    title: 'Offline Mode & Security',
    subtitle: 'Works in basements. Protects your data.',
    description: 'PlumbCalc is a Progressive Web App that works without internet. All personal data is encrypted. Daily backups protect against data loss.',
    icon: Lock,
    features: [
      'Progressive Web App — install on any device, no app store needed',
      'Full offline capability: create estimates, save customers, log data',
      'Auto-sync when reconnected with FIFO replay queue',
      'AES-256-GCM encryption for all personal data (names, addresses, emails)',
      'Company bank details encrypted separately',
      'Daily automated backups with manual backup and restore UI',
      'Rate limiting, CSRF protection, and security headers',
      'GDPR compliant: consent tracking, data export, soft-delete with 30-day recovery',
      'Audit logging of all create/update/delete operations',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">Every feature a UK plumber needs</h1>
          <p className="text-lg text-gray-500">
            From your first quote to your last invoice of the year — PlumbCalc handles the entire job lifecycle.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id} className={`py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="h-12 w-12 rounded-xl bg-[#2C3E50]/5 flex items-center justify-center mb-4">
                  <section.icon className="h-6 w-6 text-[#2C3E50]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">{section.title}</h2>
                <p className="text-sm font-medium text-[#27AE60] mb-3">{section.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-3">
                  {section.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="h-5 w-5 rounded-full bg-[#27AE60]/10 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#27AE60]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pipework calculator + price database */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="h-12 w-12 rounded-xl bg-[#2C3E50]/5 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-[#2C3E50]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Pipework Calculator</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">20-slot pipe run calculator that auto-estimates elbows, tees, couplings, clips, and insulation from pipe lengths. No competitor has this.</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Copper and plastic push-fit materials</li>
                <li>10mm, 15mm, 22mm, 28mm diameters</li>
                <li>Configurable wastage percentage</li>
                <li>Cost breakdown from your price list</li>
              </ul>
            </div>
            <div>
              <div className="h-12 w-12 rounded-xl bg-[#2C3E50]/5 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-[#2C3E50]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">95-Item Price Database</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Pre-loaded with UK trade prices across 11 categories. Edit individually or bulk-import from your merchant.</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>CSV/XLSX import from Screwfix, Toolstation, City Plumbing</li>
                <li>Auto column detection and category mapping</li>
                <li>Price history tracking for imports</li>
                <li>Reset to defaults at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection headline="See it in action" subheadline="Start your 14-day free trial and explore every feature." />
    </>
  )
}
