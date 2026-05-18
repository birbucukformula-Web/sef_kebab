import { Link } from 'react-router-dom'
import { Instagram, Phone, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Menü', to: '/menu' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] text-[#1C1C1C]">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-display text-3xl font-light tracking-[4px] text-[#C8511A]">ŞEF KEBAP</p>
              <p className="font-accent text-[9px] tracking-[6px] uppercase text-[#C8511A]/70 mt-0.5">Adana</p>
            </div>
            <div className="w-8 h-px bg-[#C8511A] mb-5" />
            <p className="font-sans text-sm leading-relaxed text-[#1C1C1C]/70 max-w-[220px]">
              Adana'nın seçkin kebap restoranı. Geleneksel lezzet, modern sunum.
            </p>
            <a
              href="https://www.instagram.com/sefkebap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-[#1C1C1C]/70 hover:text-[#C8511A] transition-colors duration-200 text-sm font-accent"
            >
              <Instagram size={15} />
              @sefkebap
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-[#C8511A]/60 mb-6">Sayfalar</p>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-[#1C1C1C]/70 hover:text-[#C8511A] transition-colors duration-200 font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-[#C8511A]/60 mb-6">İletişim</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+903222260011"
                  className="flex items-start gap-3 text-sm text-[#1C1C1C]/70 hover:text-[#C8511A] transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#C8511A]/50" />
                  (0322) 226 00 11
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#1C1C1C]/70 hover:text-[#C8511A] transition-colors duration-200"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C8511A]/50" />
                  Yenibaraj, Seyhan / Adana
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="eyebrow text-[#C8511A]/60 mb-6">Çalışma Saatleri</p>
            <ul className="space-y-3">
              {[
                ['Pazartesi – Pazar', '09:00 – 00:00'],

              ].map(([day, time]) => (
                <li key={day} className="flex items-start gap-3 text-sm">
                  <Clock size={13} className="mt-0.5 flex-shrink-0 text-[#C8511A]/50" />
                  <div>
                    <span className="text-[#1C1C1C]/50 block text-xs">{day}</span>
                    <span className="text-[#1C1C1C]/80">{time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gold separator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C8511A]/40 to-transparent" />
      </div>

      {/* Team logo section */}
      <div className="bg-[#F5F0E8] text-center py-6 px-6">
        <p className="eyebrow text-[#C8511A]/40 mb-3">Presented by</p>

        {/* Large team logo area */}
        <a 
          href="https://birbucukadanaformula.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-[#C8511A]/30 flex items-center justify-center group-hover:border-[#C8511A]/60 transition-colors duration-300">
            <span className="font-display text-lg text-[#C8511A]/60 group-hover:text-[#C8511A] transition-colors duration-300">1.5</span>
          </div>
          <div>
            <p className="font-display text-sm tracking-[4px] text-[#1C1C1C]/60 group-hover:text-[#1C1C1C]/80 transition-colors duration-300">
              1.5 ADANA FORMULA
            </p>
            <p className="font-accent text-[8px] tracking-[4px] uppercase text-[#C8511A]/40 mt-1">
              Digital · Design · Development
            </p>
          </div>
        </a>

        <div className="mt-8 pt-4 border-t border-[#1C1C1C]/10">
          <p className="font-sans text-[10px] text-[#1C1C1C]/60 tracking-wide">
            © {new Date().getFullYear()} Şef Kebap. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
