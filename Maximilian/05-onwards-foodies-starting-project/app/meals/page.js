import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "맛있는 음식 공유하기",
  description: "맛있는 식사들의 레시피를 둘럽세요",
};

export default function MealsPage() {
  async function Meals() {
    console.log("음식 가져오는 중");
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>당신만의 </span> 맛있는 음식을 만들어보세요
        </h1>
        <p>가장 좋아하는 음식의 레시피를 고르고, 만들어보세요!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">레시피를 공유하는건 어떠세요?</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
