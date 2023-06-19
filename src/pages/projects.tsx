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
          projectDescription="É um projeto comunitário para nossa antiga escola, onde me juntei com meus colegas (Kayke, Marquinhos, Romário e Brunno) para desenvolvermos um sistema de cadastro, listagem e requisição dos livros da biblioteca. Fiquei responsável pela tela de listagem/pesquisa dos livros e da tela de edição. Techs: HTML/CSS, JavaScript, PHP e SQL. Como o projeto só pode ser acessado com login o link online é de uma LP com imagens e detalhes do sistema."
          linkOnline="https://sibi.vercel.app/"
          linkGithub="https://github.com/JoaoAlisonTI/Page-Livros"
        />
        <CardProject 
          imgSrc="/projetos/buzzfeed.jpg"
          projectName="Aplicação Web BuzzFeed"
          projectDescription="BuzzFeed é um quiz de perguntas onde dependendo das opções/respostas que são escolhidas, definirá o seu resultado. Em específico, se você será um heroi ou vilão. Para o armazenamento das perguntas e respostas foi criado um data fake em json. Techs: Angular e Typescript. "
          linkOnline="https://buzzfeed-quizz.vercel.app/"
          linkGithub="https://github.com/JoaoAlisonTI/Buzzfeed-Quizz-Project"
        />
        <CardProject 
          imgSrc="/projetos/projeto-pokedex.png"
          projectName="Aplicação Web Pokédex"
          projectDescription='Pokédex é uma enciclopédia virtual que detém todas as espécies de Pokémon, ou seja, desde a 1° geração até a última geração. No caso deste projeto foi "consumido" o PokéApi, um API RESTful com várias informações e dados sobre Pokémons, para facilitar o processo de desenvolvimento da Pokédex. Techs: HTML/CSS, JavaScript e API. Para mais detalhes acesse o repositório no botão direito.'
          linkOnline="https://joaoalisonti.github.io/Pokedex-Js/"
          linkGithub="https://github.com/JoaoAlisonTI/Pokedex-Js"
        />
        <CardProject 
          imgSrc="/projetos/habits.jpg"
          projectName="Aplicação Web Habits Tracker"
          projectDescription="o Habits foi desenvolvido durante a NLW 11, um evento exclusivo e gratuito promovido pela Rocketseat para ensino de tecnologias WEB. O Habits Tracker é um app para ajudar a rastrear os hábitos, crie um novo dia e faça a gestão de hábitos diários. Após criar um novo dia e marcar um hábito como concluído as informações serão guardadas no LocalStorage do navegador do seu dispositivo. Techs: HTML/CSS e JavaScript."
          linkOnline="https://joaoalisonti.github.io/NLW-11--SETUP/"
          linkGithub="https://github.com/JoaoAlisonTI/NLW-11--SETUP"
        />
        <CardProject 
          imgSrc="/projetos/imc-calc.jpg"
          projectName="Aplicação Web Calculadora de IMC"
          projectDescription='O projeto pede para o usuário sua altura e peso (utilize vírgula), com isso é só clicar em calcular para ser realizado o cálculo do IMC ("IMC = peso / (altura x altura)"). Finalmente será exibido a tabela com seu Índice de Massa Corpórea. Desenvolvi com o intuito de treinar minhas habilidades, aprender novas funcionalidades do JavaScript e conseguir reutilizar o código para futuros projetos. Techs: HTML/CSS e JavaScript.'
          linkOnline="https://joaoalisonti.github.io/IMC-Calc/"
          linkGithub="https://github.com/JoaoAlisonTI/IMC-Calc"
        />
        </div>
      </section>  
      <Footer />
    </>
    )
}