import style from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useFavoriteContext } from "../../context/Favorites/FavoriteHook";
import VideoList from "../../components/VideoList"

function Favorites() {
  // importanto a lista atual de favoritos
  const { favorite } = useFavoriteContext()


  return (
    <>
      <Header />
      <Container>
        <section className={style.favorites}>
        <h2>Meus favoritos</h2>
            <VideoList 
            videos={favorite}
            emptyHeading={"Nenhum favorito adicionado!"}

      
      />

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
