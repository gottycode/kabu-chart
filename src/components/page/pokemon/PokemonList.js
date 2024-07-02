import { useState, useEffect } from "react";
import DataTable from "../../feature/DataTable";
import SearchForm from "../../feature/SearchForm";
import Footer from "../../layout/Footer";
import "../../layout/Main.scss";
import { Link } from "react-router-dom";
import { fetchPokemon } from "../../../helper/fetch";

const PokemonList = () => {
  const [searchCondition, setSearchCondition] = useState(1);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // console.log("条件変わった");
    // console.log(searchCondition);
    (async function () {
      // const data = await fetchPokemon();
      // setTableData(data);
      // console.log(data);
    })();
    // 初期値をとってくる
  }, [searchCondition]);
  return (
    <div className="main">
      <h2 className="heading-primary">一覧画面</h2>
      <SearchForm setSearchCondition={setSearchCondition} />
      <DataTable tableData={tableData} />
      <Footer />
    </div>
  );
};

export default PokemonList;
