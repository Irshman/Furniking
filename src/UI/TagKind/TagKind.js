import React from 'react';
import {TbTag} from 'react-icons/tb'

import styles from './TagKind.module.scss'

const TagKind = ({text}) => {
  return (
    <div className={styles.tag}>
      <TbTag />
      <span>{text}</span>
    </div>
  )
}

export default TagKind