const RadioGroup = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="sk-field">
      <label className="sk-field__label">性別</label>
      <div className="sk-field__input">
        <label className="radio">
          <input type="radio" name="member" {...register("gender")}></input>
          おす
        </label>
        <label className="radio">
          <input type="radio" name="member" {...register("gender")}></input>
          めす
        </label>
      </div>
      <p className="help is-danger sk-field__msg">
        {errors[name] ? errors[name].message : "　"}
      </p>
    </div>
  );
};
export default RadioGroup;
