const CheckboxGroup = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="sk-field">
      <label className="sk-field__label">タイプ</label>
      <div className="sk-field__input">
        <label className="checkbox">
          <input type="checkbox" {...register("type")} />
          ほのお
        </label>
        <label className="checkbox">
          <input type="checkbox" {...register("type")} />
          ほのお
        </label>
      </div>
      <p className="help is-danger sk-field__msg">
        {errors[name] ? errors[name].message : "　"}
      </p>
    </div>
  );
};
export default CheckboxGroup;
