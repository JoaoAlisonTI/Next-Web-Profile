import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CardProject from '@/components/CardProject/CardProject'
import styles from '../styles/ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className={styles.sectionProjects}>
      <h1>Meus projetos</h1>
      <div>
        <CardProject 
          imgSrc="/icons/reactjs.svg"
          projectName="Projeto Exemplo"
          projectDescription="Esse é apenas um card do projeto para demonstração, para saber como será a versão final."
          linkOnline="nada aqui"
          linkGithub="nada aqui"
        />
        <CardProject 
          imgSrc="/icons/reactjs.svg"
          projectName="Projeto Exemplo"
          projectDescription="Esse é apenas um card do projeto para demonstração, para saber como será a versão final."
          linkOnline="nada aqui"
          linkGithub="nada aqui"
        />
        </div>
      </section>  
      <Footer />
    </>
    )
}