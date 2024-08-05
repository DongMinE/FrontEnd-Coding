"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(Text) {
  return !Text || Text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // console.log("formData: ", formData);
    // console.log("prevState: ", prevState);
    // console.log(formData);
    return {
      message: "허용되지 않는 값 입니다.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout"); // 해당페이지 중첩만 검사
  // revalidatePath("/",'layout'); //모든 페이지 재검사

  redirect("/meals");
}
