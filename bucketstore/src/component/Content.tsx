import classes from "./Content.module.css";
import LeftSection from "./content/LeftSection";
import Product from "./content/Product";

export default function Content() {
  return (
    <div className={classes.container}>
      <section className={classes.titleSection}>
        <span>티셔츠</span>
      </section>
      <section className={classes.mainContentSeciton}>
        <LeftSection />
        <Product />
      </section>
    </div>
  );
}
