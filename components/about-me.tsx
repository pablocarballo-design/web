'use client'

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h2 className="text-3xl font-bold text-foreground">Sobre mí</h2>
            </div>
            <nav className="space-y-3">
              <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Experiencia
              </p>
              <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Habilidades
              </p>
              <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Educación
              </p>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Mi Historia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Soy un diseñador gráfico apasionado con más de 8 años de experiencia transformando ideas en soluciones visuales impactantes. Mi viaje comenzó con una profunda fascinación por cómo la comunicación visual puede cambiar percepciones y conectar con las personas a un nivel emocional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Enfoque Profesional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Especializándome en branding, diseño editorial y comunicación digital, combino estrategia creativa con ejecución impecable. Creo que cada proyecto es una oportunidad para crear algo memorable que no solo sea hermoso, sino que también sea funcional y propósitivo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Habilidades Clave</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Branding & Identidad Visual',
                  'Diseño Editorial',
                  'Packaging Design',
                  'Ilustración Digital',
                  'Diseño Web y UI/UX',
                  'Diseño Publicitario',
                  'Motion Graphics',
                  'Fotografía Artística',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Herramientas & Tecnologías</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Adobe Creative Suite',
                  'Figma',
                  'Adobe XD',
                  'InDesign',
                  'Photoshop',
                  'Illustrator',
                  'Blender',
                  'After Effects',
                  'Cinema 4D',
                ].map((tool) => (
                  <div
                    key={tool}
                    className="border border-border rounded-lg px-3 py-2 text-sm text-muted-foreground text-center"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
