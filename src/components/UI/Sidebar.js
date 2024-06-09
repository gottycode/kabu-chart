import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-film"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
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
