import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'

export default function CarouselCertifications() {
  return (
    <Carousel>
      <div>
        <Image src="/icon.png" alt="Imagem 1" height={100}
                width={100} />
        <p className="legend">Legenda da imagem 1</p>
      </div>
      <div>
        <Image src="/icon.png" alt="Imagem 2" height={100}
                width={100} />
        <p className="legend">Legenda da imagem 2</p>
      </div>
      <div>
        <Image src="/icon.png" alt="Imagem 3" height={100}
                width={100} />
        <p className="legend">Legenda da imagem 3</p>
      </div>
    </Carousel>
  )
}