import "./SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="search-conditions">
      <label className="search-conditions--title">検索条件</label>
      <div className="search-conditions--items">
        <div className="search-conditions--item">
          <label className="form-label" for="item1">
            学生番号
          </label>
          <input type="text" id="item1"></input>
        </div>
        <div className="search-conditions--item">
          <label className="form-label" for="item2">
            氏名
          </label>
          <input type="text" id="item2"></input>
        </div>
        <div className="search-conditions--item">
          <label className="form-label" for="item3">
            学年
          </label>
          <input type="text" id="item3"></input>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
