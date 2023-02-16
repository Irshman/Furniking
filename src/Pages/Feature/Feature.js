import React from 'react'
import { MFeatureItem } from '../../Components/FeatureItem/FeatureItem'
import {motion} from 'framer-motion'
import styles from './Feature.module.scss'
import featere_1 from '../../assets/img/free-delivery.png'
import featere_2 from '../../assets/img/Present.png'
import featere_3 from '../../assets/img/wallet.png'
import featere_4 from '../../assets/img/support.png'

const Feature = () => {

  const features = [
    {id: 1, img: featere_1, title: 'Free Shipping', text: 'Orders over $100' },
    {id: 2, img: featere_2, title: 'Smart Gift Card', text: 'Buy $1000 to get card' },
    {id: 3, img: featere_3, title: 'Quick Payment', text: '100% secure payment' },
    {id: 4, img: featere_4, title: '24/7 Support', text: 'Quick support' },
  ]

  const animationL = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      transition: { 
        ease: "easeOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }

  return (
    <motion.section 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.feature}>
      <div className='container'>
        <div className={styles.feature__wrap}>
          {features.map(item => <MFeatureItem custom={4} variants={animationL}  whileHover={{ scale: 1.2 }} key={item.id} img={item.img} title={item.title} text={item.text} />)}
        </div>
      </div>
    </motion.section>
  )
}

export default Feature