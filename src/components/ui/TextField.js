const TextField = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="sk-field">
      <label className="sk-field__label">{label}</label>
      <input
        className={`input sk-field__input ${errors[name] ? "is-danger" : ""}`}
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: "入力してください",
        })}
      />
      <p className="help is-danger sk-field__msg">
        {errors[name] ? errors[name].message : "　"}
      </p>
    </div>
  );
};

export default TextField;
