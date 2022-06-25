const Input = ({ name, type, label, errors, register, model = {} }) => (
    <>
        <label>{label}</label>
        <input
            type={type}
            name={name} 
            className={`form-control ${errors[name] && 'is-invalid'}`} 
            placeholder={label}
            {...register(name, { value: model[name] })}
        />

        <span className="invalid-feedback">{errors[name]?.message}</span>
    </>
)

export default Input