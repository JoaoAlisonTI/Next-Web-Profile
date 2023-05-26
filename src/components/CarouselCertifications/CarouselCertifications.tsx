import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

export default function CarouselCertifications() {
  return (
    <>
    <div className={styles.carouselContainer}>
    <Carousel>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={130} />
      </div>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={130} />
      </div>
    </Carousel>
    </div>
    </>
  )
}