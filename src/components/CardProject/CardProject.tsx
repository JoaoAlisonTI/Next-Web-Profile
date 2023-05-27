import { BsCloudArrowUp, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/components/CardProject/CardProject.module.css'

interface CardProjectProps {
  imgSrc: string;
  projectName: string;
  projectDescription: string;
  linkOnline: string;
  linkGithub: string;
}

export default function CardProject(props: CardProjectProps) {
  
  return (
    <>
    <div className={styles.project}>
    <Image src="{props.imgSrc}" width={265} height={180} alt="Imagem do projeto" />
    <div className={styles.info}>
    <h4>{props.projectName}</h4>
    <p>{props.projectDescription}</p>
    <Link className={styles.linkOn} href="{linkOnline}" target="_blank">
    <BsCloudArrowUp />
    </Link>
    <Link className={styles.linkGit} href="{linkGithub}" target="_blank">
    <BsGithub />
    </Link>
    
    </div>
    </div>
    </>
    )
}