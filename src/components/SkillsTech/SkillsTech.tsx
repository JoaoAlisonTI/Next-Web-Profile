import Image from 'next/image'
import styled from '@/components/SkillsTech/SkillsTech.module.css'

export default function SkillsTech() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tech}>
          <Image src="/html5.svg" alt="Html5 Icon" />
        </div>
        <div className={styles.tech}>
          <Image src="/css3.svg" alt="Css3 Icon" />
        </div>
        <div className={styles.tech}>
          <Image src="/php.svg" alt="PHP Icon" />
        </div>
      </div>
    </>
    )
}