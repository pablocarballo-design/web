'use client'

import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ponte en <span className="text-primary">Contacto</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu visión y cómo puedo ayudarte a hacerla realidad.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:hello@studiodesign.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@studiodesign.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a href="tel:+34912345678" className="text-muted-foreground hover:text-primary transition-colors">
                    +34 91 234 56 78
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Madrid, España</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Sígueme en redes sociales</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Github, label: 'GitHub', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {submitted ? '✓ Mensaje enviado' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
