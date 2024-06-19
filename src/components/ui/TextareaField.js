const TextareaField = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="sk-field">
      <label className="sk-field__label">{label}</label>
      <textarea
        className={`textarea sk-field__input ${
          errors[name] ? "is-danger" : ""
        }`}
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

export default TextareaField;
