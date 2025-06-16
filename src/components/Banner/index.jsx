import style from "./Banner.module.css";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url('../../static/images/banner-home.png')`,
      }}
      className={style.banner}
    ></div>
  );
}

export default Banner;
