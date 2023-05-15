import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">&larr; Go Back</Link>
        </p>
        <input type="text" name="name" />
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <div className={styles.myDIV}>Hover over me</div>
        <div className={styles.hide}>I was hidden</div>
      </main>
    </div>
  )
}
