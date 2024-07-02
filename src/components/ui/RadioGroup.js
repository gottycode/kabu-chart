const RadioGroup = ({ register, name, errors, label, elements }) => {
  // const elements = [
  //   { label: "オス", value: "male" },
  //   { label: "メス", value: "female" },
  //   { label: "特定不可", value: "other" },
  // ];
  console.log(elements);

  return (
    <div className="sk-field">
      <label className="sk-field__label">{label}</label>
      <div className="sk-field__input">
        {elements.map((el) => (
          <label className="radio">
            <input
              type="radio"
              name={name}
              value={el.value}
              {...register(name, {
                required: "入力してください",
              })}
            ></input>
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
export default RadioGroup;
