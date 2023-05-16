import { BsCloudArrowUp, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

import styles from '@/components/CardProject/CardProject.module.css'

export default function CardProject(props) {
  const { imgSrc, projectName, projectDescription, linkOnline, linkGithub } = props;
  
  return (
    
    <div className={styles.project}>
    <img src="https://github.com/JoaoAlisonTI.png" alt="Imagem do projeto" />
    <div className={styles.info}>
    <h4>{projectName}</h4>
    <p>{projectDescription}</p>
    <Link className={styles.linkOn} href="{linkOnline}" target="_blank">
    <BsCloudArrowUp />
    </Link>
    <Link className={styles.linkGit} href="{linkGithub}" target="_blank">
    <BsGithub />
    </Link>
    
    </div>
    </div>
    
    )
}