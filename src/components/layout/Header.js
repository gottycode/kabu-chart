import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h3 className="header__title">一覧画面</h3>
      <div className="header__user-info">
        <span className="header__username">ユーザー名</span>
        <button className="btn btn--logout">ログアウト</button>
      </div>
    </div>
  );
};
export default Header;
