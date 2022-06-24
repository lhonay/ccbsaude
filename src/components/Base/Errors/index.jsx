const Errors = ({ errors }) => {
    if (errors.length == 0) {
        return null
    }

    return (
        <div className="alert alert-danger">
            <button type="button" className="close">×</button>
            <ul className="display-errors">
                {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>
        </div>
    )
}

export default Errors