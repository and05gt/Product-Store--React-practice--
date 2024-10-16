import clsx from "clsx";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Header = () => {
  const cart = useSelector(selectCart);

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
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
