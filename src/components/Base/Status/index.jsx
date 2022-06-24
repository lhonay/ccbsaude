const Status = status => {
    return status === 1
        ? <i className="fa fa-times text-danger"></i>
        : <i className="fa fa-check text-success"></i>
}

export default Status