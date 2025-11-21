'use client'

export default function Header({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-primary">Studio</span>
          <span className="text-foreground"> Design</span>
        </div>
        
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary pb-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
