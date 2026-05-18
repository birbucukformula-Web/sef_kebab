import { MapPin, Clock, Instagram, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="İletişim"
        subtitle="Rezervasyon, sorularınız veya önerileriniz için buradayız."
      />

      <section className="section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 items-stretch">

            {/* Sol: Bilgiler + Çalışma Saatleri */}
            <div className="flex flex-col">

              {/* İletişim Bilgileri */}
              <div className="flex flex-col flex-1">
                <p className="eyebrow mb-4">Bize Ulaşın</p>
                <div className="gold-line-left mb-7" />
                <div className="flex flex-col gap-4 flex-1 justify-between">

                  {/* Adres */}
                  <a
                    href="https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 card-soft p-6 hover:border-gold/35 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                      <MapPin size={17} className="text-gold/55 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="eyebrow text-[10px] mb-1 text-gold/70">Adres</p>
                      <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                        Yenibaraj Mahallesi, Seyhan / Adana
                      </p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sefkebap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 card-soft p-6 hover:border-gold/35 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                      <Instagram size={17} className="text-gold/55 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="eyebrow text-[10px] mb-1 text-gold/70">Instagram</p>
                      <p className="font-sans text-sm text-charcoal/70">@sefkebap</p>
                    </div>
                  </a>

                  {/* Mail */}
                  <a
                    href="mailto:info@sefkebap.com.tr"
                    className="group flex items-start gap-4 card-soft p-6 hover:border-gold/35 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                      <Mail size={17} className="text-gold/55 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="eyebrow text-[10px] mb-1 text-gold/70">E-posta</p>
                      <p className="font-sans text-sm text-charcoal/70">info@sefkebap.com.tr</p>
                    </div>
                  </a>

                  {/* Çalışma Saatleri */}
                  <div className="group flex items-start gap-4 card-soft p-6">
                    <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0">
                      <Clock size={17} className="text-gold/55" />
                    </div>
                    <div className="flex-1">
                      <p className="eyebrow text-[10px] mb-3 text-gold/70">Çalışma Saatleri</p>
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-sm text-charcoal/55">Her gün</span>
                        <span className="font-accent font-semibold text-sm text-charcoal">09:00 – 00:00</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Sağ: Harita */}
            <div className="rounded-sm overflow-hidden border border-gold/20 shadow-soft flex flex-col">
              <iframe
                title="Şef Kebap Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.4885366023686!2d35.315734500000005!3d37.0219964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f687ba89127%3A0xe272428027d0ecfd!2s%C5%9Eef%20Kebap!5e0!3m2!1str!2str!4v1779125803082!5m2!1str!2str"
                width="100%"
                height="100%"
                className="flex-1 min-h-[320px]"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-cream-warm px-6 py-4 border-t border-gold/15 flex items-center justify-between">
                <div>
                  <p className="font-accent font-semibold text-xs text-charcoal mb-0.5">Şef Kebap</p>
                  <p className="font-sans text-xs text-charcoal/50">Yenibaraj, Seyhan / Adana</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/fSSZjn7tpNkbWR8V9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-charcoal py-2 px-4 text-xs"
                >
                  Yol Tarifi
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
