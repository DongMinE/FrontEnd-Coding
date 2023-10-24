import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
  const router = useRouter();

  // fallback: true일 때 일단 빨리 보여줄 페이지
  if (router.isFallback) {
    return <div>LOADING....</div>;
  }

  // fallback 후에도 없는 페이지
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  // fallback 하고 난 뒤 진짜 페이지
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

/*
SSG페이지를 생성할 때 동적으로 경로를 할당한다면 어떤 경로의 페이지를 만들어 놓을지 명시를해야함
getStaticPaths를 통해서 경로를 명시하고 fallback를 통해 다른 경로는 관리

fallback: false => 다른 경로 차단
fallback: "blocking" => 실시간으로 새 경로 생성하고 저장
fallback: true => 데이터가 없는 상태 페이지 줬다가 정보 저장하고 다시 보여줌

*/

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true,
  };
};

//SSG 페이지 생성하기
export const getStaticProps = async (context) => {
  const { code } = context.params;
  console.log(`${code} 페이지 생성!`);

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: { country },
    revalidate: 3,
  };
};
