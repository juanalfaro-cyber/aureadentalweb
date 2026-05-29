import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header'
import HeroSEO from '../components/HeroSEO'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

function ClinicaDentalApp() {
  return (
    <>
      <Header />
      <main>
        <HeroSEO 
          h1="Tu Clínica Dental en Arboledas, Zapopan:"
          h1Span="Áurea Dental Care"
          description="Somos una clínica dental en Arboledas, Zapopan, comprometida con tu salud bucal. Ofrecemos servicios odontológicos integrales, desde limpiezas y resinas estéticas, hasta endodoncias y manejo del dolor, siempre priorizando un diagnóstico certero y tu comodidad."
          floatingTextStrong="Atención Integral"
          floatingTextSpan="Ubicación en Arboledas"
        />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClinicaDentalApp />
  </StrictMode>,
)
