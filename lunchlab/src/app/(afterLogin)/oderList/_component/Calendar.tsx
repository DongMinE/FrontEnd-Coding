"use client";

import React, { useState, useRef, useEffect } from "react";
import { format, startOfWeek, addDays, subWeeks, addWeeks, getDay } from "date-fns";
import style from "./Calendar.module.css";

export default function CustumCalendar() {
  const today = new Date();
  const dateInfoRef = useRef<HTMLDivElement>(null);

  // const swiperRef = useRef(null);
  function initWeekDays(today: Date) {
    const startCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
    return Array.from({ length: 7 }).map((_, idx) => {
      const date = addDays(startCurrentWeek, idx);
      return {
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        date: format(date, "d"),
        isToday: format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"),
      };
    });
  }
  // 이전 주, 현재 주, 다음 주를 관리
  const [weekArray, setWeekArray] = useState({
    previousWeek: initWeekDays(subWeeks(today, 1)),
    currentWeek: initWeekDays(today),
    nextWeek: initWeekDays(addWeeks(today, 1)),
  });

  function handleCenteredDate() {}

  useEffect(() => {
    if (dateInfoRef.current) {
      const scrollPosition = 600;
      dateInfoRef.current.scrollLeft = scrollPosition;
    }
    console.log(dateInfoRef?.current?.scrollLeft);
  }, []);

  useEffect(() => {
    let previousValue = 0;
    const handleScroll = () => {
      if (dateInfoRef.current) {
        const currentScroll = dateInfoRef.current.scrollLeft;

        if (Math.abs(currentScroll - previousValue) >= 150) {
          console.log(currentScroll);
          previousValue = currentScroll;
        }
      }
    };
    const scrollElement = dateInfoRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [dateInfoRef]);

  return (
    <section className={style.container}>
      <div className={style.calendarBox}>
        <div>주문내역</div>
        <div className={style.monthDiv}>
          <span className={style.monthSpan}>{format(today, "M")}월</span>
        </div>
        <div className={style.dateInfoBox} ref={dateInfoRef}>
          <div className={style.dateInfo}>
            {weekArray.previousWeek.map(({ dayOfWeek, date }, idx) => (
              <div className={style.dayContainer} key={`prev-${idx}`}>
                <div className={style.weekSpan}>{dayOfWeek[idx % 7]}</div>
                <div className={style.daySpan}>{date}</div>
              </div>
            ))}
            {weekArray.currentWeek.map(({ dayOfWeek, date, isToday }, idx) => (
              <div className={style.dayContainer2} key={`cur-${idx}`}>
                <div className={style.weekSpan}>{isToday ? <span>오늘</span> : dayOfWeek[idx % 7]}</div>
                <div className={style.daySpan}>{date}</div>
              </div>
            ))}
            {weekArray.nextWeek.map(({ dayOfWeek, date }, idx) => (
              <div className={style.dayContainer} key={`next-${idx}`}>
                <div className={style.weekSpan}>{dayOfWeek[idx % 7]}</div>
                <div className={style.daySpan}>{date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
