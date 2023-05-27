import styles from '@/components/SkillsStats/SkillsStats.module.css'

interface SkillsStatsProps {
  skill: string;
  stats: string;
  maxWidthPer: string;
}

export default function SkillsStats(props: SkillsStatsProps) {
  
  return (
    <>
    <div className={styles.skillMain}>
    
    <h3 className={styles.skillName}>{props.skill}</h3>
    <div className={styles.content}>
      <div className={styles.skillPer} style={{ maxWidth: props.maxWidthPer }}>
      <p>{props.stats}</p>
      </div>
     </div>
      
    </div>
    </>
    )
}