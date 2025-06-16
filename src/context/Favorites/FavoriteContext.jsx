import { createContext } from "react";

// Importante separar a criação de contextos
export const FavoritesContext = createContext();

// Mudar o nome apenas no display
FavoritesContext.displayName = "MyFavorites";