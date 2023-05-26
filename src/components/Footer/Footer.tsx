import styles from '@/components/Footer/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div className={styles.myFooter}>
              <p>2023 © All Rights Reserved.</p>
              <p>Website developed by <Link className={styles.linkGithub} href="https://github.com/JoaoAlisonTI" target="_blank">
              <a>
              JoaoAlisonTI⚡
              </a>
              </Link>
              </p>
            </div>
    </>
    )
}