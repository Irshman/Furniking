import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import SliderInformation from '../SliderInfo/SliderInfo';
import FurnitureItem from '../FurnitureItem/FurnitureItem';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Slider.module.scss';
import './slider.scss'; // only modifications swiper class

import bg1 from '../../assets/img/Furniture1.png';
import bg2 from '../../assets/img/minifurniture1.png';
import bg3 from '../../assets/img/minifurniture2.png';
import bg4 from '../../assets/img/minifurniture3.png';

const Slider =() => {
  const sliders = [
    { id: 1, bg: bg1, price: 130, name: 'Home Chair' },
    { id: 2, bg: bg2, price: 120, name: 'Office Desk Chair' },
    { id: 3, bg: bg3, price: 180, name: '	Home Alisa Sofa' },
    { id: 4, bg: bg4, price: 250, name: 'Modern Chair' },
  ];

  return (
    <Swiper
      className={styles.swiper}
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet swiper_class`,
      }}
      speed={600}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}>
      {sliders.map((slider, index) => {
        return (
          <SwiperSlide key={index}>
            <SliderInformation />
            <picture className={styles.swiper__img}>
              <img src={slider.bg} alt={'bg'} />
            </picture>
            <div className={styles.swiper__items}>
              {sliders
                .filter((sl) => slider.id !== sl.id)
                .map((slider, key) => {
                  return (
                    <FurnitureItem
                      key={key}
                      image={slider.bg}
                      name={slider.name}
                      price={slider.price}
                    />
                  );
                })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
