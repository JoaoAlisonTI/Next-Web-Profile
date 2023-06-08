import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

export default function CarouselCertifications() {
  return (
    <>
    <div className={styles.carouselContainer}>
    <Carousel infiniteLoop={true} autoPlay={true} showThumbs={true} showStatus={false} interval={3000} showIndicators={false}>
      <div>
        <Image src="/certificados/certificado-dsm-min.png" alt="Certificado Introdução ao Desenvolvimento Moderno de Software" height={182} />
        <div>Olá mundo</div>
      </div>
      <div>
        <Image src="/certificados/certificado-angular.png" alt="Certificado Potência Tech Angular Developer" height={182} />
        <div></div>
      </div>
      <div>
        <Image src="/certificados/js0-trybe.png" alt="Certificado JavaScript do zero" height={182} />
        <div></div>
      </div>
      <div>
        <Image src="/certificados/hero-code.jpg" alt="Certificado do Workshop Semana do Herói - Hero Code" height={182} />
        <div></div>
      </div>
    </Carousel>
    </div>
    </>
  )
}