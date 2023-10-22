import { fetchCountries } from "@/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Country from "./country/[code]";

export default function Home({ conturies }) {
  return (
    <div>
      {conturies.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // ssr을 위해 서버측에서 페이제 컴포넌트에게 전달할 데이터를 설정하는 함수

  const conturies = await fetchCountries();
  return {
    props: {
      conturies,
    },
  };
};
