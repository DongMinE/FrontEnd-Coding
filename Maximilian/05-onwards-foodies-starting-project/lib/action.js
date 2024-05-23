"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

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
    console.log(prevState);
    // console.log(formData);
    return {
      message: "허용되지 않는 값 입니다.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
