// Header
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa"; // <- ícone de lupa


function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <span className={style.logo}>XagutFlix</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form-add">Add</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/search"><FaSearch size={15} /></Link>
      </nav>
    </header>
  );
}

export default Header;
