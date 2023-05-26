import Image from 'next/image'
import styles from '@/components/SkillsTech/SkillsTech.module.css'

export default function SkillsTech() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tech}>
          <Image src="/icons/html5.svg" alt="Html5 Icon" height={50} width={50} />
        </div>
        <div className={styles.tech}>
          <Image src="/css3.svg" alt="Css3 Icon" height={50} width={50} />
        </div>
        <div className={styles.tech}>
          <Image src="/php.svg" alt="PHP Icon" height={50} width={50} />
        </div>
        <div className={styles.tech}>
          <Image src="/bootsrap5.svg" alt="Bootstrap5 Icon" height={50} width={50} />
        </div>
        <div className={styles.tech}>
          <Image src="/angular.svg" alt="Angular Icon" height={50} width={50} />
        </div>
        <div className={styles.tech}>
          <Image src="/nodejs.svg" alt="Nodejs Icon" height={50} width={50} />
        </div>
      </div>
    </>
    )
}