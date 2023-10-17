import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const code = "kor";
  const code2 = "eng";
  const router = useRouter();

  const event = () => {
    router.push(`/search`);
  };
  const event2 = () => {
    router.push({ pathname: "/country/[code]", query: { code: code2 } });
  };
  return (
    <div>
      Home Page
      <div>
        <button onClick={event}>서치 페이지 이동</button>
      </div>
      <div>
        <button onClick={event2}>eng 페이지 이동</button>
      </div>
      <div>
        <Link href={"/search"}> Search Page 이동</Link>
      </div>
      <div>
        <Link href={`/country/${code}`}> {code} Page 이동</Link>
      </div>
      <div>
        <Link href={{ pathname: "/country/[code]", query: { code: code2 } }}>
          {code2} Page 이동2
        </Link>
      </div>
    </div>
  );
}
