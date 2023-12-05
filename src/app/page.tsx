import Image from 'next/image'
import styles from './page.module.css'
import { Navigation } from './components/Navigation/Navigation'
import { LightButton } from './components/Buttons/LightButton'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* navigation */}
      <Navigation />
    </main>
  )
}
