import style from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import videos from "../../json/db.json"
import PageNotFound from "../PageNotFound"


function Watch() {
  // "useParams()" permite receber parametros da url enviados do arquivo de rotas
  // e armazenar em uma constante;
  // Vale lembrar que no arquivo de rotas, foi armazenado assim : path="/watch/:codigoDoVideo"
  const params = useParams()
  // Buscar na lista de video e comparar se o video.id tem o mesmo param.codigoDoVideo
  const video = videos.find((video) => {return video.id === params.codigoDoVideo})

  // Se eu não definir o video, devo voltar para a página não encontrada:
  if(!video){
    return(<PageNotFound />)
  }

  
  return (
    <>
      <section className={style.watch}>
      <Header />
        <iframe
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          autoFocus
        ></iframe>
      <Footer />
      </section>
    </>
  );
}

export default Watch;
