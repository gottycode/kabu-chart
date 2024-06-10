import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img className="logo__img" src="logo192.png" alt="logo"></img>
        <span className="logo__app-name">XXシステム</span>
      </div>
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-film"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-map"></use>
            </svg>
            <span>旅行に行く</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
