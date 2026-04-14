import React from 'react';
import './Emergencies.css';

const Emergencies = () => {
  return (
    <section id="emergencies" className="emergencies">
      <div className="container emergencies-container">
        <div className="emergencies-content">
          <h2>Urgencia Dental en <span>Zapopan</span></h2>
          <p>Comprendemos que ciertas condiciones dentales exigen intervención urgente. Si presentas dolor o una molestia dental, escríbenos por WhatsApp para revisar tu caso de urgencia dental en Zapopan. La atención es solo con cita previa y está sujeta a disponibilidad.</p>
          <a href="https://wa.me/523331673048?text=URGENCIA:%20Necesito%20atención%20dental%20inmediata." target="_blank" rel="noreferrer" className="btn-primary btn-emergency">
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Emergencies;
