import React, { useEffect, useState, useRef } from 'react'
import styles from './SpecialOffer.module.scss'

import Button from '../../UI/Button/Button'

const SpecialOffer = ({title, img, text, newPrice, oldPrice}) => {
  const [timerDay, setTimerDay] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdawnDate = new Date("Febuary 25, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdawnDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDay(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  }, [])

  return (
    <div className={styles.offer}>
      <picture className={styles.offer__img}>
        <img src={img} alt={title} />
      </picture>
      <div className={styles.offer__info}>
        <h4 className={styles.offer__title}>{title}</h4>
        <p className={styles.offer__text}>{text}</p>
        <div className={styles.offer__wrap}>
          <div className={styles.offer__price}>
            <span className={styles.offer__new_price}>${newPrice}</span>
            <span className={styles.offer__old_price}>${oldPrice}</span>
          </div>
          <Button text={"Shop now"} />
        </div>
        <div className={styles.offer__time}>
          <div className={styles.offer__time_item}>{timerDay}<span>Days</span></div>
          <div className={styles.offer__time_item}>{timerHours}<span>HRS</span></div>
          <div className={styles.offer__time_item}>{timerMinutes}<span>MIN</span></div>
          <div className={styles.offer__time_item}>{timerSeconds}<span>secs</span></div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer