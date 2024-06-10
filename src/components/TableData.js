const TableData = () => {
  return (
    <div>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>No.</th>
            <th>町名</th>
            <th>かな</th>
            <th>丁目</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>やくえんだい</td>
            <td>1-6</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>やくえんだい</td>
            <td>1-6</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>やくえんだい</td>
            <td>1-6</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>やくえんだい</td>
            <td>1-6</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>1</td>
            <td>日本千葉県船橋市薬円台</td>
            <td>やくえんだい</td>
            <td>1-6</td>
          </tr>
        </tbody>
      </table>
      <div className="wrapper">
        <div className="prev">&lt;</div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="active">4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
        <div className="next">&gt;</div>
      </div>
    </div>
  );
};

export default TableData;
