import { BsCloudArrowUp, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/components/CardProject/CardProject.module.css'

interface CardProjectProps {
  imgSrc: string;
  projectName: string;
  projectDescription: string;
  linkOnline?: string;
  linkGithub?: string;
}

export default function CardProject(props: CardProjectProps) {
  const linkGH = props.linkGithub || '';
  const linkON = props.linkOnline || '';
  
  return (
    <>
      <div className={styles.project}>
        <Image className={styles.imgProject} src={props.imgSrc} height={170} alt="Imagem do projeto" />
        
        <div className={styles.info}>
          <h4>{props.projectName}</h4>
          <p>{props.projectDescription}</p>
          
          <div className={styles.contentLinks}>
            {props.linkOnline && (
            <Link href={props.linkOnline} target="_blank">
              <button className={styles.btnOnline}>
                Acesse online
              </button>
            </Link>
            )}
            {props.linkGithub && (
              <Link href={props.linkGithub} target="_blank">
                <button className={styles.btnGit} >
                <BsGithub />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
