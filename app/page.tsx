'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import AboutMe from '@/components/about-me'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  const [activeSection, setActiveSection] = useState('inicio')

  return (
    <main className="bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'inicio' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'sobre-mi' && <AboutMe />}
      {activeSection === 'contacto' && <Contact />}
      
      <Footer />
    </main>
  )
}
