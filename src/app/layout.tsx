import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'PlumbCalc - Professional Estimating Software for UK Plumbers',
  description: 'The only plumbing estimator that auto-calculates quantities, fittings, and labour. Gas certificates, heat loss, quotes, invoices, and offline mode. From £19/month.',
  keywords: 'plumbing estimating software, plumber app, gas certificate software, CP12 software, heating estimate, UK plumber, trade management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
