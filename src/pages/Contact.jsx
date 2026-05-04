import { useState } from 'react'
import { Phone, MapPin, Clock, Instagram, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'

const infoItems = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '(0322) 226 00 11',
    href: 'tel:+903222260011',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Yenibaraj Mahallesi, Seyhan / Adana',
    href: 'https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sefkebap',
    href: 'https://www.instagram.com/sefkebap/',
    external: true,
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Her gün 09:00 – 00:00',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent('İstek ve Şikayet — Şef Kebap')
    const body    = encodeURIComponent(`Ad Soyad: ${form.name}\nE-posta: ${form.email}\n\nMesaj:\n${form.message}`)
    window.location.href = `mailto:sefkebap@example.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="İletişim"
        subtitle="Rezervasyon, sorularınız veya önerileriniz için buradayız."
      />

      <section className="section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Info grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {infoItems.map(item => {
              const Icon = item.icon
              const inner = (
                <div className="card-soft p-7 text-center group h-full flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/25 flex items-center justify-center mb-4 group-hover:border-gold/60 transition-colors">
                    <Icon size={17} className="text-gold/55 group-hover:text-gold transition-colors" />
                  </div>
                  <p className="eyebrow text-[10px] mb-2 text-gold/70">{item.label}</p>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{item.value}</p>
                </div>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              )
            })}
          </div>

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Google Maps */}
            <div className="rounded-sm overflow-hidden border border-gold/20 shadow-soft">
              <iframe
                title="Şef Kebap Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.8!2d35.3213!3d37.0017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAwJzA2LjEiTiAzNcKwMTknMTYuNyJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-cream-warm px-6 py-4 border-t border-gold/15 flex items-center justify-between">
                <div>
                  <p className="font-accent font-semibold text-xs text-charcoal mb-0.5">Şef Kebap</p>
                  <p className="font-sans text-xs text-charcoal/50">Yenibaraj, Seyhan / Adana</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-charcoal py-2 px-4 text-xs"
                >
                  Yol Tarifi
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="card-soft p-8 lg:p-10">
              <div className="mb-7">
                <p className="eyebrow mb-3">Görüşleriniz</p>
                <div className="gold-line-left mb-4" />
                <h2 className="font-display text-2xl font-light text-charcoal">İstek & Şikayet</h2>
                <p className="font-sans text-sm text-charcoal/45 mt-2 leading-relaxed">
                  Formu doldurun, en kısa sürede geri dönelim.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div className="gold-line mb-4" />
                  <h3 className="font-display text-xl font-light text-charcoal mb-2">Teşekkürler!</h3>
                  <p className="font-sans text-sm text-charcoal/50">Mesajınız iletildi. En kısa sürede dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="block font-accent text-[11px] tracking-[2px] uppercase text-charcoal/50 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text" name="name"
                      placeholder="Adınız ve soyadınız"
                      value={form.name} onChange={handle} required
                      className="w-full bg-cream-warm border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-accent text-[11px] tracking-[2px] uppercase text-charcoal/50 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email" name="email"
                      placeholder="ornek@email.com"
                      value={form.email} onChange={handle} required
                      className="w-full bg-cream-warm border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-accent text-[11px] tracking-[2px] uppercase text-charcoal/50 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      placeholder="İstek, şikayet veya önerinizi buraya yazın..."
                      value={form.message} onChange={handle} required
                      rows={5}
                      className="w-full bg-cream-warm border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all resize-y"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center">
                    <Mail size={14} />
                    Mesajı Gönder
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Hours table */}
          <div className="mt-16 max-w-lg mx-auto">
            <div className="text-center mb-8">
              <p className="eyebrow mb-4">Çalışma Saatleri</p>
              <div className="gold-line" />
            </div>
            <div className="card-soft overflow-hidden divide-y divide-gold/10">
              {[
                ['Pazartesi – Cuma', '11:00 – 23:00'],
                ['Cumartesi',        '11:00 – 24:00'],
                ['Pazar',            '12:00 – 22:00'],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between items-center px-7 py-4">
                  <span className="font-sans text-sm text-charcoal/55">{day}</span>
                  <span className="font-accent font-semibold text-sm text-charcoal">{time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
