const Checkbox = ({ name, label, errors, register, model = {} }) => (
    <>
        <label>{label}</label><br></br>
        <input
            type='checkbox'
            name={name} 
            className={`checkbox ${errors[name] && 'is-invalid'}`} 
            placeholder={label}
            {...register(name, { value: model[name] })}
        />
        <label>Ativo / Inativo</label>

        <span className="invalid-feedback">{errors[name]?.message}</span>
    </>
)

export default Checkbox