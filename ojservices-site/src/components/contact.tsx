'use client'

import { useState } from 'react'
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react'
import { site, whatsappHref } from '@/lib/site-config'

type FormState = {
  name: string
  phone: string
  postcode: string
  service: string
  message: string
}

const serviceOptions = [
  'General plumbing',
  'Bathroom / renovation',
  'Landscaping / restoration',
  'Emergency callout',
  'Something else',
]

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    postcode: '',
    service: 'General plumbing',
    message: '',
  })

  const update = (field: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Quote request — ${form.service}`
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Postcode: ${form.postcode}`,
      `Service: ${form.service}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-lg border border-[#E8E2D9] bg-white px-4 py-3 text-sm text-[#14222B] focus:outline-none focus:ring-2 focus:ring-[#E0701A]/40 focus:border-[#E0701A]'

  return (
    <section id="contact" className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Pitch + direct contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-4">Get your free quote</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell us about your job and we&apos;ll get back to you, usually the same day. Prefer to talk?
              Give us a call or drop us a WhatsApp.
            </p>

            <div className="space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-4 bg-white rounded-xl border border-[#E8E2D9] p-4 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-lg bg-[#E0701A]/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#E0701A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us</p>
                  <p className="font-semibold text-[#14222B]">{site.phone}</p>
                </div>
              </a>

              <a href={whatsappHref} className="flex items-center gap-4 bg-white rounded-xl border border-[#E8E2D9] p-4 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-lg bg-[#E0701A]/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#E0701A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="font-semibold text-[#14222B]">Message us</p>
                </div>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-center gap-4 bg-white rounded-xl border border-[#E8E2D9] p-4 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-lg bg-[#E0701A]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#E0701A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-[#14222B]">{site.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 px-4 pt-2 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-[#E0701A]" /> Covering {site.area}
              </div>
            </div>
          </div>

          {/* Quote form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8E2D9] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#14222B] mb-1.5">Your name</label>
                <input required value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} placeholder="Jane Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14222B] mb-1.5">Phone</label>
                <input required value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} placeholder="07123 456789" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-[#14222B] mb-1.5">Postcode</label>
              <input value={form.postcode} onChange={e => update('postcode', e.target.value)} className={inputClass} placeholder="AB1 2CD" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-[#14222B] mb-1.5">What do you need?</label>
              <select value={form.service} onChange={e => update('service', e.target.value)} className={inputClass}>
                {serviceOptions.map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-[#14222B] mb-1.5">Tell us about the job</label>
              <textarea value={form.message} onChange={e => update('message', e.target.value)} rows={4} className={inputClass} placeholder="A few details about what you need doing..." />
            </div>

            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#E0701A] hover:bg-[#C45F12] text-white px-6 py-3.5 rounded-lg font-semibold transition-colors">
              <Send className="h-4 w-4" /> Send my request
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">No obligation. We aim to reply the same day.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
