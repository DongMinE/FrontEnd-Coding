"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>에러가 발생했습니다!</h1>
      <p>다시 시도해주세요!</p>
      {/* <p>{error}</p> */}
    </main>
  );
}
