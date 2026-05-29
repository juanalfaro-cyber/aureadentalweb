import React from 'react';
import './Services.css';
import { GradientBackground } from './ui/GradientBackground';

const Services = () => {
  const primaryServices = [
    {
      id: 1,
      title: 'Manejo del Dolor',
      description: 'Diagnóstico oportuno e intervención clínica para identificar el origen anatómico del malestar y restaurar su salud funcional.',
      icon: '/icono-dolor.png'
    },
    {
      id: 2,
      title: 'Endodoncia',
      description: 'Tratamiento especializado de conductos diseñado para conservar la estructura natural de sus dientes. Con atención profesional en endodoncia en Zapopan.',
      icon: '/icono-endo.png'
    },
    {
      id: 3,
      title: 'Limpieza Dental',
      description: 'Protocolos de profilaxis profunda enfocados en eliminar sarro y placa bacteriana. Reserva tu limpieza dental en Zapopan para prevenir complicaciones.',
      icon: '/icono-limpieza.png'
    },
    {
      id: 4,
      title: 'Resinas Estéticas',
      description: 'Restauraciones de alta calidad clínica y del mismo tono de tu diente para devolverle su integridad estructural. Conoce nuestras resinas estéticas en Zapopan.',
      icon: '/icono-resina.png'
    },
    {
      id: 5,
      title: 'Blanqueamiento',
      description: 'Procedimiento seguro y supervisado bajo estándares médicos, diseñado para devolver un tono sano y armónico a su dentadura con un blanqueamiento dental en Zapopan.',
      icon: '/icono-blanqueamiento.png'
    }
  ];

  const secondaryServices = [
    'Ortodoncia',
    'Rehabilitación Estructural y Coronas',
    'Periodoncia tratamiento enfermedades de encía',
    'Procedimientos Quirúrgicos',
    'Odontología Preventiva Integral'
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header text-center">
          <h2 className="section-title">Servicios <span>Dentales en Zapopan</span></h2>
          <p className="services-subtitle">
            Nuestra prioridad es preservar su salud dental y brindarle estabilidad clínica. Como su dentista en Arboledas Zapopan, nos respaldamos por protocolos estrictos.
          </p>
        </div>

        <div className="services-grid">
          {primaryServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <GradientBackground className="secondary-services-wrapper">
          <h3 className="secondary-title">Servicios Complementarios</h3>
          <ul className="secondary-services-list">
            {secondaryServices.map((service, index) => (
              <li key={index}>
                <span className="check-icon">✓</span> {service}
              </li>
            ))}
          </ul>
          <div className="services-action" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://wa.me/523331673048?text=Hola,%20quiero%20agendar%20una%20cita%20de%20valoración." target="_blank" rel="noreferrer" className="btn-primary">
              Agenda tu cita
            </a>
          </div>
        </GradientBackground>
      </div>
    </section>
  );
};

export default Services;
