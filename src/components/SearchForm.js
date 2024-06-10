import { useForm } from "react-hook-form";

import "./SearchForm.scss";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(`submit ! ${data}`);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="search-conditions">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="search-conditions--title">検索条件</label>
        <div className="search-conditions--items">
          <div className="search-conditions--item">
            <label className="form-label" for="item1">
              学生番号
            </label>
            <input type="text" id="item1" {...register("example")} />
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
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchForm;
