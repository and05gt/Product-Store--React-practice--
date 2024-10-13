import clsx from "clsx";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.logo}>
        <span className={style.accent}>Product</span> Store
      </h2>
      <nav className={style.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Product
        </NavLink>
        <NavLink to="/cart" className={buildLinkClass}>
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
