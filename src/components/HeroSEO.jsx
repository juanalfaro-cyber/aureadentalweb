import React from 'react';
import './Hero.css';

const HeroSEO = ({ h1, h1Span, description, floatingTextStrong, floatingTextSpan }) => {
  return (
    <section id="hero" className="hero">
      <div className="bg-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 style={{ fontSize: '3rem' }}>{h1} {h1Span && <span>{h1Span}</span>}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <a href="https://wa.me/523331673048?text=Hola,%20deseo%20agendar%20una%20consulta." target="_blank" rel="noreferrer" className="btn-primary">
              Agenda por WhatsApp
            </a>
            <a href="/" className="btn-secondary">
              Volver al Inicio
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/consultorio-clinica.jpeg" alt="Instalaciones de Clínica Dental Áurea" className="hero-media" />
          <div className="floating-card">
            <span className="star-icon">★</span>
            <div className="floating-text">
              <strong>{floatingTextStrong}</strong>
              <span>{floatingTextSpan}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSEO;
