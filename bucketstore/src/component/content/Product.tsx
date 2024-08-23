import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import classes from "./Product.module.css";
import ProductList from "./ProductList";

export default function Product() {
  const categories = ["전체", "집업", "긴팔", "반팔", "민소매", "긴팔이너", "반팔이너", "셔츠"];
  const sorting = [
    ["최신순", "newest"],
    ["낮은 가격순", "low_price"],
    ["높은 가격순", "high_price"],
    ["할인율 높은순", "high_discount_rate"],
    ["판매 인기순", "best"],
  ];
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentSorting, setCurrentSorting] = useState(0);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [props, setProps] = useState("newest");
  const modalRef = useRef<HTMLDivElement | null>(null);
  //헤더 필터
  function handleCategoryClick(category: string) {
    setSelectedCategory(category);
  }

  //PC 정렬값 변경
  const handlePCSortChange = (event: number) => {
    setCurrentSorting(event);
    setIsSortOpen(false);
    setProps(sorting[event][1]);
  };

  //모바일정렬값 변경
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentSorting(parseInt(event.target.value, 10));
    setProps(sorting[parseInt(event.target.value)][1]);
  };

  //모바일 셀렉트 클릭시 색 상태 변경
  function toggleSortOpen() {
    setIsSortOpen(false);
  }

  //외부 클릭시 색변경, 모달 끄기
  useEffect(() => {
    function handleModalClose(e: Event) {
      if (isSortOpen && !modalRef.current?.contains(e.target as HTMLElement)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleModalClose);

    return () => document.removeEventListener("mousedown", handleModalClose);
  }, [isSortOpen]);

  return (
    <div className={classes.container}>
      <section className={classes.mobileCategorySection}>
        <ul className={classes.mobileCategoryList}>
          {categories.map((category, index) => (
            <li
              key={index}
              className={cx(classes.mobileCategory, {
                [classes.selected]: selectedCategory === category,
              })}
              onClick={() => handleCategoryClick(category)}
            >
              <Link to="/">{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.productSection}>
        <section className={classes.productInfo}>
          <div className={classes.productCount}>8000개</div>
          <div className={classes.productSort}>
            <div className={classes.PCSort} ref={modalRef}>
              <button
                className={cx(classes.sortBtn, isSortOpen ? classes.PCbackgroundBlack : classes.PCbackground)}
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                {sorting[currentSorting][0]}
                <div className={classes.PCsortsvg}>
                  {!isSortOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13">
                      <g id="ic_sorting" transform="translate(-1)">
                        <g
                          id="사각형_4836"
                          data-name="사각형 4836"
                          transform="translate(1)"
                          fill="#fff"
                          stroke="#707070"
                          strokeWidth="1"
                          opacity="0"
                        >
                          <rect width="24" height="13" stroke="none" />
                          <rect x="0.5" y="0.5" width="23" height="12" fill="none" />
                        </g>
                        <path
                          id="패스_16332"
                          data-name="패스 16332"
                          d="M2428-1259.939l.707-.707,2.147,2.147v-8.794h1v8.793l2.146-2.146.707.707-3.353,3.353Zm8.852,2.646v-8.792l-2.146,2.146-.706-.707,3.354-3.354,3.353,3.354-.707.707-2.146-2.146v8.793Z"
                          transform="translate(-2426.853 1268.793)"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13">
                      <g id="ic_sorting" transform="translate(-1)">
                        <g
                          id="사각형_4836"
                          data-name="사각형 4836"
                          transform="translate(1)"
                          fill="#fff"
                          stroke="#707070"
                          strokeWidth="1"
                          opacity="0"
                        >
                          <rect width="24" height="13" stroke="none" />
                          <rect x="0.5" y="0.5" width="23" height="12" fill="none" />
                        </g>
                        <path
                          id="패스_16332"
                          data-name="패스 16332"
                          d="M2428-1259.939l.707-.707,2.147,2.147v-8.794h1v8.793l2.146-2.146.707.707-3.353,3.353Zm8.852,2.646v-8.792l-2.146,2.146-.706-.707,3.354-3.354,3.353,3.354-.707.707-2.146-2.146v8.793Z"
                          transform="translate(-2426.853 1268.793)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  )}
                </div>
              </button>
              {isSortOpen && (
                <ul className={classes.PCsortList}>
                  {sorting.map(([label, value], index) => (
                    <li
                      className={classes.PCsortItem}
                      key={value + index}
                      value={index}
                      onClick={() => handlePCSortChange(index)}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <select
              className={cx(classes.mobileSort, classes.sortBackground)}
              onChange={(e) => handleSortChange(e)}
              value={currentSorting}
              onBlur={toggleSortOpen}
            >
              {sorting.map(([label, value], index) => (
                <option key={value + index} value={index}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className={classes.ProductList}>
          <ProductList type={props} />
        </section>
      </section>
    </div>
  );
}
