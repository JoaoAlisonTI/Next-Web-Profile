import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Image from 'next/image'

export default function CarouselCertifications() {
  
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: '/certificados/certificado-angular.png',
      description: 'Potência Tech Angular Developer - Powered by iFood',
    },
    {
      src: '/certificados/certificado-dsm-min.png',
      description: 'Introdução ao Desenvolvimento Moderno de Software',
    },
    {
      src: '/certificados/js0-trybe.png',
      description: 'JavaScript do zero',
    },
    {
      src: '/certificados/hero-code.jpg',
      description: 'Workshop Semanda do Herói - Hero Code',
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };
  
  return (
    <>
    <Box display="flex" alignItems="center" flexDirection="column" style={{ margin: '0 auto', padding: '4px', backgroundColor: '#000000', borderRadius: '12px', border: '2px solid #333333' }}>
      <Box position="relative" width="320px" height="280px">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Imagem do Certificado ${index + 1}`}
            style={{
              position: 'absolute',
              height: '100%',
              width: '320px',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        ))}
      </Box>
       
      <Typography textAlign="center" variant="body1" style={{ color: '#f8f8f8' }}>{images[currentImage].description}
      </Typography>
      
      <Box mt={4} display="flex" alignItems="center">
        <Typography variant="body2" onClick={handlePrevImage} style={{ cursor: 'pointer', marginRight: '16px', color: '#f8f8f8' }}>
          Anterior
        </Typography>
        <Typography variant="body2" onClick={handleNextImage} style={{ cursor: 'pointer', color: '#f8f8f8' }}>
          Próximo
        </Typography>
      </Box>

    </Box>
    </>
  )
}