import React, {useState, forwardRef} from 'react'
import { motion } from 'framer-motion';
import styles from './SearchBar.module.scss'
import searchIcon from '../../assets/img/search.png'
import Select from '../../UI/Select/Select'


export const SearchBar = forwardRef(({}, ref) => {
  const [selected, setSelected] = useState('Sofa');
  const options = ["Sofa", "Table", "Bad", "Furniture"]

  return (
    <form ref={ref} className={styles.search}>
      <input placeholder='Search here' className={styles.search__input} type="text" />
      <Select options={options} selected={selected} setSelected={setSelected} />
      <button className={styles.search__btn}>
        <img src={searchIcon} alt={'search'} />
      </button>
    </form>
  )
})

export const MSearchBar = motion(SearchBar);
// export default SearchBar