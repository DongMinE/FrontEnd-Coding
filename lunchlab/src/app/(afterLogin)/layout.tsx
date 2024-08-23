import { ReactNode } from "react";
import style from "./layout.module.css";

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return <section className={style.container}>{children}</section>;
}
