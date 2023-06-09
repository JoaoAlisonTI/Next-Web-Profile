import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Image from 'next/image'

export default function CarouselCertifications() {
  
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: '/certificado-angular.png',
      description: 'Potência Tech Angular Developer - Powered by iFood',
    },
    {
      src: '/certificado-dsm-min.png',
      description: 'Introdução ao Desenvolvimento Moderno de Software',
    },
    {
      src: '/js0-trybe.png',
      description: 'JavaScript do zero',
    },
    {
      src: '/hero-code.jpg',
      description: 'Workshop Semanda do Herói - Hero Code',
    },
  ];

  const handleChangeImage = (index: number) => {
    setCurrentImage(index);
  };
  
  return (
    <>
    <Box>
      <Image src={images[currentImage].src} alt={`Imagem do certificado ${currentImage + 1}`} />

      <Box>
        {images.map((image, index) => (
          <Typography
            key={index}
            onClick={() => handleChangeImage(index)}
            style={{ cursor: 'pointer', fontWeight: currentImage === index ? 'bold' : 'normal' }}
          >
            {image.description}
          </Typography>
        ))}
      </Box>
    </Box>
    </>
  )
}