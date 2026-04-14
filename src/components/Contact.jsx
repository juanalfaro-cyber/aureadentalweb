import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            Encuentra tu Clínica Dental en <span>Zapopan</span>
          </h2>

          <div className="info-block">
            <h3>📍 Ubicación</h3>
            <p>Calle Carnero #3971, Arboledas<br />Zapopan, Jalisco</p>
            <a href="https://maps.app.goo.gl/bhaceNbTYv9GvqZ37" target="_blank" rel="noreferrer" className="maps-link">
              Cómo llegar en Google Maps
            </a>
          </div>

          <div className="info-block">
            <h3>🕒 Horario de Atención</h3>
            <p>Lunes a Viernes: 8:00 am - 8:00 pm<br />Sábados: 8:00 am - 2:00 pm<br />Urgencias con previa cita</p>
          </div>

          <div className="info-block">
            <h3>💳 Formas de Pago</h3>
            <p>• Efectivo<br />• Tarjeta de Crédito</p>
          </div>

          <div className="info-block">
            <h3>💬 Contacto Directo</h3>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://wa.me/523331673048?text=Hola,%20deseo%20agendar%20una%20cita." target="_blank" rel="noreferrer" className="btn-primary">
                Agenda por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14936.561120044031!2d-103.4285844!3d20.6231015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad0c7ebcb537%3A0xc4f5c94d1b8c0c80!2sCalle%20Carnero%203971%2C%20Arboledas%2C%2045070%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1682345678901!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Áurea Dental Care">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
