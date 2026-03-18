import { Mail, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">Get in touch</h1>
          <p className="text-lg text-gray-500">Have a question about PlumbCalc? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]/20 focus:border-[#2C3E50]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]/20 focus:border-[#2C3E50]" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]/20 focus:border-[#2C3E50] resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="bg-[#2C3E50] hover:bg-[#34495E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-6">Other ways to reach us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2C3E50]/5 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C3E50]">Email</h3>
                    <p className="text-sm text-gray-600">hello@plumbcalc.com</p>
                    <p className="text-xs text-gray-400 mt-1">We reply within 24 hours on business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#2C3E50]/5 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C3E50]">Support</h3>
                    <p className="text-sm text-gray-600">support@plumbcalc.com</p>
                    <p className="text-xs text-gray-400 mt-1">For existing customers with technical issues</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F8F9FA] rounded-xl">
                <h3 className="text-sm font-semibold text-[#2C3E50] mb-2">Looking for a demo?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The best way to see PlumbCalc is to try it. Start a free 14-day trial and explore every feature — no credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
