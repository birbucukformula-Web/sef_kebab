import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, ArrowRight, Star, Users, Flame, Leaf, ChevronRight } from 'lucide-react'
import QRModal from '../components/QRModal'
import mekanImg from '../assets/images/mekan.jpg';
import playgroundImg from '../assets/images/playground.jpg';
import kebapImg from '../assets/images/insta_gorsel/insta_kebap.jpg';
import kebapImg2 from '../assets/images/insta_gorsel/insta_kebap2.jpg';
import lokumImg from '../assets/images/insta_gorsel/insta_lokumkebap.jpg';
import tavukImg from '../assets/images/insta_gorsel/insta_tavuksis.jpg';
import kusbasiImg from '../assets/images/insta_gorsel/insta_kusbasi.jpg';
import patlicanImg from '../assets/images/insta_gorsel/insta_patlicankebabi.jpg';


const highlights = [
  { icon: Flame,  label: 'Odun Ateşinde',    sub: 'Geleneksel pişirme' },
  { icon: Leaf,   label: 'Günlük Taze',       sub: 'Her sabah tedarik'  },
  { icon: Users,  label: 'Aile Ortamı',       sub: 'Playground alanı'   },
  { icon: Star,   label: '4.9 Puan',          sub: 'Google yorumları'   },
]

const menuTeaser = [
  { img: kebapImg,    name: 'Adana Kebap',    desc: 'İmza lezzetimiz' },
  { img: lokumImg,   name: 'Lokum Kebap',    desc: '180gr, özel kesim' },
  { img: tavukImg,    name: 'Tavuk Şiş',      desc: 'Izgara, taze marine' },
  { img: kusbasiImg,  name: 'Kuzu Kuşbaşı',   desc: 'Yumuşacık kuzu eti' },
  { img: patlicanImg, name: 'Patlıcan Kebap', desc: 'Zırh kıyması & patlıcan' },
  { img: kebapImg2,   name: 'Şefin Özel',     desc: 'Günlük taze lezzet' },
]

export default function Home() {
  const [qrOpen, setQrOpen] = useState(false)
  const instaPhotos = [kebapImg, mekanImg, lokumImg, tavukImg, kebapImg2, patlicanImg];

  return (
    <>
      {qrOpen && <QRModal onClose={() => setQrOpen(false)} />}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">

        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Soft warm radial — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 100%, #F5EFE3 0%, transparent 65%)' }}
        />

        {/* Gold accent line — left edge */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <p className="eyebrow text-gold mb-6">Adana · Seyhan</p>

            <div className="w-10 h-px bg-gold mb-8" />

            <h1 className="font-display font-light text-charcoal leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              Adana'nın<br />
              <em className="text-gold not-italic">Gerçek</em><br />
              Lezzeti
            </h1>

            <p className="font-sans text-charcoal/55 text-base leading-relaxed mb-10 max-w-md">
              Kömür ateşinin dumanı, özel baharat karışımı ve samimi Adana
              misafirperverliği. Her tabak bir ustalık hikayesi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-gold">
                Menüyü İncele
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => setQrOpen(true)}
                className="inline-flex items-center gap-2 border border-charcoal/25 text-charcoal/65 hover:border-gold hover:text-gold font-accent font-semibold text-sm tracking-wider px-7 py-3.5 rounded-sm transition-all duration-300"
              >
                <QrCode size={15} />
                QR Menü Tara
              </button>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-white border border-gold/20 rounded-sm p-6 hover:border-gold/50 hover:shadow-gold-sm transition-all duration-300 group shadow-soft"
              >
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold transition-colors bg-gold/5">
                  <Icon size={17} className="text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <p className="font-accent font-semibold text-sm text-charcoal mb-1">{label}</p>
                <p className="font-sans text-xs text-charcoal/40">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>



      {/* ── PLAYGROUND / FAMILY ── */}
      <section className="section bg-cream-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual block */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gold/20">
<img 
src={playgroundImg}
  alt="Playground" 
  className="w-full h-full object-cover"
/>
</div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-charcoal-dark px-5 py-3 rounded-sm shadow-gold">
                <p className="font-accent font-bold text-sm">Aile Dostu</p>
                <p className="font-sans text-xs text-charcoal/60">Çocuk oyun alanı</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-5">Aileler İçin</p>
              <div className="gold-line-left mb-6" />
              <h2 className="display-sm mb-6">
                Çocuklar Oynar,<br />
                <em className="italic text-gold">Aileler Keyif Yapar</em>
              </h2>
              <p className="font-sans text-charcoal/55 leading-relaxed mb-6">
                Özel tasarlanmış playground alanımızda çocuklar güvenle oynarken
                siz de masanızda Adana'nın en lezzetli kebaplarının tadını çıkarın.
              </p>
              <p className="font-sans text-charcoal/55 leading-relaxed mb-8">
                Geniş masa düzeni, aile boyu porsiyonlar ve sıcak atmosferiyle
                Şef Kebap, Adana'nın en sevilen aile restoranlarından biri.
              </p>
              <Link to="/iletisim" className="btn-outline-charcoal">
                Rezervasyon Yap
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QR CTA ── */}
      <section className="py-20 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="eyebrow text-gold/60 mb-5">Dijital Menü</p>
          <div className="gold-line mb-7" />
          <h2 className="font-display text-4xl font-light text-cream mb-5">
            Menüye Hızlı Erişim
          </h2>
          <p className="font-sans text-cream/45 text-sm leading-relaxed mb-10">
            QR kodu okutun ya da butona tıklayın, tüm kategoriler ve ürünler anında karşınızda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setQrOpen(true)} className="btn-gold">
              <QrCode size={15} />
              QR Kodu Görüntüle
            </button>
            <Link to="/menu" className="btn-outline-white border-cream/30 text-cream/70 hover:bg-cream/10 hover:border-cream/50 inline-flex items-center gap-2 font-accent font-semibold text-sm tracking-wider px-7 py-3.5 rounded-sm transition-all duration-300">
              Menüye Git
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

