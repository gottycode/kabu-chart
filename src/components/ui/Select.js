const Select = ({ register, name, errors, label, placeholder }) => {
  return (
    <div className="sk-field">
      <label className="sk-field__label">特性</label>
      <div className="select is-fullwidth sk-field__select">
        <select {...register("tokusei")}>
          <option>Business development</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
      </div>
    </div>
  );
};
export default Select;
