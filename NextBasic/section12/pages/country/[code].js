import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import style from "./[code].module.css";
import Image from "next/image";
import Head from "next/head";

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  // fallback: true일 때 일단 빨리 보여줄 페이지
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>NARAS</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="NARAS" />
          <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요" />
        </Head>
        <div>Loading ...</div>
      </>
    );
  }

  // fallback 후에도 없는 페이지
  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  // fallback 하고 난 뒤 진짜 페이지
  return (
    <>
      <Head>
        <title>{country.commonName} 국가 정보 조회 | NARAS</title>
        <meta property="og:image" content={country.flagImg} />
        <meta property="og:title" content={`${country.commonName} 국가 정보 조회 | NARAS`} />
        <meta
          property="og:description"
          content={`${country.commonName} 국가의 자세한 정보입니다`}
        />
      </Head>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.commonName}>
            {country.flagEmoji}&nbsp;{country.commonName}
          </div>
          <div className={style.officialName}>{country.officialName}</div>
        </div>

        <div className={style.flag_img}>
          <Image src={country.flagImg} alt="국가이미지" fill />
        </div>

        <div className={style.body}>
          <div>
            <b>코드 :</b>&nbsp;{country.code}
          </div>
          <div>
            <b>수도 :</b>&nbsp;{country.capital.join(", ")}
          </div>
          <div>
            <b>지역 :</b>&nbsp;{country.region}
          </div>
          <div>
            <b>지도 :</b>&nbsp;
            <a target="_blank" href={country.googleMapURL}>
              {country.googleMapURL}
            </a>
          </div>
        </div>
      </div>
    </>
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
//ssg 페이지 생성
export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};
