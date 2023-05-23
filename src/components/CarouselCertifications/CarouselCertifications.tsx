import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'

export default function CarouselCertifications() {
  return (
    <Carousel>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 1" height={100} />
      </div>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 2" height={80} />
      </div>
      <div>
        <Image src="/certificado-angular.png" alt="Imagem 3" height={80} />
      </div>
    </Carousel>
  )
}