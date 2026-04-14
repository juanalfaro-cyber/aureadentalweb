import React from 'react';
import { motion } from 'framer-motion';

const Default_Gradients = [
  "linear-gradient(135deg, #ffffff 0%, #F5F1EB 100%)", // white to beige
  "linear-gradient(135deg, #F5F1EB 0%, #ffffff 100%)", // beige to white
  "linear-gradient(135deg, #F5F1EB 0%, rgba(201,166,70,0.1) 100%)", // beige to light gold
  "linear-gradient(135deg, #ffffff 0%, rgba(72,104,118,0.15) 100%)", // white to soft blue-gray (#486876)
  "linear-gradient(135deg, #ffffff 0%, rgba(201,166,70,0.05) 100%)", // white to very light gold
  "linear-gradient(135deg, #ffffff 0%, #F5F1EB 100%)", // back to white/beige
];

export function GradientBackground({
  children,
  className = '',
  gradients = Default_Gradients,
  animationDuration = 10,
  animationDelay = 0,
}) {
  return (
    <div 
      className={className} 
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        style={{ 
          background: gradients[0],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
