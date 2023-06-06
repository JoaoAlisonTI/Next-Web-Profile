import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SkillsStats from '@/components/SkillsStats/SkillsStats'
import SkillsTech from '@/components/SkillsTech/SkillsTech'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
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
                src="/photo.png" 
                alt="Minha imagem de perfil"
                height={312}
                width={312} />
              </div>
          <div className={styles.aboutMe}>
                <h1>Desenvolvedor Web Full Stack</h1>
                <h3></h3>
                <p>Como um desenvolvedor full stack, dedico-me a transformar ideias em aplicações web inovadoras, buscando sempre as melhores ferramentas e métricas de desenvolvimento. Explore meu portifólio, monstrando minha experiência em desenvolvimento web.</p>
              </div>
              <div className={styles.socialMedia}>
                <a href="https://github.com/JoaoAlisonTI" target="_blank" className={styles.btnMedia}><FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/joão-alison-de-sousa-martins" target="_blank" className={styles.btnMedia}><FaLinkedin />
                </a>
                <a href="https://www.instagram.com/joao_alison_23/" target="_blank" className={styles.btnMedia}><FaInstagram />
                </a>
              </div>
              <div>
              <Link 
              className={styles.btnCv}
              href="ProfilePage">
              Leia mais
              </Link>
              </div>
        </section>
        <section className={styles.sectionSkills}>
          <h1>Skills</h1>
              <div className={styles.mySkills}>
              
                <div className={styles.skillsStats}>
                  <SkillsStats 
                    skill="Front-end"
                    stats="50%"
                    maxWidthPer="50%"
                  />
                  <SkillsStats 
                    skill="Back-end"
                    stats="38%"
                    maxWidthPer="38%"
                  />
                  
                </div>
                <h3>Tech Stack</h3>
                <div className={styles.skillsTech}>
                  <SkillsTech />
                </div>
              
              </div>
        </section>
        
        <Footer />
  </>
  )
}