{/* ── INSTAGRAM ── */}
<section className="section bg-cream">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <p className="eyebrow mb-5">Sosyal Medya</p>
    <div className="gold-line mb-6" />
    <h2 className="display-sm mb-4">Instagram'da Bizi Takip Edin</h2>
    <p className="font-sans text-charcoal/50 text-sm mb-8">
      @sefkebap · 40.000+ takipçi
    </p>

    {/* Instagram Grid - Tek Tek Manuel Yazım */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
      
      {/* 1. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={kebapImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kebap" />
      </div>

      {/* 2. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={mekanImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Mekan" />
      </div>

      {/* 3. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={kebapImg2} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kebap 1" />
      </div>

      {/* 4. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={tavukImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tavuk" />
      </div>

      {/* 5. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={lokumImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kebap 2" />
      </div>

      {/* 6. Resim */}
      <div className="aspect-square bg-white border border-gold/15 rounded-sm overflow-hidden relative group">
        <img src={patlicanImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Patlıcan Kebap" />
      </div>

    </div>

    <a
      href="https://www.instagram.com/sefkebap/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline-charcoal"
    >
      Instagram'ı Ziyaret Et
      <ArrowRight size={14} />
    </a>
  </div>
</section>

{/* ── YORUMLAR ── */}
<section className="section bg-cream-warm border-t border-gold/10">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="eyebrow mb-4">Müşteri Görüşleri</p>
      <div className="gold-line mb-5" />
      <h2 className="display-sm">Sizin Görüşleriniz Bizim İçin Değerli</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Yorum 1 */}
      <div className="bg-white rounded-sm border border-gold/15 p-7 shadow-soft hover:border-gold/35 hover:shadow-gold-sm transition-all duration-300 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center flex-shrink-0">
            <span className="font-accent font-bold text-sm text-white">S</span>
          </div>
          <div>
            <p className="font-accent font-semibold text-sm text-charcoal">Sibel Bahar</p>
            <p className="font-sans text-xs text-charcoal/40">4 yorum · Google</p>
          </div>

        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed flex-1">
          "Kalabalık ailelerin, sık misafirleri olanların, lezzetli ve bol salatalı, 
          fiyat performans açısından süper bir kebap yemek isteyenlerin kesinlikle 
          gelmesi gereken kebapçı burası."
        </p>
      </div>

      {/* Yorum 2 */}
      <div className="bg-white rounded-sm border border-gold/15 p-7 shadow-soft hover:border-gold/35 hover:shadow-gold-sm transition-all duration-300 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-orange-100 flex items-center justify-center">
            <span className="font-accent font-bold text-sm text-orange-500">D</span>
          </div>
          <div>
            <p className="font-accent font-semibold text-sm text-charcoal">Dilara Unsal</p>
            <p className="font-sans text-xs text-charcoal/40">Yerel Rehber · 35 yorum · Google</p>
          </div>

        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed flex-1">
          "New York'dan kalkıp Şef Kebap için yollara düştüm. Çok memnun kaldım. 
          Yemekler müthiş lezzetli. Çalışanların hepsi çok ilgili ve güler yüzlüler. 
          Ben 10 yıldız olsa 10 yıldız vereceğim o derece. Muhakkak gidilmesi gereken bir yer."
        </p>
      </div>

      {/* Yorum 3 */}
      <div className="bg-white rounded-sm border border-gold/15 p-7 shadow-soft hover:border-gold/35 hover:shadow-gold-sm transition-all duration-300 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
            <span className="font-accent font-bold text-sm text-white">C</span>
          </div>
          <div>
            <p className="font-accent font-semibold text-sm text-charcoal">C Yuksel</p>
            <p className="font-sans text-xs text-charcoal/40">Yerel Rehber · 65 yorum · Google</p>
          </div>

        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed flex-1">
          "Ankara'ya giderken yemek yemek için yorumlara dayanarak geldik. İyi ki gelmişiz. 
          Onlarca lezzetli mezeye ek olarak bir de acı biber sorduk, yok demediler. 
          Şiddetle tavsiye edilir."
        </p>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
