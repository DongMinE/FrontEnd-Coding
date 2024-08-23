import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <h3>죄송합니다. 해당 페이지는 존재하지 않습니다.</h3>
      <Link href="/">메인으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
