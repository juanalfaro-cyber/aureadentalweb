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

function EndodonciaApp() {
  return (
    <>
      <Header />
      <main>
        <HeroSEO 
          h1="Especialistas en Endodoncia en Zapopan:"
          h1Span="Salva tu diente natural"
          description="Si experimentas dolor intenso, sensibilidad profunda o inflamación, es posible que necesites un tratamiento de conductos. En Áurea Dental Care, realizamos tratamientos de endodoncia en Zapopan enfocados en preservar tu pieza dental en un entorno moderno y con un diagnóstico preciso."
          floatingTextStrong="Especialistas en Endodoncia"
          floatingTextSpan="Atención segura y profesional"
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
    <EndodonciaApp />
  </StrictMode>,
)
