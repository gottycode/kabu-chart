import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <Link to="/" className="side-nav__link">
          <img className="logo__img" src="logo192.png" alt="logo"></img>
          <span className="logo__app-name">XXシステム</span>
        </Link>
      </div>
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link to="/brand" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-home"></use>
            </svg>
            <span>株価</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/brand" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-film"></use>
            </svg>
            <span>ポケモン</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/brand" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <span>技術情報</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/signin" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-map"></use>
            </svg>
            <span>旅行に行く</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
