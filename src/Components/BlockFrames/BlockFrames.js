import React from 'react'
import CircleFrame from '../../UI/CircleFrame/CircleFrame';

import styles from './BlockFrames.module.scss'

const BlockFrames = () => {
  return (
    <section className={styles.frames}>
      <CircleFrame type={'heart'} />
      <CircleFrame type={'cart'} />
      <CircleFrame type={'eye'} />
      <CircleFrame type={'repeat'} />
    </section>
  )
}

export default BlockFrames