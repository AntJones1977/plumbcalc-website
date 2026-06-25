import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { site } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  alternates: { canonical: '/' },
  title: `${site.name} — Gas, Heating & Plumbing Engineer in ${site.town}, ${site.region}`,
  description: `${site.name}: Gas Safe registered boiler installation, servicing & repair, central heating, gas safety certificates and emergency callouts — plus trusted local plumbing across ${site.area}. Fully insured. Free, no-obligation quotes.`,
  keywords: [
    'boiler installation',
    'boiler repair',
    'boiler service',
    'gas engineer',
    'heating engineer',
    'central heating',
    'Gas Safe engineer',
    'landlord gas safety certificate',
    'CP12',
    'emergency plumber',
    'plumber',
    site.town,
    site.name,
  ],
  openGraph: {
    title: `${site.name} — Gas, Heating & Plumbing`,
    description: `Gas Safe registered boilers, central heating, gas safety and emergency callouts — plus trusted local plumbing across ${site.area}. Free quotes, honest pricing.`,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
  },
}

// LocalBusiness structured data helps you show up in local Google searches.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HVACBusiness', 'Plumber'],
  name: site.name,
  description: `Gas Safe registered boiler installation, servicing & repair, central heating, gas safety and emergency callouts, plus general plumbing across ${site.area}.`,
  telephone: site.phone,
  email: site.email,
  url: `https://${site.domain}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.town,
    addressRegion: site.region,
    addressCountry: 'GB',
  },
  areaServed: site.areaList,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="antialiased bg-white text-[#14222B] pb-14 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
