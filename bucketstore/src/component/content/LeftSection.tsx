import { Link } from "react-router-dom";
import classes from "./LeftSection.module.css";

export default function LeftSection() {
  const categories: string[] = ["전체", "집업", "긴팔", "반팔", "민소매", "긴팔이너", "반팔이너", "셔츠"];

  return (
    <section className={classes.container}>
      <section className={classes.categoryFilter}>
        <div className={classes.categoryDiv}>
          {categories.map((category, index) => (
            <div key={index} className={classes.category}>
              {category}
            </div>
          ))}
        </div>
        <div className={classes.filterDiv}>
          <div className={classes.filterHeader}>
            <Link to="/">FILTER</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="1.25"
                  d="M.995 9.274a7.735 7.735 0 0 1 12.82-5.822c.149.131.292.27.433.411V2.098h2.208v6.071h-5.521V5.963h2.2a5.514 5.514 0 1 0 1 4.415h2.243a7.731 7.731 0 0 1-15.384-1.1Z"
                  data-name="\uD328\uC2A4 111"
                ></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">브랜드</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">시즌</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">추천</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">색상</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">혜택</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">가격</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
          <div className={classes.filter}>
            <Link to="/">할인율</Link>
            <div className={classes.filterBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="none" stroke="#000" d="m12 6-4 4-4-4" data-name="\uD328\uC2A4 14850"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
