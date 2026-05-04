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

            <div className="relative order-2 lg:order-1">

              <div className="aspect-[4/5] bg-gradient-to-br from-gold/12 via-gold/6 to-transparent rounded-sm border border-gold/20 flex items-center justify-center">

                <div className="text-center px-8">

                  <p className="font-display text-2xl font-light text-charcoal/30 italic">

                <img

                src={mekan}

                alt="Şef Kebap Mekan"

                className="w-full h-auto rounded-sm shadow-soft" />

                  </p>

                </div>

              </div>

              {/* Stats overlay */}

              <div className="absolute -bottom-6 -right-6 bg-charcoal-dark text-cream p-6 rounded-sm shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  {[['500+','Günlük Müşteri'],['4.9','Google Puan'],['40+','Menü Çeşidi'],['100%','Taze Malzeme']].map(([n,l]) => (

                    <div key={l} className="text-center">

                      <p className="font-display text-2xl font-light text-gold">{n}</p>

                      <p className="font-sans text-[10px] text-cream/40 tracking-wider uppercase mt-0.5">{l}</p>

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



      {/* Team */}

      <section className="section bg-cream border-t border-gold/10">

        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="eyebrow mb-5">Ekibimiz</p>

            <div className="gold-line mb-6" />

            <h2 className="display-sm">Lezzetin <em className="italic text-gold">Mimarları</em></h2>

          </div>

          <div className="grid sm:grid-cols-3 gap-8">

            {team.map(m => (

              <div key={m.name} className="card-soft overflow-hidden group">

                <div className="h-40 bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center text-5xl border-b border-gold/10">

                  {m.emoji}

                </div>

                <div className="p-6">

                  <p className="eyebrow text-[10px] mb-2">{m.role}</p>

                  <h4 className="font-display text-xl font-light text-charcoal mb-2">{m.name}</h4>

                  <p className="font-sans text-xs text-charcoal/50 leading-relaxed">{m.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  )

}