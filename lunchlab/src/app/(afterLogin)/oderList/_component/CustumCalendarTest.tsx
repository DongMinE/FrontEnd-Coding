"use client";

import React, { useState, useRef } from "react";
import { format, startOfWeek, addDays, subWeeks, addWeeks } from "date-fns";
import style from "./CustumCalendarTest.module.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function CustumCalendar() {
  const today = new Date();
  const [weekArray, setWeekArray] = useState(generateWeekDays(today));
  const swiperRef = useRef<SwiperRef>(null);
  const todayIndex = weekArray.findIndex(({ isToday }) => isToday);

  function generateWeekDays(startDate: Date) {
    //startDate가 포함된 주의 시작일을 불러옴 (기본값 기준은 일요일)
    const startOfCurrentWeek = startOfWeek(startDate);
    return Array.from({ length: 7 }).map((_, i) => {
      const date = addDays(startOfCurrentWeek, i);
      return {
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        date: format(date, "d"),
        fullDate: date, // 전체 날짜 정보
        isToday: format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"),
      };
    });
  }

  const handleReachBeginning = () => {
    console.log("끝");
    const swiperInstance = swiperRef.current?.swiper;
    const temp = weekArray[0].fullDate;
    const newStartDate = subWeeks(temp, 1);

    const newWeekDays = generateWeekDays(newStartDate);
    setWeekArray((prevDate) => [...newWeekDays, ...prevDate]);

    // // 현재 위치를 유지하기 위해 새로 추가된 슬라이드의 수만큼 이동
    setTimeout(() => {
      swiperInstance?.slideTo(newWeekDays.length - 1, 0);
    }, 0);
  };

  const handleReachEnd = () => {
    const newStartDate = addWeeks(weekArray[weekArray.length - 1].fullDate, 1);
    setWeekArray((prevDate) => [...prevDate, ...generateWeekDays(newStartDate)]);
    console.log("끝");
  };

  const handleCenteredDate = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index - 3);
    }
  };

  return (
    <section className={style.container}>
      <div className={style.calendarBox}>
        <div>주문내역</div>
        <div className={style.monthDiv}>
          <span className={style.monthSpan}>{format(today, "M")}월</span>
        </div>
        <div className={style.dateInfo}>
          <Swiper
            style={{ height: "70px" }}
            slidesPerView={7}
            onReachBeginning={handleReachBeginning}
            onReachEnd={handleReachEnd}
            modules={[Scrollbar]}
            scrollbar={{
              dragSize: "auto",
              dragClass: "swiper-scrollbar-drag",
            }}
            className={style.weekDiv}
            initialSlide={todayIndex}
            ref={swiperRef}
          >
            {weekArray.map(({ dayOfWeek, date, isToday }, index) => (
              <SwiperSlide className={style.dayContainer} key={index} onClick={() => handleCenteredDate(index)}>
                <div className={style.weekSpan}>{isToday ? <b>오늘</b> : dayOfWeek[index % 7]}</div>
                <div className={style.daySpan}>{date}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
