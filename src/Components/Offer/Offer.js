import React from 'react';
import {MOfferItem} from '../OfferItem/OfferItem';
import {motion} from 'framer-motion'
import styles from './Offer.module.scss';

import bgItem from '../../assets/img/item1.png';
import bgItem2 from '../../assets/img/item2.png';
import bgItem3 from '../../assets/img/item3.png';

const Offer = () => {
  const offers = [
    { 
      id: 1,
      title: 'Modern Furniture Collections',
      text: 'Starting from $500',
      img: bgItem,
      status: 'main'
    },
    { 
      id: 2,
      title: 'Geometric Bookcase', 
      text: 'Up to 20% discount', 
      img: bgItem2,
      status: 'added'
    },
    {
      id: 3,
      title: 'Minimal Sofa collections ',
      text: 'Sale upto 40% discount',
      img: bgItem3,
      status: 'added'
    },
  ];

  const animationL = {
    hidden: {
      x: -70,
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
  const animationR = {
    hidden: {
      x: 70,
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
      className={styles.offers}>
      <div className='container'>
        <div className={styles.offers__wrap}>
          <div className={styles.offers__main}>
            {(offers.map(offer => offer.status === 'main' ? <MOfferItem variants={animationL} key={offer.id} title={offer.title} text={offer.text} img={offer.img} /> : null))}
          </div>
          <div className={styles.offers__added}>
          {(offers.map(offer => offer.status === 'added' ? <MOfferItem custom={2} variants={animationR} key={offer.id} title={offer.title} text={offer.text} img={offer.img} /> : null))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Offer;
