'use client'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Studio Design</h3>
            <p className="text-sm text-primary-foreground/80">
              Transformando ideas en diseños visuales impactantes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {['Inicio', 'Portfolio', 'Sobre mí', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Studio Design. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con pasión ✨</p>
        </div>
      </div>
    </footer>
  )
}
