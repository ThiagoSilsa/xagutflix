import style from "./Container.module.css";

// Container recebe qualquer filho dentro dele!

function Container({ children }) {
  return <section className={style.container}>{children}</section>;
}
export default Container;
