import PropTypes from "prop-types";

const CustomInput = ({ type = "text", id, label, placeholder, onChange }) => {
  return (
    <label htmlFor={id} className="w-full flex flex-col gap-1">
      {label}
      <input
        type={type}
        name="fullname"
        id={id}
        placeholder={placeholder}
        className="py-2 px-6 rounded-md focus:border-green-primary border-solid input input-bordered"
        onChange={onChange}
      />
    </label>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
