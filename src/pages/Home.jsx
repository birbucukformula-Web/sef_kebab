import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Flame, Leaf, ChevronRight } from 'lucide-react'
import mekanImg from '../assets/images/mekan.jpg';
import playgroundImg from '../assets/images/playground.jpg';
import kebapImg from '../assets/images/insta_gorsel/insta_kebap.jpg';
import kebapImg2 from '../assets/images/insta_gorsel/insta_kebap2.jpg';
import lokumImg from '../assets/images/insta_gorsel/insta_lokumkebap.jpg';
import lokum2Img from '../assets/images/insta_gorsel/insta_lokum2.jpg';
import kusbasiImg from '../assets/images/insta_gorsel/insta_kusbasi.jpg';
import patlicanImg from '../assets/images/insta_gorsel/insta_patlicankebabi.jpg';


import girisGorselImg from '../assets/images/giris_gorsel.png';



export default function Home() {
  const instaPhotos = [kebapImg, mekanImg, lokumImg, lokum2Img, kebapImg2, patlicanImg];

  return (
    <>

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
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative rounded-[16px] overflow-hidden shadow-gold-lg border border-[#C8511A]/10 group">
            <div className="absolute inset-0 bg-[#C8511A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img 
              src={girisGorselImg} 
              alt="Şef Kebap" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
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
              <div className="absolute -bottom-5 -right-5 bg-white px-6 py-4 rounded-[12px] shadow-xl border border-[#C8511A]/10">
                <p className="font-accent font-bold text-[15px] text-[#1C1C1C]">Aile Dostu</p>
                <p className="font-sans text-xs text-[#1C1C1C]/60 mt-0.5">Çocuk oyun alanı</p>
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
        <img src={lokum2Img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Lokum Kebap" />
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




    </>
  )
}
