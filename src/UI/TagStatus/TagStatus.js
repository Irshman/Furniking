import React from 'react'

import styles from './TagStatus.module.scss'

const TagStatus = ({text, status}) => {
  return (
    <>
      {status === 'new' ? <div className={styles.tag_new}>{text}</div> : status === 'sale' ? <div className={styles.tag_sale}>{text}</div> : <div className={styles.tag_discount}>-{text}%</div>}
    </>
  )
}

export default TagStatus