import { Link } from "react-router-dom";

import "./HomeNav.scss";

const HomeNav = () => {
  return (
    <div className="main">
      <ul className="home-nav">
        <li className="home-nav__item home-nav__item--active">
          <Link to="/mng/pokemon" className="home-nav__link">
            <svg className="home-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-home"></use>
            </svg>
            <span>株価</span>
          </Link>
        </li>
        <li className="home-nav__item home-nav__item--active">
          <Link to="/mng/pokemon" className="home-nav__link">
            <svg className="home-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-home"></use>
            </svg>
            <span>株価</span>
          </Link>
        </li>
        <li className="home-nav__item home-nav__item--active">
          <Link to="/mng/pokemon" className="home-nav__link">
            <svg className="home-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-home"></use>
            </svg>
            <span>株価</span>
          </Link>
        </li>
        <li className="home-nav__item home-nav__item--active">
          <Link to="/mng/pokemon" className="home-nav__link">
            <svg className="home-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-home"></use>
            </svg>
            <span>株価</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
