import { fetchCountries } from "@/api";

// 원래 CSR 형식 동일
export default function Home({ conturies }) {
  return (
    <div>
      {conturies.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

/* 
next에서 정한 함수 명 규칙
getServerSideProps - SSR로 렌더링함 => 서버에서만 실행되므로 next의 콘솔은 브라우저에 안보임
getStaticProps - SSG로 렌더링 함 => 처음 빌드될 때 한번만 호출함, 더이상 안바뀜
*/

/* next에서 정한 build 파일 보기
흰 동그라미 - SSG
빈 동그라미 - 기본 SSG
람다 기호 - SSR
*/

// SSR 적용
// export const getServerSideProps = async () => {

// SSG 적용 - 빌드 할 때만 만들고 더이상 생성 X
export const getStaticProps = async () => {
  // ssr을 위해 서버측에서 페이제 컴포넌트에게 전달할 데이터를 설정하는 함수

  const conturies = await fetchCountries();
  console.log("컨츄리 데이터 불러옴");
  return {
    props: {
      conturies,
    },
  };
};
