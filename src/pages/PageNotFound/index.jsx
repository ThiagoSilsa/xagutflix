import Header from "../../components/Header";
import style from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={style.container}>
        <div className={style.content}>
          <h2>Você se perdeu?</h2>
          <p>Você encontrará ótimos vídeos na página principal</p>
          <Link to="/" className="link">
            Página Inicial XagutFlix
          </Link>
          <p className={style.error}>404</p>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
