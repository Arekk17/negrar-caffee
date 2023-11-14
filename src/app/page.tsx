import styles from './page.module.css'
import HomeLayout from './layout/HomeLayout/HomeLayout'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeLayout />
    </main>
  )
}
