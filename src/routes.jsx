import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/Favorites/Favorites";
import AddVideo from "./pages/AddVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Todas as rotas abaixo estão dentro do contexto de favoritos */}
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:codigoDoVideo" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/form-add" element={<AddVideo />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
