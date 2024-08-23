import React, { ReactNode } from "react";
import style from "./layout.module.css";

type Props = {
  children: ReactNode;
};

export default function BeforeLoginLayout({ children }: Props) {
  return <section className={style.container}>{children}</section>;
}
