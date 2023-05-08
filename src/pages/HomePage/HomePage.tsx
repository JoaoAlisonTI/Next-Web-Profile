import Header from '@/components/Header/Header.tsx'
import Menu from '@/components/Menu/Menu.tsx'
import CardProject from '@/components/CardProject/CardProject.tsx'
import Footer from '@/components/Footer/Footer.tsx'

import styles from './styles/HomePage.module.css'

export default function HomePage() {
  return (
  <>
    <Header />
        <section className={styles.sectionAbout}>
         <Menu />
          <div className={styles.aboutMe}>
                <p>Hey there 👋🏽</p>
                <h1>Sou João Alison</h1>
                <h3>Desenvolvedor e Técnico em Informática</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <a href="#" className={styles.btnCv}>Leia mais</a>
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