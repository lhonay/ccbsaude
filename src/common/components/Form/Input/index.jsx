import InputMask from "react-input-mask";

const Input = ({
	name,
	type,
	label,
	mask,
	errors,
	register,
	placeholder,
	model = {},
}) => (
	<>
		<label htmlFor={name}>{label}</label>
		<input
			type={type}
			mask={mask ?? ""}
			name={name}
			placeholder={placeholder ?? label}
			className={`form-control ${errors[name] && "is-invalid"}`}
			{...register(name, { value: model[name] })}
		/>

		<span className="invalid-feedback">{errors[name]?.message}</span>
	</>
);

export default Input;
