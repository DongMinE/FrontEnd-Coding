import classes from "./FooterTop.module.css";

export default function FooterTop() {
  return (
    <div className={classes.container}>
      <div className={classes.mainLeft}>
        <div>COPYRIGHT© 2024 BUCKET STORE ALL RIGHTS RESERVED.</div>
        <div className={classes.mainLeftBottom}>
          <div>(주)버킷스토어</div>
          <div>이용약관</div>
          <div>개인정보처리방침</div>
        </div>
      </div>
      <div className={classes.mainRight}>
        <div>
          <div>고객센터</div>
          <div>입점제휴문의</div>
          <div>A/S 문의</div>
          <div>CS 1670-2807</div>
        </div>
        <div>(평일 09:30-12:00, 13:00-18:00)</div>
      </div>
    </div>
  );
}
