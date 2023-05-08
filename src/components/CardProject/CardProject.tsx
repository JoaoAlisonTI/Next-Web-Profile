import styles from '@/components/CardProject/CardProject.module.css'


export default function CardProject(props) {
  const { imgSrc, projectName, projectDescription, projectLink } = props;
  
  return (
    
    <div className={styles.project}>
    <img src="https://github.com/JoaoAlisonTI.png" alt="Imagem do projeto" />
    <div className={styles.info}>
    <h4>{projectName}</h4>
    <p>{projectDescription}</p>
    <a href="{projectLink}" target="_blank">access
    </a>
    </div>
    </div>
    
    )
}