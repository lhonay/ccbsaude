const Button = ({ label, loading }) => {
    const icon = loading ? 'fa-spin fa-spinner' : 'fa-check'

    return (
        <button type="submit" className="btn btn-success btn-block">
            <i className={`fa ${icon}`}></i> {label}
        </button>
    )
}

export default Button