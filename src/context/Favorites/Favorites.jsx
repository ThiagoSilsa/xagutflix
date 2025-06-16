// Contextos Globais

import { useState } from "react";

// Importanto o contexto criado
import { FavoritesContext } from "./FavoriteContext";

// Criando um array para armazenar os favortios
// Começa vazio
function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider
      // Tudo o que for colocado dentro do value poderá ser acessado por todos os componentes filhos
      value={{ favorite, setFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;

// Tecnologia nova!
// Hook personalizado
// toda função que tem o use é um Hook


