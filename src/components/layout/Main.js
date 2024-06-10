import TableData from "../TableData";
import SearchForm from "../SearchForm";
import Footer from "./Footer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <h2 className="heading-primary">一覧画面</h2>
      <SearchForm />
      <div className="main__button-box">
        <button className="btn btn--primary">検索</button>
        <button className="btn btn--primary">新規作成</button>
      </div>
      <TableData />
      <Footer />
    </div>
  );
};
export default Main;
