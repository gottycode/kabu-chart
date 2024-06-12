import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SearchForm.scss";

const SearchForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.setSearchCondition(data);
  };
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="search-conditions">
          <label className="search-conditions--title">検索条件</label>
          <div className="search-conditions--items">
            <div className="search-conditions--item">
              <label className="form-label" htmlFor="item1">
                ID
              </label>
              <input type="text" id="item1" {...register("example")} />
            </div>
            <div className="search-conditions--item">
              <label className="form-label" htmlFor="item2">
                名前
              </label>
              <input type="text" id="item2"></input>
            </div>
            <div className="search-conditions--item">
              <label className="form-label" htmlFor="item3">
                タイプ
              </label>
              <input type="text" id="item3"></input>
            </div>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="main__button-box">
          <button type="submit" className="btn btn--primary">
            検索
          </button>
          <Link to="/mng/pokemon/regist">
            <button className="btn btn--primary">新規作成</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
