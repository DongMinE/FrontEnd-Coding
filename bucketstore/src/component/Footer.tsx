import classes from "./Footer.module.css";
import FooterBottom from "./footer/FooterBottom";
import FooterTop from "./footer/FooterTop";

export default function Footer() {
  return (
    <div className={classes.container}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
