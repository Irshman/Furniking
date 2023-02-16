import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs'

import styles from './SocialList.module.scss'

const SocialList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}><a href='#'><BsFacebook /></a></li>
      <li className={styles.list__item}><a href='#'><BsTwitter /></a></li>
      <li className={styles.list__item}><a href='#'><BsInstagram /></a></li>
      <li className={styles.list__item}><a href='#'><BsPinterest /></a></li>
    </ul>
  )
}

export default SocialList