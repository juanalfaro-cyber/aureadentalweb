import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="Áurea Dental Care Logo" className="footer-logo-img" />
          </div>
          <p>Tranquilidad y atención experta para su salud dental. Práctica clínica especializada en el entorno moderno de Zapopan.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#services">Tratamientos</a></li>
            <li><a href="#why-us">La Clínica</a></li>
            <li><a href="#emergencies">Urgencias</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/aureadentalcaregdl?igsh=MWd0YzI5ZDU0NDZ1bA==" target="_blank" rel="noreferrer" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/17Lvg58HL3/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-info">
          <h4>Contáctanos</h4>
          <p>Calle Carnero #3971, Arboledas</p>
          <p>Zapopan, Jalisco</p>
          <p style={{ marginTop: '0.4rem' }}>
            <a href="https://maps.app.goo.gl/bhaceNbTYv9GvqZ37" target="_blank" rel="noreferrer" style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textDecoration: 'none' }}>
              📍 Abrir en Google Maps
            </a>
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://wa.me/523331673048?text=Hola,%20deseo%20solicitar%20información." target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
              Solicita información
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Áurea Dental Care. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
