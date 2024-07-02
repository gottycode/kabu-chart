const Form = ({ children, onSubmitHandler }) => {
  return (
    <form onSubmit={onSubmitHandler} className="form">
      {children}
    </form>
  );
};
export default Form;
