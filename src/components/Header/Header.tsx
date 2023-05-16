import { useState } from "react";
import styles from '@/components/Header/Header.module.css'
import { SlMenu } from 'react-icons/sl'
import { FaRegSun } from 'react-icons/fa'

export default function Header() {
  
  
  return (
    <>
    <div className={styles.myHeader}>
      <button className={styles.btnMenu}>
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