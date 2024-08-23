import classes from "./UserBtn.module.css";
import cx from "classnames";

export default function UserBtn() {
  return (
    <section className={classes.userBtnDiv}>
      <div className={classes.userBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={classes.unVisible}
        >
          <path fill="none" d="M0 0h24v24H0z" data-name="\uC0AC\uAC01\uD615 40"></path>
          <g fill="none" stroke="#fff">
            <g data-name="\uD0C0\uC6D0 1" transform="translate(1 1)">
              <circle cx="9.5" cy="9.5" r="9.5" stroke="none"></circle>
              <circle cx="9.5" cy="9.5" r="9"></circle>
            </g>
            <path d="m16.804 16.635 6.364 6.364" data-name="\uD328\uC2A4 3"></path>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={classes.visible}>
          <path fill="none" d="M0 0h24v24H0z" data-name="\uC0AC\uAC01\uD615 40"></path>
          <g fill="none" stroke="#000">
            <g data-name="\uD0C0\uC6D0 1" transform="translate(1 1)">
              <circle cx="9.5" cy="9.5" r="9.5" stroke="none"></circle>
              <circle cx="9.5" cy="9.5" r="9"></circle>
            </g>
            <path d="m16.804 16.635 6.364 6.364" data-name="\uD328\uC2A4 3"></path>
          </g>
        </svg>
      </div>
      <div className={cx(classes.userBtn, classes.unVisible)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24.002" height="24.001" viewBox="0 0 24 24">
          <path fill="none" d="M0 .001h24v24H0z" data-name="\uC0AC\uAC01\uD615 40"></path>
          <path
            fill="#fff"
            d="m9.054 16.534 4.037-4.035H.003v-1h13.089L9.055 7.464l.708-.7 4.535 4.535.7.709-.7.707-4.536 4.539Z"
            data-name="\uD328\uC2A4 109"
          ></path>
          <path
            fill="#fff"
            d="M12 24.001a11.992 11.992 0 0 1-9.745-5h1.258c.218.263.455.524.707.777a11 11 0 1 0 0-15.558c-.242.243-.48.5-.707.778h-1.26a11.989 11.989 0 0 1 9.747-5 12 12 0 0 1 0 24Z"
            data-name="\uBE7C\uAE30 1"
          ></path>
        </svg>
      </div>
      <div className={classes.userBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24.001"
          viewBox="0 0 24 24"
          className={classes.unVisible}
        >
          <g fill="none" data-name="\uADF8\uB8F9 130">
            <path stroke="#fff" d="M7.169 5.5a5 5 0 0 1 5-5 5 5 0 0 1 5 5" data-name="\uD328\uC2A4 106"></path>
            <g data-name="\uD328\uC2A4 104">
              <path d="M3.372 5.373h17.727l1.612 17.493H1.76Z"></path>
              <path
                fill="#fff"
                d="M4.284 6.373 2.856 21.866h18.759L20.187 6.373H4.284m-.912-1h17.727l1.612 17.493H1.76L3.372 5.373Z"
              ></path>
            </g>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={classes.visible}>
          <g fill="none" data-name="\uADF8\uB8F9 130">
            <path stroke="#000" d="M7.001 5.5a5 5 0 0 1 10 0" data-name="\uD328\uC2A4 106"></path>
            <g data-name="\uD328\uC2A4 104">
              <path d="M3.204 5.373h17.727l1.612 17.493H1.592Z"></path>
              <path
                fill="#000"
                d="M4.116 6.373 2.688 21.866h18.759L20.019 6.373H4.116m-.912-1H20.93l1.612 17.493H1.592L3.204 5.373Z"
              ></path>
            </g>
          </g>
        </svg>
        <div>0</div>
      </div>
    </section>
  );
}
