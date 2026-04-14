import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alicia Marlen Padilla Ramirez",
      text: "Excelente dentista. Su consultorio es muy bonito, cómodo y destaca por su limpieza impecable. Me realizo dos endodoncias y nunca sentí dolor durante el procedimiento. Su profesionalismo, ética y trato amable me dieron mucha confianza. La recomiendo ampliamente."
    },
    {
      id: 2,
      name: "AMRA",
      text: "Me gustó mucho el trato de la doctora, yo iba muy nerviosa pero ella en todo momento me trató súper bien, me explicó a detalle con términos que entendí a la perfección y aparte los detalles extras que me ofreció me encantaron. La recomiendo al 100 sobre todo si te da cosa ir al dentista pues te hace sentir segura..."
    },
    {
      id: 3,
      name: "Alejandro Milan",
      text: "Profesionalismo total, acompañado de una empatía muy humana que ayuda bastante a sobrevivir al temido \"TSSSSSSSSS\" del taladro. Equipo de tecnología de punta, junto con amplio conocimiento y experiencia. Las instalaciones son agradables, limpias y acogedoras. Aquí el ambiente se siente cuidado y bien pensado. ¡Felicidades a todo el equipo!"
    },
    {
      id: 4,
      name: "Daniel Alcazar",
      text: "Excelente atención desde el primer momento. La doctora fue muy profesional, explicó claramente el tratamiento y transmitió mucha confianza durante toda la consulta. El resultado fue mejor de lo que esperaba"
    },
    {
      id: 5,
      name: "Ceci Lamas",
      text: "La Dra muy amable, me arregló una carie y no tuve ningún dolor. Fue muy profesional al recomendar no hacer aún la endodoncia y cuidar mi bolsillo. Las instalaciones de primera. Gracias!"
    },
    {
      id: 6,
      name: "Juan Estrada",
      text: "no tuve dolor en mi procedimiento de endodoncia, me explicaron muy bien el procedimiento y las recomendaciones para mi caso, quedé muy contento con la atención recibida."
    },
    {
      id: 7,
      name: "leonardo ramirez orozco",
      text: "me gusto que el consultorio y todos son muy profesionales, mi recuperación fue muy rápida , la verdad excelente servicio gracias"
    },
    {
      id: 8,
      name: "Ana Paula Castellanos",
      text: "Me encantó !, buena atención, profesionales y muy amables"
    },
    {
      id: 9,
      name: "Alberto Perez educativaT",
      text: "Excelente servicio de calidad e instalaciones!!!"
    }
  ];

  const containerRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        setCarouselWidth(containerRef.current.scrollWidth / 2);
      }, 100);
    }
  }, []);

  const loopTestimonials = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="testimonials overflow-hidden">
      <div className="container">
        <h2 className="section-title">Experiencias reales en <span>Áurea</span></h2>
        <div className="testimonials-carousel" ref={containerRef}>
          <motion.div
            animate={{ x: [0, -carouselWidth] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="testimonials-track"
          >
            {loopTestimonials.map((review, index) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="testimonial-card flex-shrink-0"
                key={`${review.id}-${index}`}
              >
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="var(--color-gold)" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
                <div className="testimonial-author">
                  <strong>{review.name}</strong>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '4px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Reseña en Google</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
