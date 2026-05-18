import { Link } from 'react-router-dom'

import { ArrowRight } from 'lucide-react'

import PageHero from '../components/PageHero'

import mekan from '../assets/images/mekan.jpg'



const values = [

  { emoji: '🔥', title: 'Odun Ateşinde',    desc: 'Her kebap geleneksel kömür mangalında pişirilir. Duman lezzeti tarifiyle bütünleşir.' },

  { emoji: '🌿', title: 'Günlük Taze',       desc: 'Tüm malzemeler her sabah taze tedarik edilir. Donmuş ürün kullanmayız.' },

  { emoji: '👨‍👩‍👧', title: 'Aile Ortamı',    desc: 'Playground alanımızla çocuklar güvende, aileler keyifle vakit geçirir.' },

  { emoji: '🤝', title: 'Samimi Hizmet',     desc: 'Her misafir aile gibi karşılanır. Sıcak Adana misafirperverliği şiarımızdır.' },

]



const team = [

  { emoji: '👨‍🍳', name: 'Mehmet Usta',   role: 'Kurucu & Baş Kebapçı',  desc: '25 yıllık deneyimiyle kebabın gerçek ustası.' },

  { emoji: '👩‍🍳', name: 'Ayşe Hanım',    role: 'Meze & İkramlar',        desc: 'Günlük taze ikramların ve mezelerin mimarı.' },

  { emoji: '🧑‍🍳', name: 'Emre',          role: 'Izgara Ustası',          desc: 'Kömür ateşini en iyi yöneten genç ustalık.' },

]



export default function About() {

  return (

    <div>

      <PageHero

        eyebrow="Biz Kimiz"

        title="Şef Kebap Hikâyesi"

        subtitle="Adana'nın kalbinde, geleneksel lezzetleri modern bir dokunuşla sunan özgün bir kebap durağı."

      />



      {/* Story */}

      <section className="section bg-cream">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Visual */}

            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden shadow-lg border border-[#C8511A]/20">
                <img
                  src={mekan}
                  alt="Şef Kebap Mekan"
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white text-[#1C1C1C] p-6 rounded-[12px] shadow-2xl border border-[#C8511A]/10">
                <div className="grid grid-cols-2 gap-6">
                  {[['500+','Günlük Müşteri'],['4.9','Google Puan'],['40+','Menü Çeşidi'],['100%','Taze Malzeme']].map(([n,l]) => (
                    <div key={l} className="text-center">
                      <p className="font-display text-2xl font-bold text-[#C8511A]">{n}</p>
                      <p className="font-sans text-[10px] text-[#1C1C1C]/60 tracking-wider uppercase mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            {/* Text */}

            <div className="order-1 lg:order-2">

              <p className="eyebrow mb-5">Hikâyemiz</p>

              <div className="gold-line-left mb-7" />

              <h2 className="display-sm mb-7">

                Adana'nın <em className="italic text-gold">Ateşli</em> Lezzeti

              </h2>

              <div className="space-y-4 font-sans text-charcoal/60 leading-relaxed text-[15px]">

                <p>

                  Şef Kebap, Seyhan'ın Yenibaraj Mahallesinde kurulmuş, taze malzeme

                  ve geleneksel pişirme yöntemiyle Adana kebabının gerçek lezzetini

                  sunan bir kebap evidir.

                </p>

                <p>

                  Kömür ateşinin dumanı, özel baharat karışımı ve samimi Adana

                  misafirperverliğini bir araya getirerek her tabağı bir deneyime

                  dönüştürüyoruz.

                </p>

                <p>

                  Kapımızdan giren herkes bize misafir değil, aile gibi değerlidir.

                  Özel oyun alanımızla çocuklar güvende, aileler keyifle vakit geçirir.

                </p>

              </div>

              <div className="mt-10 flex gap-4 flex-wrap">

                <Link to="/menu" className="btn-gold">

                  Menüyü Gör

                  <ArrowRight size={14} />

                </Link>

                <Link to="/iletisim" className="btn-outline-charcoal">

                  İletişim

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Values */}

      <section className="section bg-cream-warm border-t border-gold/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="eyebrow mb-5">Değerlerimiz</p>

            <div className="gold-line mb-6" />

            <h2 className="display-sm">Bizi <em className="italic text-gold">Biz</em> Yapan</h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map(v => (

              <div key={v.title} className="card-soft p-8 text-center group">

                <div className="text-4xl mb-5">{v.emoji}</div>

                <h3 className="font-accent font-semibold text-sm text-charcoal mb-3 tracking-wide">{v.title}</h3>

                <p className="font-sans text-xs text-charcoal/50 leading-relaxed">{v.desc}</p>

              </div>

            ))}

          </div>

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

    </div>

  )

}