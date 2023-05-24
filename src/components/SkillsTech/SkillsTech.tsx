import Image from 'next/image'
import styles from '@/components/SkillsTech/SkillsTech.module.css'

export default function SkillsTech() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tech}>
          <Image src="/assets/html5.svg" alt="Html5 Icon" />
        </div>
        <div className={styles.tech}>
          <Image src="/assets/css3.svg" alt="Css3 Icon" />
        </div>
        <div className={styles.tech}>
          <Image src="/assets/php.svg" alt="PHP Icon" />
        </div>
      </div>
    </>
    )
}