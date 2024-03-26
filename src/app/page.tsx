"use client"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
          <h1 className={styles.title}>
               Hey, I&rsquo;m 👋 <br />
            Abhay   Yadav.<br/>
          </h1>
          <p className={styles.bio}>
          an <strong>IIT Jammu</strong> graduate and tech enthusiast now making strides in financial tech as a <strong>Backend Developer</strong> at <strong>HDFC Bank</strong>.
          </p>
          <a href="/resume.pdf" download className={styles.button}>
            Check out my resume!
          </a>
      </div>
    </section>
  )
}
