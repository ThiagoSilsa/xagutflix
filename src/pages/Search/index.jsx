import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Search.module.css";
import Container from "../../components/Container";
import videos from "../../json/db.json";
import SearchVideoList from "../../components/SearchVideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Search() {
  return (
    <>
      <ScrollToTopButton/>
      <Header />
      <Container>
        <section className={style.search}>
          <h2>Pesquisar</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;

// Criar componente que faz uma lista de videos
