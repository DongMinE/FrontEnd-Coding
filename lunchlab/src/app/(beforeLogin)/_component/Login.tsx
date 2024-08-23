"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import style from "./Login.module.css";
import { redirect } from "next/navigation";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // e.preventDefault();
    alert("로그인");
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };
  const onChangepw: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPw(e.target.value);
  };

  const test = () => {
    redirect("/oderList");
  };

  return (
    <section className={style.container}>
      {/* 로그인 동작 바꾸기 */}
      <form onSubmit={onSubmit} action={test}>
        <section className={style.loginSection}>
          <div className={style.loginText}>로그인</div>
          <section className={style.inputInfo}>
            <section className={style.inputId}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" value={id} onChange={onChangeId} required />
            </section>
            <section className={style.inputPw}>
              <label htmlFor="pw">비밀번호</label>
              <input type="password" id="pw" value={pw} onChange={onChangepw} required />
            </section>
          </section>
          <button className={style.loginBtn} disabled={!id || !pw}>
            로그인
          </button>
        </section>
      </form>
    </section>
  );
}
