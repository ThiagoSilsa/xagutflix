import style from "./Banner.module.css";

function Banner({ image  }) {
  return (
    <div
      style={{
        backgroundImage: `url('../../static/images/banner-${image}.png')`,
      }}
      className={style.banner}
    ></div>
  );
}

export default Banner;
