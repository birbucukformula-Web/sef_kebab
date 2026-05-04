import { Link } from 'react-router-dom'
import { Instagram, Phone, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Ana Sayfa',  to: '/' },
  { label: 'Menü',       to: '/menu' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Galeri',     to: '/galeri' },
  { label: 'İletişim',   to: '/iletisim' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-cream/70">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-display text-3xl font-light tracking-[4px] text-cream">ŞEF KEBAP</p>
              <p className="font-accent text-[9px] tracking-[6px] uppercase text-gold/70 mt-0.5">Adana</p>
            </div>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-sans text-sm leading-relaxed text-cream/50 max-w-[220px]">
              Adana'nın seçkin kebap restoranı. Geleneksel lezzet, modern sunum.
            </p>
            <a
              href="https://www.instagram.com/sefkebap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-cream/50 hover:text-gold transition-colors duration-200 text-sm font-accent"
            >
              <Instagram size={15} />
              @sefkebap
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-gold/60 mb-6">Sayfalar</p>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/50 hover:text-gold transition-colors duration-200 font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-gold/60 mb-6">İletişim</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+903222260011"
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-gold transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                  (0322) 226 00 11
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-gold transition-colors duration-200"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                  Yenibaraj, Seyhan / Adana
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="eyebrow text-gold/60 mb-6">Çalışma Saatleri</p>
            <ul className="space-y-3">
              {[
                ['Pazartesi – Pazar', '09:00 – 00:00'],

              ].map(([day, time]) => (
                <li key={day} className="flex items-start gap-3 text-sm">
                  <Clock size={13} className="mt-0.5 flex-shrink-0 text-gold/50" />
                  <div>
                    <span className="text-cream/40 block text-xs">{day}</span>
                    <span className="text-cream/70">{time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gold separator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Team logo section */}
      <div className="bg-charcoal text-center py-14 px-6">
        <p className="eyebrow text-gold/40 mb-6">Presented by</p>

        {/* Large team logo area */}
        <div className="inline-flex flex-col items-center gap-3 group cursor-default">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
            <span className="font-display text-2xl text-gold/60 group-hover:text-gold transition-colors duration-300">1.5</span>
          </div>
          <div>
            <p className="font-display text-xl tracking-[4px] text-cream/60 group-hover:text-cream/80 transition-colors duration-300">
              1.5 ADANA FORMULA
            </p>
            <p className="font-accent text-[9px] tracking-[5px] uppercase text-gold/40 mt-1">
              Digital · Design · Development
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="font-sans text-xs text-cream/25 tracking-wide">
            © {new Date().getFullYear()} Şef Kebap. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
