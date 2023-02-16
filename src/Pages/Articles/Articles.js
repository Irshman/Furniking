import React from 'react'
import ArticleItem from '../../Components/ArticleItem/ArticleItem'
import {MTitle} from '../../UI/Title/Title'
import {motion} from 'framer-motion'
import styles from './Articles.module.scss';
import article_1 from '../../assets/img/article_1.png'
import article_2 from '../../assets/img/article_2.png'
import article_3 from '../../assets/img/article_3.png'
import article_4 from '../../assets/img/article_4.png'

const Articles = () => {

  const articles = [
    {id: 1, title: 'Begineer guide buying minimal sofa', date: '23 September 2022', img: article_1, tag: 'Furniture'},
    {id: 2, title: 'Buying best minimal computer table', date: '23 September 2022', img: article_2, tag: 'TABLE'},
    {id: 3, title: 'How to choose best modern bench', date: '23 September 2022', img: article_3, tag: 'Bench'},
    {id: 4, title: 'Best Summer OutfitStyle in this Country', date: '23 September 2022', img: article_4, tag: 'Chair'},
  ]

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
      className='container'>
      <MTitle variants={animationT} text='Our Latest Articles' />
      <motion.div variants={animationB} className={styles.articles}>
        {articles.map(article => <ArticleItem key={article.id} title={article.title} date={article.date} img={article.img} tag={article.tag} />)}
      </motion.div>
    </motion.div>
  )
}

export default Articles