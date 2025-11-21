'use client'

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Diseño Gráfico
            <br />
            <span className="text-primary">Extraordinario</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Transformo ideas en diseños visuales impactantes que comunican, inspiran y generan resultados.
          </p>
          <button
            onClick={() => setActiveSection('portfolio')}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Ver mi trabajo
          </button>
        </div>
        
        <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/professional-graphic-designer-portfolio-hero-image.jpg"
            alt="Hero graphic design showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
