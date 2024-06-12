import "./DataTable.scss";
const DataTable = () => {
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
            <th>
              <input type="checkbox"></input>
            </th>
            <th>ID</th>
            <th>名前</th>
            <th>name</th>
            <th>タイプ</th>
            <th>身長</th>
            <th>体重</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>みず</td>
            <td>やくえんだい</td>
            <td>50</td>
            <td>100</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>みず</td>
            <td>やくえんだい</td>
            <td>50</td>
            <td>100</td>
          </tr>

          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>みず</td>
            <td>やくえんだい</td>
            <td>50</td>
            <td>100</td>
          </tr>

          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>みず</td>
            <td>やくえんだい</td>
            <td>50</td>
            <td>100</td>
          </tr>

          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>みず</td>
            <td>やくえんだい</td>
            <td>50</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
