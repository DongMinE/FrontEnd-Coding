import classes from "./FooterBottom.module.css";

export default function FooterBottom() {
  return (
    <div className={classes.container}>
      버킷스토어에서 판매되는 상품 중에는 입점 판매사가 판매하는 상품이 포함되어 있습니다. 입점 판매 상품의 경우
      (주)버킷스토어는 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해 책임을
      지지 않습니다.
    </div>
  );
}
