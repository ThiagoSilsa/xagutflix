import style from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState, useEffect } from "react";
import Loader from "../Loader";
// import videos from "../../json/db.json"

// Filtrando vídeos por categoria ou título
function filterVideos(videos, searchText) {
  // Passando o texto para maiúsculo

  const text = searchText.toUpperCase();
  // Função recebe Json e a palavra digitada no campo input
  // Essa função é disparada todas as vezes que uma tecla é apertada
  // A função retorna um filtro de videos onde o o video.category ou video.title inclui o texto informado
  // Isso pode mehlorar caso o meu arquivo Json estja com os títulos e nomes em maiusculo e eu passe tudo para o maiusculo com upper()
  return videos.filter(
    (video) =>
      video.category.toUpperCase().includes(text) ||
      video.title.toUpperCase().includes(text)
  );
}

// Passa videos para o searchVideosList e manda para o VideoList
function SearchVideoList({ videos }) {
  // Definindo constante para método useState
  const [searchText, setSearchText] = useState("");
  // A constante foundVideos ié chamar a função que irá filtrar vídeos de acordo com o texto digitado a cada nova letra e armazenará em sua memória
  const foundVideos = filterVideos(videos, searchText);

  // Estado de loading, sempre true, mas após 0,5s passa a false, logo só executa a primeira vez que abre a pág
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <section className={style.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        // Devo dizer que o value é o searchText se não o react n deixa mudar!
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      { //Se o loading for verdadeiro, rola o loading, se não, roda o videolist normal
      loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem resultado para "${searchText}" ☹️`}
        />
      )}
    </section>
  );
}

export default SearchVideoList;
