import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CarouselCertifications from '@/components/CarouselCertifications/CarouselCertifications'
import SkillsStats from '@/components/SkillsStats/SkillsStats'
import SkillsTech from '@/components/SkillsTech/SkillsTech'

import styles from '../styles/ProfilePage.module.css'

export default function ProfilePage() {
  return (
    <>
      <Header />
      <section className={styles.sectionProfile}>
              <div className={styles.myProfile}>
                <h1>Profile</h1>
                <p>Bem vindo(a)👋🏽, me chamo João Alison e sou amante da Tecnologia e da Programação. Sou Técnico em Informática pela EEEP Gerardo José Dias de Loiola. Foi durante esses 3 anos onde aprendi e desenvolvi minhas Softs e Hards skills. Tive a grande oportunidade de aprender os conceitos iniciais e fundamentais de Gestão, Redes, Hardware, Software e Desenvolvimento de Sistemas com excelentes profissionais da área. Apesar de ter concluído o ensino técnico, a sede por desenvolver e programar sites/sistemas webs não acabou. Por isso estou sempre interessado em melhorar, buscar novos conhecimentos, métricas, ferramentas, experiências e conquistar meus objetivos.</p>
              </div>
              </section>
              
              <section className={styles.sectionExperience}>
              <h1>Experience</h1>
              <span className={styles.circle}></span>
              <div className={styles.myExperience}>
                <h4>Técnico em Informática - Suporte a Sistemas, 08/2022 - 12/2022</h4>
                <h5>UNINTA | CENTRO UNIVERSITÁRIO INTA, Sobral, Ceará</h5>
                <p>Desempenhando manutenção e ajustes no funcionamento e uso das soluções implementadas no sistema
Moodle - Ambiente Virtual de Aprendizagem (AVA). Fazendo a Análise, Implementação e Reestruturação de
Salas Virtuais. Criação e Implementação de Banco de Questões como também a Criação e Cadastro de IDs.</p>
              </div>
              
              </section>
              
              <section className={styles.sectionEducation}>
              <h1>Education</h1>
              <span className={styles.circle}></span>
              <div className={styles.myEducation}>
               <h4>Técnico em Informática</h4>
               <h5>2020 - 2022 Escola Estadual de Ensino Profissional Gerardo José Dias de Loiola.</h5>
              </div>
              
              </section>
              
              <section className={styles.sectionCertifications}>
              <h1>Certifications</h1>
              <div className={styles.myCertifications}>
                <CarouselCertifications />
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