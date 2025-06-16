import style from "./Card.module.css";
import { Link } from "react-router-dom";
import iconFavorite from "./favorite.png"
import iconUnFavorite from "./unfavorite.png"
import { useFavoriteContext } from "../../context/Favorites/FavoriteHook";



// Única coisa que muda é o id
function Card( {id} ) {

  const { favorite , addFavorite } = useFavoriteContext()
  // Verificando se o elemento é favorito
  const isFavorite = favorite.some((fav) => fav.id === id)

  // Mudança de ícone
  // Se é favorito, usa um icone, se não usa outro
  const icone = isFavorite ? iconUnFavorite : iconFavorite


  return (
    <section className={style.card}>
      <Link 
      to={`/watch/${id}`}
      >

        <img
        className={style.thumb}
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa do vídeo"
          />
      </Link>
      <figure className={style.icon}>
        <img 
        onClick={() => addFavorite({id})}
        src={icone} 
        alt="" 
        />
      </figure>
    </section>
  );
}
export default Card;
