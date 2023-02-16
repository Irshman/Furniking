import React from 'react'
import Logo from '../../UI/Logo/Logo'
import List from '../../Components/List/List';
import styles from './Foouter.module.scss';
import SocialList from '../../Components/SocialList/SocialList';
import {motion} from 'framer-motion'

const Foouter = () => {

  const animationB = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      transition: { 
        ease: "easeOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }

  return (
    <motion.footer 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.footer}>
      <div className='container'>
        <motion.div 
          custom={1}
          variants={animationB}
          className={styles.footer__top}>
          <div className={styles.footer__top_left}>
            <Logo />
            <p className={styles.footer__top_text}>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className={styles.footer__top_social}>
              <SocialList />
            </div>
          </div>
          <div className={styles.footer__top_right}>
            <List />
            <List />
            <List />
          </div>
        </motion.div>

        <motion.div 
          custom={2}
          variants={animationB}
          className={styles.footer__bottom}>
          <p className={styles.footer__bottom_text}>© 2023 Funking - All rights reserved.</p>
          <ul className={styles.footer__bottom_list}>
            <li><a href='#'>Privacy</a></li>
            <li><a href='#'>Security</a></li>
            <li><a href='#'>Terms</a></li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Foouter