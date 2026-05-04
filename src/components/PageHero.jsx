export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="pt-40 pb-20 bg-cream text-center relative overflow-hidden">
      {/* Subtle gold gradient top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <div className="gold-line mb-6" />
        <h1 className="display-lg text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-5 font-sans text-base text-charcoal/50 font-light leading-relaxed max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
