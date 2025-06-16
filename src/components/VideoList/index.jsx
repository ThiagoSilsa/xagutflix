import Card from "../Card";
import style from "./VideoList.module.css";

// Receberá uma lista de objetos "videos" e trabalhará em cima disso
function VideoList({ videos, emptyHeading }) {

    const count = videos.length

    let heading = emptyHeading
    // Caso exista video, irá exibir;
    // Caso não exista, irá acessar o emptyHeading
    if (count > 0){
        const noun = count > 1? "vídeos" : "vídeo"
        heading = `${count} ${noun}`
    }

  return (
    <>
      <h2>{heading}</h2>
      <section className={style.videos}>
        {videos.map((video) => (
          <Card id={video.id} />
        ))}
      </section>
    </>
  );
}
export default VideoList;
