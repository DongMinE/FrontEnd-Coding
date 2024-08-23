import Calendar from "./_component/Calendar";
import CustumCalendar from "./_component/CustumCalendar";
import CustumCalendarTest from "./_component/CustumCalendarTest";
import style from "./page.module.css";
import { subMonths } from "date-fns";

export default function OderList() {
  return (
    <section className={style.container}>
      <CustumCalendarTest />
    </section>
  );
}
