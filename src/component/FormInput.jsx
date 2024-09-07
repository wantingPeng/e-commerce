import "./FormInput.scss";
const Form = ({ label, ...input }) => {
  return (
    <div className="group">
      <input {...input} className="form-input" />
      <label
        className={`${input.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default Form;
