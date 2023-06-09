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
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box width="300px" height="300px" >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Imagem do Certificado ${index + 1}`}
            style={{
              width: 'auto',
              objectFit: 'cover',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        ))}
      </Box>

      <Box mt={2} display="flex" alignItems="center">
        <Typography variant="body2" onClick={handlePrevImage} style={{ cursor: 'pointer', marginRight: '16px' }}>
          Anterior
        </Typography>
        <Typography variant="body2" onClick={handleNextImage} style={{ cursor: 'pointer' }}>
          Próximo
        </Typography>
      </Box>

      <Typography textAlign="center" variant="body1">{images[currentImage].description}</Typography>
    </Box>
    </>
  )
}