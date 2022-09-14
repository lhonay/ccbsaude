const Select = ({ name, label, options, errors, register, model = {} }) => (
	<>
		<label>{label}</label>
		<select
			name={name}
			className={`form-control ${errors[name] && "is-invalid"}`}
			placeholder={label}
			{...register(name, { value: model[name] })}
		>
			<option value="">Selecione uma opção</option>
			{options?.map((option) => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</select>

		<span className="invalid-feedback">{errors[name]?.message}</span>
	</>
);

export default Select;
