"use client";

import Image from "next/image";
import style from "./logoutButton.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();
  console.log("me", me);

  const onLogout = () => {
    // signOut({ redirect: false }).then(() => {
    //   router.replace("/");
    // });
    signOut({ callbackUrl: "/" });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.user?.image!} alt={me.user?.email as string} width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
