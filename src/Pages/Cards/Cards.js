import React, { useState } from 'react'
import styles from './Cards.module.scss';
import {MTitle} from '../../UI/Title/Title';
import {MTabs} from '../../UI/Tabs/Tabs';
import Card from '../../Components/Card/Card';
import {motion} from 'framer-motion'


// Images 
import item1 from '../../assets/img/items/1.png'
import item2 from '../../assets/img/items/2.png'
import item3 from '../../assets/img/items/3.png'
import item4 from '../../assets/img/items/4.png'
import item5 from '../../assets/img/items/5.png'
import item6 from '../../assets/img/items/6.png'
import item7 from '../../assets/img/items/7.png'
import item8 from '../../assets/img/items/8.png'

const Cards = () => {
  const goods = [
    {id: 1, img: item1, status_text: 'new', status: "new", kind: "Chair", title: "Plastic dining chair", new_price: 130, old_price: 150, stars_value: 3},
    {id: 2, img: item2, status_text: 'new', status: "new", kind: "Chair", title: "Minimal iconic chair", new_price: 130, old_price: 150, stars_value: 3},
    {id: 3, img: item3, status_text: 'sale', status: "sale", kind: "Chair", title: "Dining chairs", new_price: 130, old_price: 150, stars_value: 1},
    {id: 4, img: item4, status_text: 'sale', status: "sale", kind: "Chair", title: "Buskbo armchair ", new_price: 130, old_price: 150, stars_value: 3},
    {id: 5, img: item5, status_text: 'sale', status: "sale", kind: "Chair", title: "Modern chairs", new_price: 130, old_price: 150, stars_value: 4},
    {id: 6, img: item6, status_text: 'sale', status: "sale", kind: "Chair", title: "Plastic dining chair", new_price: 130, old_price: 150, stars_value: 3},
    {id: 7, img: item7, status_text: 'new', status: "new", kind: "Chair", title: "Minimal Wood chair", new_price: 130, old_price: 150, stars_value: 4},
    {id: 8, img: item8, status_text: 'new', status: "new", kind: "Chair", title: "Elegent wood chair", new_price: 130, old_price: 150, stars_value: 5},
  ]

  const [currentTab, setCurrentTab] = useState('all'); 
  const [currentGoods, setCurrentGoods] = useState(goods); 

  const tabs = [
    {
        id: 1,
        key: 'all',
        tabTitle: 'Top Products',
    },
    {
        id: 2,
        key: 'new',
        tabTitle: 'New Arrivals',
    },
    {
        id: 3,
        key: 'sale',
        tabTitle: 'Best Sellers',
    }
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    if(e.target.id === 'all') {
      setCurrentGoods(goods)
      return
    }
    setCurrentGoods(goods.filter(good => good.status === e.target.id)); 
  }

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
  const animationT = {
    hidden: {
      y: -100,
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
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.cards}>
      <div className='container'>
        <MTitle variants={animationT} text={"TRENDING"} />
        <MTabs custom={2} variants={animationB} tabs={tabs} currentTab={currentTab} handleTabClick={handleTabClick} />
        <motion.div 
          custom={2}
          variants={animationB}
          className={styles.cards__items}>
          {currentGoods.map(item => <Card key={item.id} img={item.img} status_text={item.status_text} status={item.status} kind={item.kind} title={item.title} new_price={item.new_price} old_price={item.old_price} stars_value={item.stars_value} />)}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Cards