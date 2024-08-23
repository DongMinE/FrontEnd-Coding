import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import classes from "./ProductList.module.css";

type Product = {
  code: number;
  brandName: string;
  name: string;
  price: {
    discountRate: number;
    maxDiscountPrice: number;
    maxDiscountRate: number;
    real: number;
    tag: number;
  };
  url: string;
};

type ProductType = {
  length: number;
  type: string;
  category: number;
  page: number;
};

type Props = {
  type: string;
};

export default function ProductList({ type }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorite, setFavorite] = useState<boolean[]>(() => products.map(() => false));
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const prevType = useRef(type);

  const params: ProductType = {
    length: 12,
    type,
    category: 25,
    page,
  };

  const GetProductList = useCallback(async () => {
    setLoading(true);
    //좋아요, 상품리스트 초기화
    if (prevType.current != type) {
      setProducts([]);
      setFavorite(() => products.map(() => false));
      prevType.current = type;
    }

    await axios
      .get("/api", {
        params,
      })
      .then((res) => {
        setProducts((prevProducts) => [...prevProducts, ...res.data.data.data.body]);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });

    setLoading(false);
  }, [page, type]);

  //무한스크롤 ref 감시
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [loading]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleObserver]);

  useEffect(() => {
    GetProductList();
  }, [GetProductList]);

  //좋아요 버튼
  function favoriteBtn(num: number) {
    setFavorite((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      newFavorites[num] = !newFavorites[num];
      return newFavorites;
    });
  }

  return (
    <section className={classes.container}>
      <section className={classes.productSection}>
        {products.map((product, idx) => (
          <div key={product.code + product.price.tag + idx}>
            <div className={classes.productImage}>
              <img src={product.url} loading="lazy" alt={product.name.split("_")[0]} width="200" height="200" />
              <div className={classes.favorite} onClick={() => favoriteBtn(idx)}>
                {favorite[idx] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                    <path
                      fill="#ff5112"
                      d="M2.065 8.98a4.513 4.513 0 0 1-.318-.328l-.056-.061A4.961 4.961 0 0 1 .498 5.405a4.895 4.895 0 0 1 1.393-3.469A4.958 4.958 0 0 1 5.45.497a4.377 4.377 0 0 1 2.581 1.051 10.153 10.153 0 0 1 1.465 1.373C10.536 1.728 11.965.497 13.45.497a4.923 4.923 0 0 1 5.045 4.908 4.923 4.923 0 0 1-1.229 3.221l-.01.016c-.108.127-.23.25-.353.369l-7.4 7.713Z"
                    ></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                    <g fill="none" opacity="0.2">
                      <path d="M2.065 8.98a4.513 4.513 0 0 1-.318-.328l-.056-.061A4.961 4.961 0 0 1 .498 5.405a4.895 4.895 0 0 1 1.393-3.469A4.958 4.958 0 0 1 5.45.497a4.377 4.377 0 0 1 2.581 1.051 10.153 10.153 0 0 1 1.465 1.373C10.536 1.728 11.965.497 13.45.497a4.923 4.923 0 0 1 5.045 4.908 4.923 4.923 0 0 1-1.229 3.221l-.01.016c-.108.127-.23.25-.353.369l-7.4 7.713Z"></path>
                      <path
                        fill="#000"
                        d="m9.5 15.281 6.706-6.988c.082-.078.173-.17.25-.256l.01-.016.045-.05a3.918 3.918 0 0 0 .984-2.565 3.83 3.83 0 0 0-1.158-2.77c-.755-.734-1.78-1.138-2.887-1.138-.895 0-2.031.738-3.2 2.08l-.747.86-.755-.852A8.975 8.975 0 0 0 7.432 2.35l-.006-.004c-.739-.563-1.404-.848-1.976-.848-1.107 0-2.119.406-2.848 1.143-.712.72-1.105 1.7-1.105 2.765 0 .899.335 1.793.944 2.524l.06.064c.083.096.177.19.257.266l.028.027 6.715 6.994m0 1.444L2.065 8.98a5.27 5.27 0 0 1-.318-.328l-.056-.06C.923 7.68.497 6.552.497 5.406c0-1.328.497-2.562 1.394-3.468.916-.926 2.181-1.44 3.559-1.44.799 0 1.665.354 2.581 1.05.594.446 1.101.964 1.465 1.374C10.536 1.729 11.965.498 13.45.498c2.832 0 5.045 2.156 5.045 4.908a4.923 4.923 0 0 1-1.23 3.221l-.01.016c-.107.127-.23.25-.353.369l-7.4 7.713Z"
                      ></path>
                    </g>
                  </svg>
                )}
              </div>
            </div>
            <div className={classes.productInfo}>
              <div>{product.brandName}</div>
              <div>{product.name.split("_")[0]}</div>
              <div className={classes.priceDiv}>
                <div>{product.price.real.toLocaleString()}</div>
                <div>{product.price.tag.toLocaleString()}</div>
              </div>
            </div>
            <div className={classes.productETC}>
              <div>가을신상</div>
              <div>NEW</div>
            </div>
          </div>
        ))}
      </section>
      {loading && <div className={classes.loading}>불러오는 중...</div>}
      {error && <div className={classes.error}>Error: {error}</div>}
      <div ref={sentinelRef} />
    </section>
  );
}
