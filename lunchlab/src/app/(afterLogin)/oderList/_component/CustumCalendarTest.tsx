"use client";

import React, { useState } from "react";
import { format, startOfWeek, addDays, addWeeks, subWeeks } from "date-fns";
import style from "./CustumCalendarTest.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function CustumCalendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 0 }); // 일요일 시작
  const days = Array.from({ length: 7 }).map((_, i) => format(addDays(startOfCurrentWeek, i), "d"));
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const nextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  const prevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  return (
    <section className={style.container}>
      <div className={style.calendarBox}>
        <div>주문내역</div>
        <div className={style.monthDiv}>
          <button onClick={prevWeek}>{"<"}</button>
          <span className={style.monthSpan}>{format(currentWeek, "M")}월</span>
          <button onClick={nextWeek}>{">"}</button>
        </div>
        <div className={style.dateInfo}>
          <div className={style.weekDiv}>
            {daysOfWeek.map((day, index) => (
              <div className={style.weekSpan} key={index}>
                {index + 1 === parseInt(format(new Date(), "e")) ? <b>오늘</b> : day}
              </div>
            ))}
          </div>
          <div className={style.dayDiv}>
            {days.map((day, index) => (
              <div className={style.daySpan} key={index}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
