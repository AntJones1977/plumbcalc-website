import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { site } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  alternates: { canonical: '/' },
  title: `${site.name} — Plumbing, Bathrooms, Landscaping & Property Services`,
  description: `${site.name}: plumbing, bathroom renovations, landscaping, internal build-outs and emergency callouts across ${site.area}. Fully insured. Free, no-obligation quotes.`,
  keywords: [
    'plumber',
    'bathroom fitter',
    'bathroom renovation',
    'landscaping',
    'garden services',
    'home renovation',
    'emergency plumber',
    site.name,
  ],
  openGraph: {
    title: `${site.name} — Plumbing, Bathrooms & Property Services`,
    description: `Quality plumbing, bathrooms, landscaping and property work across ${site.area}. Free quotes, honest pricing.`,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
  },
}

// LocalBusiness structured data helps you show up in local Google searches.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: `Plumbing, bathrooms, landscaping and property maintenance across ${site.area}.`,
  telephone: site.phone,
  email: site.email,
  url: `https://${site.domain}`,
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
