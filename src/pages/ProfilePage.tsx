import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import styles from '../styles/ProfilePage.module.css'

export default function ProfilePage() {
  return (
    <>
      <Header />
      <section className={styles.sectionProfile}>
              <div className={styles.myProfile}>
                <h2>Profile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </section>
              
              <section className={styles.sectionExperience}>
              <h2>Experience</h2>
              <span className={styles.circle}></span>
              <div className={styles.myExperience}>
                <h4>IT Technician - Systems Support, 08/2022 - 12/2022</h4>
                <h5>Lorem ipsum dolor sit amet, Sobral, Ceará</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <span className={styles.circle}></span>
              <div className={styles.myExperience}>
                <h4>Web developer, 03/2023 - 04/2023</h4>
                <h5>Lorem ipsum dolor sit amet, Forquilha, Ceará</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </section>
              
              <section className={styles.sectionEducation}>
              <h2>Education</h2>
              <span className={styles.circle}></span>
              <div className={styles.myEducation}>
               <h4>Technician Information - Technology</h4>
               <h5>2020 to 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
              </div>
              <span className={styles.circle}></span>
              <div className={styles.myEducation}>
               <h4>Technician Information - Technology</h4>
               <h5>2020 to 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
              </div>
              </section>
              
              <section className={styles.sectionCertifications}>
              <h2>Certifications</h2>
              <div className={styles.myCertifications}>
                <ul>
                  <li>Lorem ipsum (Lorem)</li>
                  <li>Lorem ipsum (lorem)</li>
                </ul>
              </div>
              </section>
              
              <section className={styles.sectionSkills}>
              <h2>Skills</h2>
              <div className={styles.mySkills}>
                <ul>
                  <li>Portuguese (Native)</li>
                  <li>English</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>NodeJs</li>
                  <li>NPM</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Bootsrap</li>
                  <li>Git/GitHub</li>
                  <li>Agile Methodologies</li>
                </ul>
              </div>
              </section>
      <Footer />
    </>
    )
}