import { redirect } from "next/navigation";
import React from "react";
import Login from "./_component/Login";

export default function Home() {
  const session = false;

  if (session) {
    redirect("/oderList");
  }
  return <Login />;
}
