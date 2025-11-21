'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground p-2 rounded-full z-10 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-8">
          <div className="h-64 md:h-full rounded-lg overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">Descripción</p>
                <p className="text-sm">{project.description}</p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Detalles del Proyecto</p>
                <p className="text-sm">{project.details}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Cliente</p>
                  <p className="font-medium text-foreground">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Año</p>
                  <p className="font-medium text-foreground">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
