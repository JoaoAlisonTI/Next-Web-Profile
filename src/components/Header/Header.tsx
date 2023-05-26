import { useState } from "react";
import styles from '@/components/Header/Header.module.css'
import { SlMenu } from 'react-icons/sl'
import { MdClose } from 'react-icons/md'
import { FaRegSun, FaregMoon, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  
  
  //Script do Menu
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
      <span className={styles.logo}>
      <Image src="/logo1.png" alt="logo" 
      width={90} height={90} 
      />
      </span> 
      <ThemeToggle
        checkedIcon={<FaRegSun />}
        icon={<FaregMoon />}
      />
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
              <Link href="/">Home</Link>
              <Link href="ProfilePage">Sobre mim</Link>
              <Link href="#">Projetos</Link>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://github.com/JoaoAlisonTI" target="_blank" className={styles.btnMedia}><FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/joão-alison-de-sousa-martins" target="_blank" className={styles.btnMedia}><FaLinkedin />
            </a>
            <a href="https://www.instagram.com/joao_alison_23/" target="_blank" className={styles.btnMedia}><FaInstagram />
            </a>
          </div>
        </div>
      )}
    </div>
    </>
    ) 
}