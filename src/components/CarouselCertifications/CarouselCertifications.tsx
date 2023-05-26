import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

export default function CarouselCertifications() {
  return (
    <>
    <div className={styles.container}>
    <Carousel>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={128} />
      </div>
    </Carousel>
    </div>
    </>
  )
}