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
      <div className={styles.content}>
        <CardProject 
          imgSrc="/projetos/sibi-gj.png"
          projectName="Aplicação Web SIBI - Gerardo José"
          projectDescription="É um projeto comunitário para nossa antiga escola, onde me juntei com meus colegas (Kayke, Marquinhos, Romário e Brunno) para desenvolvermos um sistema de cadastro, listagem e requisição dos livros da biblioteca. Fiquei responsável pela tela de listagem/pesquisa dos livros e da tela de edição. Techs: HTML/CSS, PHP e SQL. Como o projeto só pode ser acessado com login o link online é de uma LP com imagens e detalhes do sistema."
          linkOnline="https://sibi.vercel.app/"
        />
        <CardProject 
          imgSrc="/projetos/buzzfeed.jpg"
          projectName="Aplicação Web BuzzFeed"
          projectDescription="BuzzFeed é um quiz de perguntas onde dependendo das opções/respostas que são escolhidas, definirá o seu resultado. Em específico, se você será um heroi ou vilão. Para o armazenamento das perguntas e respostas foi criado um data fake em json. Techs: Angular e Typescript. "
          linkGithub="https://github.com/JoaoAlisonTI/Buzzfeed-Quizz-Project"
        />
        <CardProject 
          imgSrc="/projetos/projeto-pokedex.png"
          projectName="Aplicação Web Pokédex"
          projectDescription="Pokédex é uma enciclopédia virtual que detém todas as espécies de Pokémon, ou seja, desde a 1° geração até a última geração. Techs: HTML/CSS, JavaScript e API. Para mais detalhes acesse o repositório no botão direito."
          linkOnline="https://joaoalisonti.github.io/Pokedex-Js/"
          linkGithub="https://github.com/JoaoAlisonTI/Pokedex-Js"
        />
        </div>
      </section>  
      <Footer />
    </>
    )
}