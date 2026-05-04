import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

/* Decorative QR pattern */
const QR = [
  [1,1,1,0,1,0,1,1,1],
  [1,0,1,0,0,0,1,0,1],
  [1,1,1,0,1,0,1,1,1],
  [0,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,0,1],
  [0,1,0,0,1,0,0,1,0],
  [1,1,1,0,1,0,1,1,1],
  [1,0,1,0,0,0,1,0,1],
  [1,1,1,0,1,0,1,1,1],
]

export default function QRModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', esc)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="bg-cream-card rounded-sm shadow-2xl max-w-sm w-full p-10 relative animate-fade-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-gold transition-colors rounded-full hover:bg-gold/10"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="eyebrow mb-3">Dijital Menü</p>
          <div className="gold-line mb-4" />
          <h2 className="font-display text-2xl font-light text-charcoal">QR Menü</h2>
        </div>

        {/* QR Code visual */}
        <div className="flex justify-center mb-6">
          <div className="p-4 border border-gold/20 rounded-sm bg-white inline-block shadow-gold-sm">
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(9, 1fr)`, width: 180 }}>
              {QR.flat().map((cell, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[1px] ${cell ? 'bg-charcoal' : 'bg-transparent'}`}
                />
              ))}
            </div>
            {/* Logo center overlay */}
            <div className="flex justify-center -mt-[calc(180px/2+4px)] mb-[calc(180px/2-4px)] relative z-10 pointer-events-none">
              <div className="bg-white w-9 h-9 flex items-center justify-center border border-gold/20 rounded-sm shadow-sm">
                <span className="font-display text-xs text-gold font-light tracking-wider">ŞK</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-sans text-sm text-charcoal/50 leading-relaxed mb-8">
          Kameranızı QR koda tutun veya aşağıdan dijital menüyü açın.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/menu" onClick={onClose} className="btn-gold justify-center text-xs">
            <ExternalLink size={13} />
            Dijital Menüyü Aç
          </Link>
          <button onClick={onClose} className="btn-outline-charcoal justify-center text-xs">
            Kapat
          </button>
        </div>
      </div>
    </div>
  )
}
