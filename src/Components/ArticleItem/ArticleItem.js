import React from 'react'

import styles from './ArticleItem.module.scss'
import TagKind from '../../UI/TagKind/TagKind'

const ArticleItem = ({title, img, date, tag}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.article__img}>
        <img src={img} alt={title} />
      </picture>
      <div className={styles.article__info}>
        <div className={styles.article__top}>
          <TagKind text={tag} />
          <span className={styles.article__date}>{date}</span>
        </div>
        <h3 className={styles.article__title}>{title}</h3>
        <button className={styles.article__btn}>Read more</button>
      </div>
    </article>
  )
}

export default ArticleItem