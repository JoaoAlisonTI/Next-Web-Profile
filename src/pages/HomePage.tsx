import Header from '@/components/Header/Header'
import CardProject from '@/components/CardProject/CardProject'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'

import styles from '../styles/HomePage.module.css'

export default function HomePage() {
  return (
  <>
    <Header />
        <section className={styles.sectionAbout}>
          <div className={styles.aboutMe}>
              {/*<div className={styles.divImage}>
                <img src="https://github.com/JoaoAlisonTI.png" />
              </div>*/}
                <p>Hey there 👋🏽</p>
                <h1>Sou João Alison</h1>
                <h3>Desenvolvedor e Técnico em Informática</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <Link className={styles.btnCv}
              href="ProfilePage">
              Leia mais
              </Link>
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