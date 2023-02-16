import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from '../../UI/Select/Select';
import ButtonGhost from '../../UI/ButtonGhost/ButtonGhost';
import styles from './TopHeader.module.scss';

const TopHeader = () => {
  const [selected, setSelected] = useState('English (USD)');
  const options = ['English (USD)', 'Ukraine (UA)', 'Franch (FR)'];

  const animationL = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      transition: { ease: "easeOut", duration: 1 },
      opacity: 1
    }
  }
  const animationR = {
    hidden: {
      x: 50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 1 }
    }
  }

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.top_header}
    >
      <div className='container'>
        <div className={styles.top_header__body}>
          <motion.h4 
            variants={animationL}
            className={styles.top_header__title}
          >
            Welcome to our online shop
          </motion.h4>
          <motion.div 
            variants={animationR}
            className={styles.top_header__wrap}>
            <Select
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
            <hr className={styles.top_header__hr} />
            <ButtonGhost />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TopHeader;
