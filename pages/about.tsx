import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">&larr; Go Back</Link>
        </p>
        <div className={styles.myDIV}>Hover over me</div>
        <div className={styles.hide}>I was hidden</div>
      </main>
    </div>
  )
}
