import { useState } from 'react'
import { X, Instagram } from 'lucide-react'
import PageHero from '../components/PageHero'

const items = [
  { id:1,  emoji:'🔥', label:'Adana Kebap',        cat:'yemek', span:'col-span-1 row-span-2' },
  { id:2,  emoji:'🥩', label:'Lokum Kebap',         cat:'yemek', span:'' },
  { id:3,  emoji:'🫙', label:'Ali Nazik',           cat:'yemek', span:'' },
  { id:4,  emoji:'🌯', label:'Adana Dürüm',         cat:'yemek', span:'col-span-2' },
  { id:5,  emoji:'🧆', label:'İkramlar',            cat:'yemek', span:'' },
  { id:6,  emoji:'🍗', label:'Tavuk Kelebek',       cat:'yemek', span:'' },
  { id:7,  emoji:'✨', label:'Restoranımız',        cat:'mekan', span:'col-span-1 row-span-2' },
  { id:8,  emoji:'🎪', label:'Playground Alanı',   cat:'mekan', span:'' },
  { id:9,  emoji:'🍮', label:'Tatlılar',            cat:'tatli', span:'' },
]

const filters = [
  { key:'hepsi', label:'Tümü'    },
  { key:'yemek', label:'Yemekler'},
  { key:'mekan', label:'Mekan'   },
  { key:'tatli', label:'Tatlılar'},
]

export default function Gallery() {
  const [filter, setFilter] = useState('hepsi')
  const [lb, setLb]         = useState(null)

  const shown = filter === 'hepsi' ? items : items.filter(i => i.cat === filter)

  return (
    <div>
      <PageHero
        eyebrow="Fotoğraflar"
        title="Galeri"
        subtitle="Restoranımızdan ve lezzetlerimizden kareler."
      />

      <section className="section bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-6 py-2 rounded-full font-accent text-xs font-semibold tracking-wider transition-all duration-250 ${
                  filter === f.key
                    ? 'bg-gold text-charcoal-dark shadow-gold-sm'
                    : 'border border-gold/30 text-charcoal/55 hover:border-gold hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-3 auto-rows-[200px]">
            {shown.map(item => (
              <div
                key={item.id}
                className={`${item.span} relative rounded-sm overflow-hidden cursor-pointer group bg-gradient-to-br from-gold/10 to-gold/4 border border-gold/15 hover:border-gold/35 transition-all duration-300`}
                onClick={() => setLb(item)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">
                    {item.emoji}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-display text-lg text-cream font-light">{item.label}</p>
                    <div className="w-6 h-px bg-gold/60 mx-auto mt-2" />
                  </div>
                </div>
                {/* Label bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-accent text-xs text-cream/80 tracking-wider">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-20 text-center py-12 border border-gold/20 rounded-sm bg-cream-warm">
            <p className="eyebrow mb-4">Daha Fazlası İçin</p>
            <div className="gold-line mb-5" />
            <h3 className="font-display text-2xl font-light text-charcoal mb-3">
              Instagram'da <em className="italic text-gold">@sefkebap</em>
            </h3>
            <p className="font-sans text-sm text-charcoal/45 mb-7">40.000+ takipçi · Her gün yeni içerik</p>
            <a
              href="https://www.instagram.com/sefkebap/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <Instagram size={15} />
              Instagram'ı Ziyaret Et
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lb && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLb(null)}
        >
          <div
            className="bg-cream-card rounded-sm p-10 max-w-sm w-full text-center animate-fade-up relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLb(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-gold transition-colors"
            >
              <X size={16} />
            </button>
            <div className="text-7xl mb-6">{lb.emoji}</div>
            <div className="gold-line mb-4" />
            <h3 className="font-display text-xl font-light text-charcoal">{lb.label}</h3>
          </div>
        </div>
      )}
    </div>
  )
}
