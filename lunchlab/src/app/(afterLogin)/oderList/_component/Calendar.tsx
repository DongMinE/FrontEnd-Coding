"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visibleMonth, setVisibleMonth] = useState(currentDate.getMonth());
  const swiperRef = useRef<SwiperRef>(null);

  const getWeekDates = (date: Date) => {
    const startOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(d.getDate() + i);
      return d;
    });
  };

  const handleDateClick = (date: Date) => {
    if (swiperRef.current) {
      const index = swiperRef.current.swiper.slides.findIndex((slide) => slide.dataset.date === date.toDateString());
      swiperRef.current.swiper.slideTo(index, 500);
    }
  };

  const updateVisibleMonth = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.swiper.slides;
      const visibleSlides = slides.slice(
        swiperRef.current.swiper.activeIndex,
        swiperRef.current.swiper.activeIndex + 7
      );
      const visibleDates = visibleSlides
        .map((slide) => slide.dataset.date)
        .filter((date): date is string => date !== undefined) // undefined가 아닌 문자열만 필터링
        .map((date) => new Date(date));

      const monthCounts: { [key: number]: number } = {};
      visibleDates.forEach((date) => {
        monthCounts[date.getMonth()] = (monthCounts[date.getMonth()] || 0) + 1;
      });
      const newVisibleMonth = Object.keys(monthCounts).reduce((a, b) =>
        monthCounts[Number(a)] > monthCounts[Number(b)] ? a : b
      );
      setVisibleMonth(Number(newVisibleMonth));
    }
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.monthDisplay}>{visibleMonth + 1}월</div>
      <Swiper
        slidesPerView={7}
        centeredSlides
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        onSlideChange={updateVisibleMonth}
        ref={swiperRef}
        className={styles.swiper}
      >
        {getWeekDates(currentDate).map((date, idx) => (
          <SwiperSlide key={idx} data-date={date.toDateString()} onClick={() => handleDateClick(date)}>
            <div className={`${styles.date} ${date.toDateString() === new Date().toDateString() ? styles.today : ""}`}>
              {date.getDate()}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Calendar;
