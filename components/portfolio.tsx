'use client'

import { useState } from 'react'
import ProjectModal from './project-modal'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Identidad Visual - Startup Tech',
      category: 'Branding',
      image: '/tech-startup-logo-and-branding-design.jpg',
      description: 'Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta de colores y guía de estilo.',
      details: 'Este proyecto incluyó el diseño del logotipo, selección de tipografía, paleta de colores corporativa y la creación de una guía de estilo exhaustiva. El cliente solicitaba una identidad moderna y profesional que reflejara innovación.',
      year: '2024',
      client: 'TechStart Inc.',
    },
    {
      id: 2,
      title: 'Diseño de Packaging',
      category: 'Packaging',
      image: '/luxury-packaging-design-mockup.jpg',
      description: 'Empaque premium para línea de cosméticos orgánicos con diseño minimalista y sostenible.',
      details: 'Creación de diseño de packaging que refleja los valores ecológicos de la marca. Se utilizaron materiales reciclables y se implementó un diseño limpio y elegante que destaca en los estantes.',
      year: '2024',
      client: 'Eco Beauty Co.',
    },
    {
      id: 3,
      title: 'Campaña Digital',
      category: 'Marketing',
      image: '/digital-marketing-campaign-design-social-media.jpg',
      description: 'Campaña visual integral para redes sociales con diseño coherente y atractivo.',
      details: 'Campaña digital completa que incluye diseños para Instagram, Facebook, LinkedIn y TikTok. Cada pieza fue optimizada para la plataforma manteniendo la coherencia visual general.',
      year: '2023',
      client: 'Digital Brand Media',
    },
    {
      id: 4,
      title: 'Diseño Editorial',
      category: 'Editorial',
      image: '/magazine-editorial-design-layout-typography.jpg',
      description: 'Diseño de revista editorial con maquetación profesional y tipografía elegante.',
      details: 'Proyecto editorial que incluyó maquetación de 80 páginas, selección tipográfica estratégica, y diseño de portada impactante. El trabajo ganó reconocimiento en concursos de diseño regionales.',
      year: '2023',
      client: 'Revista Design & Trends',
    },
    {
      id: 5,
      title: 'Ilustración Comercial',
      category: 'Ilustración',
      image: '/commercial-illustration-character-design.jpg',
      description: 'Ilustraciones personalizadas para campaña publicitaria de producto infantil.',
      details: 'Set de ilustraciones originales para una campaña publicitaria enfocada en el público infantil. Los personajes fueron diseñados para ser reconocibles, atractivos y adecuados para múltiples aplicaciones.',
      year: '2023',
      client: 'Kids Entertainment Ltd.',
    },
    {
      id: 6,
      title: 'Diseño Web',
      category: 'Digital',
      image: '/website-design-interface-mockup-modern.jpg',
      description: 'Interfaz de usuario para plataforma e-commerce con experiencia visual optimizada.',
      details: 'Diseño completo de interfaz de usuario incluyendo wireframes, mockups y prototipo interactivo. Se enfatizó la usabilidad manteniendo una estética visual atractiva y moderna.',
      year: '2024',
      client: 'E-Commerce Solutions',
    },
  ]

  return (
    <section className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mi <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Proyectos destacados que demuestran mi expertise en diseño gráfico, branding y comunicación visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer text-left"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalles
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-primary font-medium">{project.category}</p>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
