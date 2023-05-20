import Header from '@/components/Header/Header'
import CardProject from '@/components/CardProject/CardProject'
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
                src="/photoperfil.png" 
                alt="Minha imagem de perfil"
                width={190} 
                height={190}  />
              </div>
          <div className={styles.aboutMe}>
                <h1>Sou João Alison</h1>
                <h3>Desenvolvedor e Técnico em Informática</h3>
                <p>Como um desenvolvedor ful-stack, dedico-me a transformar ideias em aplicações web. Explore meu  portifólio monstrando minha experiência em desenvolvimento web</p>
              </div>
              <div>
              <Link className={styles.btnCv}
              href="ProfilePage">
              Leia mais
              </Link>
              </div>
        </section>
        
        <section className={styles.sectionProjects}>
          <h3>Últimos projetos <i>icon</i></h3>
          <CardProject
            projectName="SIBI - Gerardo José"
            projectDescription="Mollit tempor deserunt mollit ullamco commodo esse. Consectetur duis irure consequat sit dolor dolore sint ut incididunt cupidatat cillum sit."
          />
          <CardProject
            projectName="My Web Page"
            projectDescription="Mollit tempor deserunt mollit ullamco commodo esse. Consectetur duis irure consequat sit dolor dolore sint ut incididunt cupidatat cillum sit."
          />
          
        </section>
        
        <Footer />
  </>
  )
}