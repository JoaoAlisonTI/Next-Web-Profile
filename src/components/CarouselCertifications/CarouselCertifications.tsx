import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import styles from '@/components/CarouselCertifications/CarouselCertifications.module.css'

export default function CarouselCertifications() {
  return (
    <>
    <div className={styles.carouselContainer} height={186}>
    <Carousel infiniteLoop={true} autoPlay={true} showThumbs={true} showStatus={false} interval={3000} showIndicators={false}>
      <div>
        <Image src="/certificados/certificado-dsm-min.png" alt="Certificado Introdução ao Desenvolvimento Moderno de Software" height={186} />
        <div><h4>Introdução ao Desenvolvimento Moderno de Software</h4></div>
      </div>
      <div>
        <Image src="/certificados/certificado-angular.png" alt="Certificado Potência Tech Angular Developer" height={186} />
        <div><h4>Potência Tech Angular Developer - Powered by iFood</h4></div>
      </div>
      <div>
        <Image src="/certificados/js0-trybe.png" alt="Certificado JavaScript do zero" height={186} />
        <div><h4>JavaScript do zero</h4></div>
      </div>
      <div>
        <Image src="/certificados/hero-code.jpg" alt="Certificado do Workshop Semana do Herói - Hero Code" height={186} />
        <div><h4>Workshop Semana do Herói - Hero Code</h4></div>
      </div>
    </Carousel>
    </div>
    </>
  )
}