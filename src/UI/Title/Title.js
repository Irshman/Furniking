import React, {forwardRef} from 'react'
import {motion} from 'framer-motion'
import styles from './Title.module.scss'

const Title = forwardRef(({text}, ref) => {
  return (
    <h2 ref={ref} className={styles.title}>{text}</h2>
  )
})

export const MTitle = motion(Title)
export default Title