import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Cryptos</title>
        <meta name="description" content="App to show nice animation using framer motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Favorite Cryptos
        </h1>

        <p className={styles.description}>
          This project show data about particular crypto with good looking UI and some awesome animations.
        </p>

        <div className={styles.grid}>
          <a href="bitcoin" className={styles.card}>
            <h2>Bitcoin</h2>
          </a>

          <a href="etherum" className={styles.card}>
            <h2>Etherum</h2>
          </a>

          <a
            href="solana"
            className={styles.card}
          >
            <h2>Solana</h2>
          </a>

          <a
            href="matic"
            className={styles.card}
          >
            <h2>Matic</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
