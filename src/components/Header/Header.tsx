import { useState } from "react";
import styles from '@/components/Header/Header.module.css'
import { SlMenu } from 'react-icons/sl'
import { FaRegSun } from 'react-icons/fa'

export default function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
    <div className={styles.Menu}>
      {menuOpen && (
        <div className={styles.menu}>
          <h1>Olá mundo</h1>
          <button onClick={handleMenuClose}>Fechar Menu</button>
        </div>
      )}
    </div>
    
    <div className={styles.myHeader}>
      <button onClick={handleMenuClick} className={styles.btnMenu}>
      <SlMenu />
      </button>
      <h3 className={styles.logoTitle}>João Alison ⚡</h3>
      <button className={styles.btnChange}>
      <FaRegSun />
      </button>
    </div>
    </>
    )
}