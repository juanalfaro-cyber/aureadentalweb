import React from 'react';
import './PymeAgreements.css';

const PymeAgreements = () => {
  return (
    <section id="pymes" className="pymes">
      <div className="container pymes-container">
        <div className="pymes-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Convenios Dentales para Empresas en <span>Zapopan</span>
          </h2>
          <p className="pymes-subtitle">
            Trabajamos en conjunto con organizaciones corporativas para proteger la salud integral de sus equipos bajo estándares clínicos rigurosos.
          </p>
          <ul className="pymes-benefits">
            <li>✔ Atención clínica prioritaria para sus colaboradores.</li>
            <li>✔ Valoraciones de diagnóstico preventivo de cortesía.</li>
            <li>✔ Esquemas de financiamiento estructurados y transparentes.</li>
            <li>✔ Gestión de atención adaptada a horarios laborales.</li>
          </ul>
          <a href="https://wa.me/523331673048?text=Hola,%20solicito%20información%20sobre%20programas%20corporativos." target="_blank" rel="noreferrer" className="btn-primary">
            Solicita información
          </a>
        </div>
        <div className="pymes-image">
          <img src="/imagen-equipo.png" alt="Salud dental para corporativos" className="pymes-img" />
        </div>
      </div>
    </section>
  );
};

export default PymeAgreements;
