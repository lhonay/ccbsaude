const Button = ({ changeSearch, onSearch, placeholder }) => {
    return (
        <div className="input-group">
            <input className="form-control" onChange={changeSearch} placeholder={placeholder} />
            <div className="input-group-append mr-1">
                <button type="button" className="btn btn-outline-secondary" onClick={onSearch}>
                    <i className="fa fa-search"></i> Search
                </button>
            </div>
        </div>
    )
}

export default Button