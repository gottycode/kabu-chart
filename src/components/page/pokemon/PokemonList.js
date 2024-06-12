import { useState, useEffect } from "react";
import DataTable from "../../feature/DataTable";
import SearchForm from "../../feature/SearchForm";
import Footer from "../../layout/Footer";
import "../../layout/Main.scss";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [searchCondition, setSearchCondition] = useState(1);

  useEffect(() => {
    console.log("条件変わった");
    console.log(searchCondition);
    // 初期値をとってくる
  }, [searchCondition]);
  return (
    <div className="main">
      <h2 className="heading-primary">一覧画面</h2>
      <SearchForm setSearchCondition={setSearchCondition} />
      <DataTable />
      <Footer />
    </div>
  );
};

export default PokemonList;
