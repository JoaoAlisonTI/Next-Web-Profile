import styles from '@/components/Header/Header.module.css'

export default function Header() {
  return (
    
    <div className={styles.myHeader}>
      <button className={styles.btnMenu}>
      <i></i>
      </button>
      <h3 className={styles.logoTitle}>João Alison ⚡</h3>
      <button className={styles.btnChange}>
      <i></i>
      </button>
    </div>
    
    )
}