

interface SkillsStatsProps {
  skill: string;
  stats: string;
}

export default function SkillsStats(props: SkillsStatsProps) {
  
  return (
    
    <div>
    <h3>{props.skill}</h3>
    <div>{props.stats}</div>
    
    </div>
    
    )
}