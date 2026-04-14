import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <img src="/logo.png" alt="Áurea Dental Care Logo" className="logo-img" />
          </a>
        </div>
        
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
            <li><a href="#why-us" onClick={() => setIsMenuOpen(false)}>Clínica</a></li>
            <li><a href="#emergencies" onClick={() => setIsMenuOpen(false)}>Urgencias</a></li>
            <li><a href="#pymes" onClick={() => setIsMenuOpen(false)}>Convenios</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
          <a href="https://wa.me/523331673048?text=Hola,%20quisiera%20agendar%20una%20cita." target="_blank" rel="noreferrer" className="btn-primary nav-btn">
            Agendar Cita
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
