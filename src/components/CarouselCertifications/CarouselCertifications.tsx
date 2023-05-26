import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'

export default function CarouselCertifications() {
  return (
    <>
    <Carousel style={{ zIndex: 0 }}>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={128} />
      </div>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={128} />
      </div>
    </Carousel>
    </>
  )
}