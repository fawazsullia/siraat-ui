import Dashboard from '../components/Dashboard/Dashboard'
import HeadComponent from '../components/Head/Head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <HeadComponent title="Siraat : Making sourcing easier" description="Blah blah" />
      <main className={styles.main}>
        <Dashboard />
      </main>
    </>
  )
}
