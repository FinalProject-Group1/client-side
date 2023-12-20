import PropTypes from 'prop-types';

const CustomInput = ({
	type = 'text',
	id,
	label,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<label htmlFor={id} className="w-full flex-col gap-1">
			{label}
			<input
				type={type}
				name="fullname"
				id={id}
				placeholder={placeholder}
				className="w-full py-1 px-4 rounded-md focus:border-green-primary border-solid input input-bordered"
				onChange={onChange}
				value={value}
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
	value: PropTypes.string,
	onChange: PropTypes.func,
};
