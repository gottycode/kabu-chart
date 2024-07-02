const CheckboxGroup = ({ register, name, errors, label, elements }) => {
  // const elements = [
  //   { label: "くさ", value: "kusa" },
  //   { label: "みず", value: "mizu" },
  //   { label: "ほおの", value: "honoo" },
  // ];
  return (
    <div className="sk-field">
      <label className="sk-field__label">{label}</label>
      <div className="sk-field__input">
        {elements.map((el) => (
          <label className="checkbox">
            <input type="checkbox" {...register("type")} value={el.value} />
            {el.label}
          </label>
        ))}
      </div>
      <p className="help is-danger sk-field__msg">
        {errors[name] ? errors[name].message : "　"}
      </p>
    </div>
  );
};
export default CheckboxGroup;
