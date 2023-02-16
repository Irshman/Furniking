import React, {useRef, useEffect} from 'react'
import BottomHeader from '../BottomHeader/BottomHeader';
import MiddleHeader from '../MiddleHeader/MiddleHeader';
import TopHeader from "../TopHeader/TopHeader";

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  )
}

export default Header