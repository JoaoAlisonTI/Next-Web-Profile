import { useState } from "react";
import styles from '@/components/Header/Header.module.css'
import { SlMenu } from 'react-icons/sl'
import { MdClose } from 'react-icons/md'
import { FaRegSun, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

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
    <div className={styles.myHeader}>
      <button onClick={handleMenuClick} className={styles.btnMenu}>
      <SlMenu />
      </button>
      <span className={styles.logoTitle}>
      <Image src="" alt="logo" 
      width={30} height={30} 
      /></span> 
      <button className={styles.btnChange}>
      <FaRegSun />
      </button>
    </div>
    
    <div className={styles.menu}>
      {menuOpen && (
        <div className={styles.menuContent}>
          <div className={styles.divButton}>
          <button className={styles.btnMenu} onClick={handleMenuClose}>
          <MdClose />
          </button>
          </div>
          <div className={styles.navLinks}>
              <a>Home</a>
              <a>Sobre mim</a>
              <a>Projetos</a>
          </div>
          <div className={styles.socialMedia}>
            <a className={styles.btnMedia}><FaGithub /></a>
            <a className={styles.btnMedia}><FaLinkedin /></a>
            <a className={styles.btnMedia}><FaInstagram /></a>
          </div>
        </div>
      )}
    </div>
    </>
    ) 
}