import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Tu Dentista de Confianza en <span>Arboledas, Zapopan</span>
          </h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-gold)" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Equipamiento de Vanguardia</h3>
                <p>Contamos con tecnología clínica de última generación que nos permite realizar diagnósticos precisos e intervenciones seguras y predecibles.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-gold)" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Entorno Clínico Seguro</h3>
                <p>Mantenemos estrictos protocolos de higiene, bioseguridad y esterilización para garantizar un espacio purificado y completamente seguro para su salud.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-gold)" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Trato Profesional y Empático</h3>
                <p>Comprendemos el valor de su tranquilidad. Nos tomamos el tiempo necesario para explicarle cada procedimiento con claridad, ética y completa transparencia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-image-wrapper">
          <img src="/imagen-clinica.png" alt="Instalaciones de clínica" className="why-us-image" />
          <div className="experience-badge">
            <strong>Calidad</strong>
            <span>Clínica</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
