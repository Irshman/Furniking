import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styles from './Select.module.scss';

const Select = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.select}>
      <div
        onClick={(e) => setIsActive(!isActive)}
        className={styles.select__header}>
        <span className={styles.select__current}>{selected}</span>
        <MdKeyboardArrowDown />
      </div>
      {isActive ? (
        <div className={styles.select__body}>
          {options.map((item) => (
            <div 
              key={item}
              onClick={(e) => {
                setSelected(item);
                setIsActive(false);
              }}
              className={styles.select__item}>
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
