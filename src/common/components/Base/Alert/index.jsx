const Alert = ({ status, message }) => {
    if (! message) {
        return null
    }

    return (
        <div className={`alert alert-${status}`}>
            <button type="button" className="close">×</button>
            {message}
        </div>
    )
}

export default Alert