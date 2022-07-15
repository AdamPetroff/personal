import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Adam Petroff</title>
        <meta name="description" content="Personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.sunsetScene}>
          <div className={styles.sunsetScene__title}>
            <h1>Adam Petroff</h1>
          </div>
          <div className={styles.sunsetScene__sun}>
            <img src='/img/sun.webp' alt="sun" /> 
          </div>
          <div className={styles.sunsetScene__moon}>
            <img src='/img/moon.webp' alt="moon" /> 
          </div>
          <div className={styles.sunsetScene__cloud1}>
            <img src='/img/cloud1.png' alt="" /> 
          </div>
          <div className={styles.sunsetScene__cloud2}>
            <img src='/img/cloud1.png' alt="" /> 
          </div>
          <div className={styles.sunsetScene__cloud4}>
            <img src='/img/cloud2b.png' alt="" /> 
          </div>
          <div className={styles.sunsetScene__cloud3}>
            <img src='/img/cloud2b.png' alt="" /> 
          </div>
          <div className={styles.sunsetScene__cloud5}>
            <img src='/img/cloud3.webp' alt="" /> 
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
