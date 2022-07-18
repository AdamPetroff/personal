import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from 'react'

const blueSkyStart = "rgb(124, 166, 200)"
const horizonStart = "rgba(255, 205, 104, 0.314)"

const Home: NextPage = () => {
  const layoutRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress, ...other } = useScroll({ container: layoutRef });
  scrollYProgress
  
  const sunPosition = useTransform(scrollYProgress, [0, 0.8], ["0%", "250%"])
  const backgroundGradient = useTransform(scrollYProgress, [0, 0.8, 1], [
    `linear-gradient(180deg, #7CA6C8 10.31%, rgba(232, 154, 108, 0.58) 26.93%, rgba(255, 205, 104, 0.314) 69.5%, rgba(227, 112, 105, 0) 100%)`, 
    `linear-gradient(180deg, #656773 10%, #B2A07C 26.93%, #FEB449 60%, #FEB449 100%)`,
    `linear-gradient(180deg, #032552 30%, #B2A07C 40%, #FEB449 60%, #FAC799 100%)`
  ])
  const sunGradient = useTransform(scrollYProgress, [0, 0.8], [`radial-gradient(orange, transparent 0px`, `radial-gradient(orange, transparent 400px`])
  const sunOpacity = useTransform(scrollYProgress, [0, 0.7, 0.8, 1], [1, 1, 0.8, 0])
  const moonPosition = useTransform(scrollYProgress, [0, 0.7, 1], ["-10%", "200%", "150%"])
  
  // useEffect(() => {
  //   _horizontColor.onChange((val) => {
  //     const [blueSky, horizon, sunGradient] = val.split(" & ")
  //     setColors({ blueSky, horizon, sunGradientSize: sunGradient })
  //     console.log(blueSky, horizon)
  //   })
  // }, [])

  return (
    <div className="">
      <Head>
        <title>Adam Petroff</title>
        <meta name="description" content="Personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <motion.div ref={layoutRef} className={styles.layout} style={{ background: `linear-gradient(180deg, ${colors.blueSky} 10.31%, rgba(232, 154, 108, 0.58) 26.93%, ${colors.horizon} 69.5%, rgba(227, 112, 105, 0) 98.03%)` }}> */}
        <motion.div ref={layoutRef} className={styles.layout} style={{ background: backgroundGradient }}>
          <div className={styles.sunsetScene}>
            {/* <div> */}
            <div className={styles.sunsetScene__title}>
              <h1>Adam Petroff</h1>
            </div>
            <motion.div className={styles.sunsetScene__sun} style={{ top: sunPosition, background: sunGradient, opacity: sunOpacity }}>
              <img src='/img/sun.webp' alt="sun" /> 
            </motion.div>
            <motion.div className={styles.sunsetScene__moon} style={{ top: moonPosition }}>
              <img src='/img/moon.webp' alt="moon" /> 
            </motion.div>
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
              <img src='/img/cloud4.png' alt="" /> 
            </div>
            <div className={styles.sunsetScene__cloud5}>
              <img src='/img/cloud3.webp' alt="" /> 
            </div>
            <div style={{ minHeight: "200vh" }}></div>
            {/* </div> */}
            
          </div>
          <div className={styles.cloudScene}>
            <div className={styles.cloudScene__cloudTransition}>
              <div className={styles.cloudScene__cloudTransition__1}>
                <img src='/img/cloud5.webp' alt="" /> 
              </div>
              <div className={styles.cloudScene__cloudTransition__2}>
                <img src='/img/cloud5.webp' alt="" /> 
              </div>
              <div className={styles.cloudScene__cloudTransition__3}>
                <img src='/img/cloud5.webp' alt="" /> 
              </div>
              <div className={styles.cloudScene__cloudTransition__4}>
                <img src='/img/cloud5.webp' alt="" /> 
              </div>
            </div>

            <div className={styles.cloudScene__cloud1}>
              <img src='/img/cloud5.webp' alt="" /> 

            </div>
            <div className={styles.cloudScene__cloud1b}>
              <img src='/img/cloud5.webp' alt="" /> 

            </div>

<div className={styles.cloudScene__cloud3}>
              <img src='/img/cloud8.png' alt="" /> 

            </div>

            <div className={styles.cloudScene__cloud2}>
              <img src='/img/cloud6.png' alt="" /> 

            </div>

            <div className={styles.cloudScene__ocean1}>
              <img src='/img/ocean2.png' alt="" /> 

            </div>
            <div className={styles.footer}>
              <span>Contact: ado011235@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home
