const Textarea = ({ name, label, errors, register, model = {} }) => (
    <>
        <label>{label}</label>
        <textarea 
            name={name} 
            className={`form-control ${errors[name] && 'is-invalid'}`}
            placeholder={label}
            {...register(name, { value: model[name] })}
            rows='10' 
        />
        <span className="invalid-feedback">{errors[name]?.message}</span>
    </>
)

export default Textarea