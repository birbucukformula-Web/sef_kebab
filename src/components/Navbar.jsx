import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Instagram, Phone } from 'lucide-react'
import logo from '../assets/images/logo.png'

const links = [
  { label: 'Ana Sayfa',  to: '/' },
  { label: 'Menü',       to: '/menu' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Galeri',     to: '/galeri' },
  { label: 'İletişim',   to: '/iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }) =>
    `font-accent text-xs tracking-[3px] uppercase transition-colors duration-200 ${
      isActive ? 'text-gold' : 'text-charcoal/70 hover:text-gold'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft border-b border-gold/15'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-8">

{/* Logo */}
<Link to="/" className="flex items-center group" onClick={() => setOpen(false)}>
  <div className="relative p-1">
    {/* Arkadaki kavisli dekoratif katman (Opsiyonel, logoyu öne çıkarır) */}
    <div className="absolute inset-0 bg-jsgold/5 rounded-[20px] rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
    
    <img
      src={logo}
      alt="ŞEF KEBAP"
      className="h-12 w-auto object-contain rounded-[18px] border-2 border-jsgold/20 shadow-sm transition-all duration-300 group-hover:border-jsgold group-hover:scale-105"
    />
    </div>  
      <span className="ml-3 font-display text-xl tracking-tight text-charcoal hidden sm:block">
      ŞEF <span className="text-jsgold">KEBAP</span>
  </span>
    </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://www.instagram.com/sefkebap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/50 hover:text-gold transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a href="tel:+903222260011" className="btn-outline-gold py-2.5 px-5 text-xs">
              Rezervasyon
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors z-50"
            onClick={() => setOpen(v => !v)}
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-cream z-40 flex flex-col transition-transform duration-400 ease-in-out lg:hidden shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionDuration: '350ms' }}
      >
        {/* Panel header */}
        <div className="h-20 flex items-center px-7 border-b border-gold/15">
          <div className="flex flex-col">
            <span className="font-display text-xl font-light tracking-[3px] text-charcoal">ŞEF KEBAP</span>
            <span className="font-accent text-[9px] tracking-[6px] uppercase text-gold/70">Adana</span>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col gap-1 px-5 py-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-accent text-sm tracking-[2px] uppercase px-3 py-4 border-b border-charcoal/6 transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-charcoal/70 hover:text-gold'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Panel footer */}
        <div className="px-7 py-8 border-t border-gold/15 flex flex-col gap-4">
          <a href="tel:+903222260011" className="btn-gold justify-center text-xs">
            <Phone size={14} />
            (0322) 226 00 11
          </a>
          <a
            href="https://www.instagram.com/sefkebap/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold justify-center text-xs"
          >
            <Instagram size={14} />
            @sefkebap
          </a>
        </div>
      </div>
    </>
  )
}
