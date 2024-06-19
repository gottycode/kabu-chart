const TextField = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className={`input ${errors[name] ? "is-danger" : ""}`}
              type="text"
              placeholder={placeholder}
              {...register(name, {
                required: "入力してください",
              })}
            />
          </div>
          <p className="help is-danger">
            {errors[name] ? errors[name].message : "　"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextField;
