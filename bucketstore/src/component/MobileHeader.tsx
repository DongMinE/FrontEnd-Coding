import UserBtn from "./header/UserBtn";
import classes from "./MobilelHeader.module.css";
import cx from "classnames";

export default function MobilelHeader() {
  return (
    <div className={cx(classes.container)}>
      <section className={classes.leftNav}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" data-name="\uC0AC\uAC01\uD615 40"></path>
            <path
              d="M10.947 3.467 2.91 11.502h20.088v1H2.909l8.037 8.035-.708.7-8.535-8.535-.7-.709.7-.707 8.536-8.539Z"
              data-name="\uD328\uC2A4 109"
            ></path>
          </svg>
        </button>
        <div>티셔츠</div>
      </section>
      <section>
        <UserBtn />
      </section>
    </div>
  );
}
