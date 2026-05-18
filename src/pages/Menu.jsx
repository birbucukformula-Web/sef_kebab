import { useState, useRef, useEffect } from 'react'
import PageHero from '../components/PageHero'
import { ImageIcon } from 'lucide-react'

import adanaMenuImg from '../assets/images/menu/adana-kebap.png';
import alinazikMenuImg from '../assets/images/menu/alinazik-kebap.png';
import cigerMenuImg from '../assets/images/menu/ciger-sis.png';
import kanatMenuImg from '../assets/images/menu/kanat.png';
import patlicanMenuImg from '../assets/images/menu/patlican-kebap.png';
import tavukSisMenuImg from '../assets/images/menu/tavuk-sis.png';

/* ═══════════════════════════════════════════════════════
   FoodImage — görsel alanı
   ▸ src prop varsa gerçek fotoğrafı gösterir
   ▸ yoksa şık placeholder gösterir
   ▸ Gerçek fotoğraf eklemek için:
       src="/images/adana-kebap.jpg"  →  public/images/ klasörüne koy
       veya
       import adanaImg from '../assets/images/adana.jpg'
       src={adanaImg}
═══════════════════════════════════════════════════════ */
function FoodImage({ src, alt, aspect = 'aspect-[4/3]' }) {
  const [err, setErr] = useState(false)

  if (src && !err) {
    return (
      <div className={`${aspect} overflow-hidden bg-cream-warm`}>
        <img
          src={src}
          alt={alt}
          onError={() => setErr(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )
  }

  // Placeholder
  return (
    <div
      className={`${aspect} relative overflow-hidden flex flex-col items-center justify-center gap-2
                  bg-gradient-to-br from-gold/10 via-cream-warm to-cream border-b border-gold/12`}
    >
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* label */}
      <span className="relative z-10 flex items-center gap-1 font-accent text-[9px] tracking-[2px] uppercase text-gold/35">
        <ImageIcon size={9} />
        Fotoğraf Eklenecek
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   DATA
   src: null  →  placeholder gösterir
   src: '/images/adana.jpg'  →  gerçek fotoğraf gösterir
═══════════════════════════════════════════════════════ */

const popularItems = [
  { name: 'Adana Kebap',      desc: 'İmza lezzetimiz, özel baharat karışımı', src: adanaMenuImg },
  { name: 'Ali Nazik Kebap',  desc: 'Patlıcan püresi ve yoğurtla efsaneleşen lezzet', src: alinazikMenuImg },
  { name: 'Ciğer Şiş',        desc: 'Özel baharatlarla marine edilmiş ciğer', src: cigerMenuImg },
  { name: 'Tavuk Kanat',      desc: 'Odun ateşinde nar gibi kızarmış kanat', src: kanatMenuImg },
  { name: 'Patlıcan Kebap',   desc: 'Közlenmiş patlıcanın et ile muhteşem uyumu', src: patlicanMenuImg },
  { name: 'Tavuk Şiş',        desc: 'Özel marinasyonla hazırlanmış lokum tavuk', src: tavukSisMenuImg },
]

const izgaralar = [
  { name: 'Ali Nazik',             note: '1,5 porsiyon',              src: null },
  { name: 'Külbastı',              note: '1,5 porsiyon',              src: null },
  { name: 'Lokum Kebap',           note: '180 gr',                    src: null },
  { name: 'Ciğer',                 note: null,                        src: cigerMenuImg },
  { name: 'Tavuk Kelebek',         note: null,                        src: null },
  { name: 'Tavuk Kanat',           note: null,                        src: kanatMenuImg },
  { name: 'İkiyüzlü Adana Kebap',  note: '1,5 porsiyon',             src: null },
  { name: 'Sıcak Ezme Üstü Kebap', note: '1,5 porsiyon',             src: null },
  { name: 'Kuzu Kaburga',          note: null,                        src: null },
  { name: 'Kazbaşı',               note: '1,5 porsiyon',             src: null },
  { name: 'Kuşbaşı',               note: '1,5 porsiyon',             src: null },
  { name: 'Patlıcan Kebap',        note: '1,5 porsiyon',             src: null },
  { name: 'Beyti',                  note: '1,5 porsiyon',             src: null },
  { name: 'Tavuk Şiş',             note: null,                        src: tavukSisMenuImg },
  { name: 'Kemikli Tavuk Şiş',     note: null,                        src: null },
  { name: 'Adana Kebap',           note: null,                        src: null },
  { name: 'Karışık Kebap',         note: '8 porsiyon',               src: null },
]

const durumlar = [
  { name: 'Adana Dürüm', desc: 'Adana kebap, el yapımı lavaş', src: null },
  { name: 'Tavuk Dürüm', desc: 'Izgara tavuk, taze sebze',     src: null },
]

const ikramlar = [
  { name: 'Salata',           desc: 'Mevsim yeşillikleri',     src: null },
  { name: 'Soğan Salatası',   desc: 'Pul biberli',             src: null },
  { name: 'Acılı Ezme',       desc: 'Ev yapımı',               src: null },
  { name: 'Haydari',          desc: 'Süzme yoğurt, sarımsak',  src: null },
  { name: 'Humus',            desc: 'Geleneksel tarif',        src: null },
  { name: 'Patlıcan Ezmesi',  desc: 'Közlenmiş patlıcan',      src: null },
  { name: 'Mantar Sote',      desc: 'Tereyağlı sote mantar',   src: null },
  { name: 'Közlenmiş Biber',  desc: 'Fırında közlenmiş',       src: null },
  { name: 'Limon',            desc: 'Taze dilim',              src: null },
]

const icecekler = [
  { category: 'Gazlı İçecekler', items: [
    { name: 'Coca-Cola',        src: null },
    { name: 'Coca-Cola Zero',   src: null },
    { name: 'Coca-Cola Şişe',   src: null },
    { name: 'Fanta',            src: null },
    { name: 'Sprite',           src: null },
    { name: 'Beypazarı Soda',   src: null },
  ]},
  { category: 'Meyve Suları', items: [
    { name: 'Fusetea Şeftali',  src: null },
    { name: 'Fusetea Limonlu',  src: null },
    { name: 'Cappy Kayısı',     src: null },
    { name: 'Cappy Vişne',      src: null },
    { name: 'Cappy Şeftali',    src: null },
  ]},
  { category: 'Diğer', items: [
    { name: 'Erikli Su',            src: null },
    { name: 'Sütaş Ayran',         src: null },
    { name: 'Açık Ayran',          src: null },
    { name: 'Serafresh Şalgam',    src: null },
  ]},
]

const sections = [
  { id: 'populer',   label: 'Popüler'   },
  { id: 'izgaralar', label: 'Izgaralar' },
  { id: 'durumlar',  label: 'Dürümler'  },
  { id: 'ikramlar',  label: 'İkramlar'  },
  { id: 'icecekler', label: 'İçecekler' },
]

/* ── Reusable section header ── */
function SectionHead({ title, count }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <h2 className="font-display text-3xl font-light text-charcoal">{title}</h2>
      {count && (
        <span className="font-sans text-xs text-charcoal/35 bg-gold/10 px-2.5 py-0.5 rounded-full">
          {count} çeşit
        </span>
      )}
      <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */
export default function Menu() {
  const [active, setActive] = useState('populer')
  const refs  = useRef({})
  const navEl = useRef(null)

  const scrollTo = (id) => {
    setActive(id)
    const el = refs.current[id]
    if (!el) return
    const offset = 72 + 54
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const fn = () => {
      const offset = 72 + 54 + 40
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = refs.current[sections[i].id]
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const btn = navEl.current?.querySelector('button[data-active="true"]')
    btn?.scrollIntoView({ inline: 'nearest', behavior: 'smooth', block: 'nearest' })
  }, [active])

  return (
    <div>
      <PageHero
        eyebrow="Mutfağımızdan"
        title="Menümüz"
        subtitle="Geleneksel Adana lezzetleri, taze malzeme ve özenli hazırlık."
      />

      {/* ── Sticky Tab Nav ── */}
      <div className="sticky top-[100px] z-40 bg-cream/95 backdrop-blur-sm border-b border-gold/20 shadow-soft">
        <div
          ref={navEl}
          className="max-w-5xl mx-auto px-6 flex gap-1 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {sections.map(s => (
            <button
              key={s.id}
              data-active={active === s.id}
              onClick={() => scrollTo(s.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-accent text-xs font-semibold tracking-wider transition-all duration-250 ${
                active === s.id
                  ? 'bg-gold text-charcoal-dark shadow-gold-sm'
                  : 'text-charcoal/55 hover:text-gold hover:bg-gold/8'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">

        {/* ══════════════════════════════
            POPULAR — 2×3 kart
        ══════════════════════════════ */}
        <section ref={el => refs.current['populer'] = el} className="pt-16 pb-4">
          <SectionHead title="Popüler Lezzetler" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {popularItems.map(item => (
              <div key={item.name} className="card-soft overflow-hidden group cursor-default">
                {/* GÖRSEL ALANI */}
                <FoodImage
                  src={item.src}
                  alt={item.name}
                  aspect="aspect-[4/3]"
                />
                {/* İçerik */}
                <div className="p-4">
                  <p className="font-accent font-semibold text-sm text-charcoal mb-1">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-charcoal/45 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gold/10">
                    <span className="font-accent text-[9px] tracking-[2px] text-gold/60 uppercase">
                      Popüler
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            IZGARALAR — 4'lü grid, kare görsel
        ══════════════════════════════ */}
        <section ref={el => refs.current['izgaralar'] = el} className="pt-16 pb-4">
          <SectionHead title="Izgaralar" count={izgaralar.length} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {izgaralar.map((item, i) => (
              <div key={item.name + i} className="card-soft overflow-hidden group cursor-default flex items-center p-4">
                <div>
                  <p className="font-accent font-semibold text-[15px] text-charcoal leading-snug mb-0.5">
                    {item.name}
                  </p>
                  {item.note && (
                    <p className="font-sans text-[11px] text-gold/80 italic">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            DÜRÜMLER — yatay geniş görsel
        ══════════════════════════════ */}
        <section ref={el => refs.current['durumlar'] = el} className="pt-16 pb-4">
          <SectionHead title="Dürüm Çeşitleri" count={durumlar.length} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {durumlar.map(item => (
              <div key={item.name} className="card-soft overflow-hidden group cursor-default flex items-center p-4">
                <div>
                  <p className="font-accent font-semibold text-[15px] text-charcoal mb-0.5">
                    {item.name}
                  </p>
                  <p className="font-sans text-[11px] text-charcoal/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            İKRAMLAR — kare kart, 4'lü grid
        ══════════════════════════════ */}
        <section ref={el => refs.current['ikramlar'] = el} className="pt-16 pb-4">
          <SectionHead title="İkramlar" count={ikramlar.length} />
          <p className="font-sans text-sm text-charcoal/40 -mt-4 mb-7 italic">
            Siparişlerinizle birlikte servis edilir.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ikramlar.map(item => (
              <div key={item.name} className="card-soft overflow-hidden group cursor-default flex items-center p-4">
                <div>
                  <p className="font-accent font-semibold text-[14px] text-charcoal mb-0.5">
                    {item.name}
                  </p>
                  <p className="font-sans text-[11px] text-charcoal/50">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            İÇECEKLER — küçük kart grid
        ══════════════════════════════ */}
        <section ref={el => refs.current['icecekler'] = el} className="pt-16 pb-4">
          <SectionHead title="İçecekler" />
          <div className="space-y-10">
            {icecekler.map(group => (
              <div key={group.category}>
                {/* Grup başlığı */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-accent text-xs font-semibold tracking-[3px] uppercase text-gold/70">
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-gold/15" />
                </div>
                {/* İçecek kartları */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.items.map(item => (
                    <div key={item.name} className="card-soft overflow-hidden group cursor-default flex items-center p-3">
                      <p className="font-sans text-[12px] font-medium text-charcoal/80 leading-tight">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Not ── */}
        <div className="mt-16 py-6 px-8 border border-gold/20 rounded-sm bg-gold/5 text-center">
          <p className="font-sans text-sm text-charcoal/55 leading-relaxed">
            <span className="font-semibold text-charcoal/70">📌 Not:</span>{' '}
            Alerji durumunda lütfen servis personelimizi bilgilendiriniz.
            Günlük özel menü için:{' '}
            <a href="tel:+903222260011" className="text-gold hover:underline font-semibold">
              (0322) 226 00 11
            </a>
          </p>
        </div>

        {/* ── Fotoğraf ekleme rehberi (geliştirici notu) ── */}
        {/* <details className="mt-8 border border-gold/15 rounded-sm overflow-hidden">
          <summary className="px-5 py-4 font-accent text-xs tracking-wider text-charcoal/40 cursor-pointer hover:text-gold/70 transition-colors select-none">
            📷 Fotoğraf nasıl eklenir? (Geliştirici notu)
          </summary>
          <div className="px-5 pb-5 pt-2 bg-gold/3 font-sans text-xs text-charcoal/50 leading-relaxed space-y-2 border-t border-gold/10">
            <p><strong className="text-charcoal/70">Yöntem 1 — Public klasörü:</strong></p>
            <code className="block bg-charcoal/5 px-3 py-2 rounded text-[11px] font-mono">
              public/images/adana-kebap.jpg
            </code>
            <p>Sonra data içinde: <code className="font-mono">src: '/images/adana-kebap.jpg'</code></p>
            <p className="pt-1"><strong className="text-charcoal/70">Yöntem 2 — Assets import:</strong></p>
            <code className="block bg-charcoal/5 px-3 py-2 rounded text-[11px] font-mono">
              {'import adanaImg from \'../assets/images/adana.jpg\''}
            </code>
            <p>Sonra data içinde: <code className="font-mono">src: adanaImg</code></p>
          </div>
        </details> */}
      </div>
    </div>
  )
}
