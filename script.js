const projects = [
  {
    id: 1,
    title: "Branding Corporativo",
    category: "identidad",
    client: "TechStart Solutions",
    year: "2024",
    image: "images/Portada.jpg",
    description:
      "Desarrollo completo de identidad visual corporativa incluyendo logotipo, paleta de colores, tipografía y guía de estilo.",
  },
  {
    id: 2,
    title: "Sistema de Señalética",
    category: "señaletica",
    client: "Centro Comercial Plaza Mayor",
    year: "2024",
    image: "images/proyecto-2.jpg",
    description:
      "Sistema completo de señalización para centro comercial con directorios, señales de tránsito y wayfinding integral.",
  },
  {
    id: 3,
    title: "Campaña de Afiches",
    category: "afiches",
    client: "Festival de Música",
    year: "2024",
    image: "images/proyecto-3.jpg",
    description:
      "Campaña publicitaria con diseño de afiches para festival de música con tipografía impactante y composición dinámica.",
  },
  {
    id: 4,
    title: "Tapa de disco de vinilo",
    category: "ilustraciones",
    client: "Editorial Publishing",
    year: "2023",
    image: "images/tab4.png",
    description:
      "Diseño de un disco de vinilo (LP) de edición especial, utilizando herramientas de ilustración digital.",
  },
  {
    id: 5,
    title: "Logo Design",
    category: "identidad",
    client: "StartUp Technology",
    year: "2023",
    image: "images/proyecto-5.jpg",
    description:
      "Diseño de logotipo versátil y moderno para empresa tecnológica con aplicaciones en diversos formatos.",
  },
  {
    id: 6,
    title: "Póster Artístico",
    category: "afiches",
    client: "Galería de Arte Contemporáneo",
    year: "2023",
    image: "images/proyecto-6.jpg",
    description:
      "Póster artístico para exposición de arte contemporáneo con composición minimalista y colores vibrantes.",
  },
  {
    id: 7,
    title: "Ilustración Infantil",
    category: "ilustraciones",
    client: "Aula Creativa",
    year: "2023",
    image: "images/proyecto-7.jpg",
    description:
      "Ilustraciones personalizadas para libros infantiles con personajes originales y narrativa visual cautivadora.",
  },
  {
    id: 8,
    title: "Señalización Comercial",
    category: "señaletica",
    client: "Cadena de Tiendas Premium",
    year: "2022",
    image: "images/proyecto-8.jpg",
    description:
      "Diseño de señalización interior y exterior para cadena comercial con identidad visual coherente y profesional.",
  },
  {
    id: 9,
    title: "Manual de Marca",
    category: "identidad",
    client: "Grupo Empresarial Global",
    year: "2022",
    image: "images/proyecto-9.jpg",
    description:
      "Manual completo de identidad corporativa incluyendo uso de logo, tipografía, colores, aplicaciones y prohibiciones.",
  },
  {
    id: 10,
    title: "Diseño de Empaque",
    category: "packaging",
    client: "BioProducts & Co.",
    year: "2024",
    image: "images/proyecto-10.jpg",
    description:
      "Diseño integral de empaque para línea de productos ecológicos con materiales sostenibles y diseño minimalista.",
  },
  {
    id: 11,
    title: "Caja de Producto",
    category: "packaging",
    client: "Luxury Cosmetics",
    year: "2024",
    image: "images/proyecto-11.jpg",
    description:
      "Caja premium para línea de cosméticos de lujo con acabados especiales y diseño elegante y sofisticado.",
  },
  {
    id: 12,
    title: "Etiquetas y Stickers",
    category: "packaging",
    client: "Artisan Foods",
    year: "2023",
    image: "images/proyecto-12.jpg",
    description:
      "Diseño de etiquetas y stickers para productos alimentarios artesanales con ilustraciones personalizadas.",
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const verTrabajosBtn = document.getElementById("ver-trabajos-btn")
  verTrabajosBtn.addEventListener("click", () => {
    const portfolioSection = document.getElementById("portfolio")
    portfolioSection.scrollIntoView({ behavior: "smooth" })
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
    document.querySelector('[data-section="portfolio"]').classList.add("active")
  })
})

function filterCategory(category) {
  const cards = document.querySelectorAll(".portfolio-card")
  const buttons = document.querySelectorAll(".category-btn")

  // Actualizar botones activos
  buttons.forEach((btn) => btn.classList.remove("active"))
  event.target.classList.add("active")

  // Filtrar y mostrar/ocultar tarjetas
  cards.forEach((card) => {
    if (category === "todas" || card.dataset.category === category) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const section = e.target.dataset.section

    // Navegar suavemente hacia la sección
    const sectionElement = document.getElementById(section)
    sectionElement.scrollIntoView({ behavior: "smooth" })

    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
    e.target.classList.add("active")
  })
})

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.section === current) {
      link.classList.add("active")
    }
  })
})

function openModal(id) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    const projects = {
        1: {
            image: "images/full/Identidad1.jpg"  // imagen larga de 1920 px
        },
        2: {
            image: "images/full/Señalética.jpg"
        },
        3: {
            image: "images/full/Afiches1.jpg"
        },
        4: {
            title: "Diseño de disco de vinilo",
            description: "Diseño del arte completo de un disco de vinilo (LP) de edición especial, utilizando herramientas de ilustración digital. El trabajo debía integrar concepto visual, ilustración, tipografía.",
            image: "images/full/Ilustración1.jpg"
        },
        5: {
            image: "images/full/Identidad2.jpg"
        },
        6: {
            title: "Póster infográfico",
            description: "Infografía realizada para el Templo Budista Chagdud Gonpa Sengue Dzong de Lavalleja.",
            image: "images/full/Afiches2.jpg"
        },
        10: {
            image: "images/full/Packaging.jpg"
        },
        11: {
            title: "Póster de película",
            description: "Diseño de un póster para la película A Bronx Tale.",
            image: "images/full/Ilustración2.jpg"
        },
        7: {
            title: "Libros clásicos infantiles",
            description: "Diseño de 5 portadas editoriales que conforman una colección visual coherente para las siguientes obras literarias: Rebelión en la granja (George Orwell), Robinson Crusoe (Daniel Defoe), La isla del tesoro (Robert Louis Stevenson), Los viajes de Gulliver (Jonathan Swift) y El señor de las moscas (William Golding).",
            image: "images/full/Ilustración3.jpg"
        },
        // ... seguí agregando tus imágenes HD
    };

    const project = projects[id];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalImage.src = project.image;

    modal.classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active")
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal")
  if (e.target === modal) {
    closeModal()
  }
})

// Cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Manejo del formulario de contacto
function handleSubmit(event) {
  event.preventDefault()
  alert("¡Gracias por tu mensaje! Me pondré en contacto pronto.")
  event.target.reset()
}
