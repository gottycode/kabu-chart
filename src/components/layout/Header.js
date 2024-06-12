import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      {/* <h3 className="header__title">一覧画面</h3> */}
      <div className="logo">
        <Link to="/" className="side-nav__link">
          <img className="logo__img" src="/logo192.png" alt="logo"></img>
          <span className="logo__app-name">XXシステム</span>
        </Link>
      </div>

      <div className="header__user-info">
        <span className="header__username">ユーザー名</span>
        <button className="btn btn--logout">ログアウト</button>
      </div>
    </div>
  );
};
export default Header;
