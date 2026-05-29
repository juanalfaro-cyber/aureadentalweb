import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from '../components/Header'
import HeroSEO from '../components/HeroSEO'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Emergencies from '../components/Emergencies'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

function DolorDentalApp() {
  return (
    <>
      <Header />
      <main>
        <HeroSEO 
          h1="Manejo del Dolor Dental en Zapopan:"
          h1Span="Atención con diagnóstico preciso"
          description="Comprendemos lo molesto que puede ser un dolor de muela. Brindamos atención para el manejo del dolor dental en Zapopan (atención con previa cita y sujeta a disponibilidad). Nuestro enfoque profesional y humano nos permite diagnosticar y aliviar tu malestar en un ambiente seguro."
          floatingTextStrong="Tranquilidad y Bienestar"
          floatingTextSpan="Diagnóstico profesional"
        />
        <Services />
        <WhyChooseUs />
        <Emergencies />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DolorDentalApp />
  </StrictMode>,
)
