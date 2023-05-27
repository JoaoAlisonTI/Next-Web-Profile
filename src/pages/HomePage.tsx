import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/HomePage.module.css'

export default function HomePage() {
  return (
  <>
    <Header />
        <section className={styles.sectionAbout}>
         <div className={styles.divImage}>
                <Image 
                src="/photo2.svg" 
                alt="Minha imagem de perfil"
                height={240}
                width={240} />
              </div>
          <div className={styles.aboutMe}>
                <h1>Desenvolvedor Web Full Stack</h1>
                <h3></h3>
                <p>Como um desenvolvedor full stack, dedico-me a transformar ideias em aplicações web inovadoras, buscando sempre as melhores ferramentas e métricas de desenvolvimento. Explore meu portifólio, monstrando minha experiência em desenvolvimento web.</p>
              </div>
              <div>
              <Link className={styles.btnCv}
              href="ProfilePage">
              Leia mais
              </Link>
              </div>
        </section>
        
        
        <Footer />
  </>
  )
}