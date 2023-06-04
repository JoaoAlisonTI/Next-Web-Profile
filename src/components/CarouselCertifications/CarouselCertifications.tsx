import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

export default function CarouselCertifications() {
  return (
    <>
    <div className={styles.carouselContainer}>
    <Carousel fade={true} infiniteLoop={true} autoPlay={true} showThumbs={true} showStatus={false} interval={1500} showIndicators={false}>
      <div>
        <Image src="/certificados/certificado-dsm-min.png" alt="Imagem 1" height={170} />
      </div>
      <div>
        <Image src="/certificados/certificado-angular.png" alt="Imagem 1" height={170} />
      </div>
    </Carousel>
    </div>
    </>
  )
}