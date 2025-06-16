// Hooks

import { useContext } from "react";
import { FavoritesContext } from "./FavoriteContext";

export function useFavoriteContext() {
  // O useContext() é igual o useState() só que global
  // Contexto inicial é o FavoritesContext
  const { favorite, setFavorite } = useContext(FavoritesContext);
  // Função de adicionar novo item

  function addFavorite(newFavorite) {
    // A constante irá verificar se estou tentando adicionar um favororito já existente
    // true -> Já existe | false -> Não existe ainda
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );

    // Nova lista recebe toda a lista anterior
    let newList = [...favorite];

    if (!repeatedFavorite) {
      // Se não estou tentando adicionar favorito já existente: Adiciono a nova lista
      newList.push(newFavorite);
      // transformo a lista global na nova lista, pois a mesma já havia recebido a lista global anteiormente
      return setFavorite(newList);
    }

    // Se o favorito sendo adicionado já existe dentro da lista:
    // Isso poderia estar dentro do "else (repeatedFavorite){}" o que daria no mesmo
    // pois quando o return é executado a função para e não executa mais os comandos abaixo

    // newList irá receber a lista anterior favorite após ser filtrada para retirar
    // o vaforito que está sendo recebido
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    setFavorite(newList)
  }
  return ({favorite,addFavorite})
  
}