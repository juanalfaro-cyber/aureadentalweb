import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="bg-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 style={{ fontSize: '3rem' }}>Clínica Dental en Zapopan: <br />Alivio experto para tu <span>Dolor Dental</span></h1>
          <p>
            Especialistas en endodoncia. En Áurea Dental Care priorizamos su tranquilidad, brindando manejo del dolor dental con diagnósticos precisos en un entorno caracterizado por la higiene y modernidad.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/523331673048?text=Hola,%20deseo%20agendar%20una%20consulta." target="_blank" rel="noreferrer" className="btn-primary">
              Agenda por WhatsApp
            </a>
            <a href="#services" className="btn-secondary">
              Nuestros Tratamientos
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/consultorio-clinica.jpeg" alt="Instalaciones de Clínica Dental Áurea" className="hero-media" />
          <div className="floating-card">
            <span className="star-icon">★</span>
            <div className="floating-text">
              <strong>Atención Profesional</strong>
              <span>Tranquilidad y experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
