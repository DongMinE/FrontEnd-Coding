"use client";

import React, { useState } from "react";
import { format, startOfWeek, addDays, addWeeks, subWeeks } from "date-fns";
import style from "./CustumCalendar.module.css";

export default function CustumCalendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 0 }); // 일요일 시작

  // 날짜 배열 생성
  const days = Array.from({ length: 7 }).map((_, i) => format(addDays(startOfCurrentWeek, i), "d"));

  // 요일 배열 생성
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 다음 주로 이동
  const nextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  // 이전 주로 이동
  const prevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  return (
    <section className={style.container}>
      <button onClick={prevWeek} style={{ marginRight: "10px" }}>
        {"<"}
      </button>
      <button onClick={nextWeek} style={{ marginLeft: "10px" }}>
        {">"}
      </button>
      <div className={style.calendarBox}>
        <div>주문내역</div>
        <div className={style.monthDiv}>
          {/* 월 */}
          <span className={style.monthSpan}>{format(currentWeek, "M")}월</span>
        </div>
        <div className={style.weekDiv}>
          {/* 요일 */}
          {daysOfWeek.map((day, index) => (
            <span className={style.weekSpan} key={index}>
              {index + 1 === parseInt(format(new Date(), "e")) ? <b>오늘</b> : day}
            </span>
          ))}
        </div>
        <div className={style.dayDiv}>
          {/* 날짜 */}
          {days.map((day, index) => (
            <span className={style.daySpan} key={index}>
              {day}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
