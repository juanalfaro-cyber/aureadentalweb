import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Conoce nuestra <span>Clínica</span></h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--color-blue-gray)', opacity: 0.9}}>
          [Espacio reservado para una galería visual o video de recorrido de la clínica]
        </p>
        <div className="gallery-grid">
           <div className="gallery-item video-placeholder">
             <span>ESPACIO PARA REEL / VIDEO TOUR</span>
           </div>
           <div className="gallery-item image-placeholder">
             <span>ESPACIO FOTO INSTALACIONES</span>
           </div>
           <div className="gallery-item image-placeholder">
             <span>ESPACIO FOTO EQUIPO / ESPECIALISTA</span>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
