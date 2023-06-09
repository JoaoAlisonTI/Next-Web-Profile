import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

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
    <Box className={styles.boxContainer} display="flex" alignItems="center" flexDirection="column" style={{ margin: '0 auto', padding: '8px', backgroundColor: '#000000', borderRadius: '12px', border: '2px solid #333333' }}>
      <Box className={styles.boxImage} position="relative">
        {images.map((image, index) => (
          <Image className={styles.myImage}
            key={index}
            src={image.src}
            alt={`Imagem do Certificado ${index + 1}`}
            style={{
              position: 'absolute',
              borderRadius: '12px',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        ))}
      </Box>
       
      <Typography textAlign="center" variant="body1" style={{ marginTop: '8px', color: '#f8f8f8' }}>{images[currentImage].description}
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