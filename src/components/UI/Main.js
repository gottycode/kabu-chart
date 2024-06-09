import TestChart from "../TestChart";
import TestChart2 from "../TestChart2";
import TestChart3 from "../TestChart3";
import TableData from "../TableData";
import SearchForm from "../SearchForm";
import Footer from "./Footer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <h2 className="heading-primary">一覧画面</h2>
      <SearchForm />
      <TableData />
      {/* <section className="section">
        <TestChart />
      </section>
      <section className="section">
        <TestChart2 />
      </section>
      <section className="section">
        <TestChart3 />
      </section> */}
      <Footer />
    </div>
  );
};
export default Main;
