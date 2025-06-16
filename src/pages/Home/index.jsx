import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category from "../../components/Category";
import Carousel from "../../components/Carousel";
import videos from "../../json/db.json";
import Card from "../../components/Card";

import categories from "../../json/categories.json";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function filterCategory(categoryName) {
  // Retorna todos os videos que o video.category é identico a alguma categoria
  return videos.filter((video) => video.category === categoryName);
}

function Home() {
  return (
    <>
    <ScrollToTopButton/>
      <Header />
      <Banner image={"home"} />
      <Container>
        {/* Aqui i´ra ser inserido informações do site */}
        {categories.map((category) => (
          // Para cada categoria existente na constante:
          <Category category={category.name} key={category.name}>
            <Carousel>
              {/* Cada sessão de videos ficará dentro de um carrossel */}
              {filterCategory(category.name).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}
export default Home;
