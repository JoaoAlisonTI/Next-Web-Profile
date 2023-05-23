import styles from '@/components/SkillsStats/SkillsStats.module.css'

interface SkillsStatsProps {
  skill: string;
  stats: string;
  maxWidthPer: string;
}

export default function SkillsStats(props: SkillsStatsProps) {
  
  return (
    
    <div className={styles.skillMain}>
    
    <h3 className={styles.skillName}>{props.skill}</h3>
    <div className={styles.skillBar}>
      <div className={styles.skillPer} per="{props.stats}" style={{ maxWidth: '{prop.maxWidthPer}' }} ></div>
    </div>
    
    </div>
    
    )
}