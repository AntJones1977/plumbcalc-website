import { Phone, MessageCircle } from 'lucide-react'
import { site, whatsappHref } from '@/lib/site-config'

// Sticky bottom action bar on mobile — most "near me" searches are on a phone.
export function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#E8E2D9] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-[#E0701A]"
        >
          <Phone className="h-4 w-4" /> Call now
        </a>
        <a
          href={whatsappHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#14222B]"
        >
          <MessageCircle className="h-4 w-4 text-[#E0701A]" /> WhatsApp
        </a>
      </div>
    </div>
  )
}
