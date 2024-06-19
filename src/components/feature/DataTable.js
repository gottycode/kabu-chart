import "./DataTable.scss";
const DataTable = (props) => {
  const data = props.tableData.map((record) => {
    return (
      <tr>
        <td>{record["id"]}</td>
        <td>{record["jpname"]}</td>
        <td>{record["name"]}</td>
        <td></td>
        <td>{record["height"]}</td>
        <td>{record["weight"]}</td>
        <td>
          <img
            className="responsive-table__img"
            src={record["spriteUrl"]}
            alt="pokemon img"
          ></img>
        </td>
      </tr>
    );
  });

  return (
    <div className="data-table">
      <div className="data-table__pagination">
        <ul>
          <li>&lt;</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="active">4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>&gt;</li>
        </ul>
      </div>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>name</th>
            <th>タイプ</th>
            <th>身長</th>
            <th>体重</th>
            <th>画像</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
