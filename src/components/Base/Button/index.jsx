const Button = ({ 
    icon = 'check', 
    label, 
    className, 
    loading = false,
    onClick,
    ...props 
}) => {
    const buttonClass = className ?? 'btn-success btn-block'
    const iconClass = loading ? 'fa-spin fa-spinner' : `fa-${icon}`

    return (
        <button type="submit" className={`btn ${buttonClass}`} onClick={onClick} {...props}>
            <i className={`fa ${iconClass}`}></i> {label}
        </button>
    )
}

export default Button