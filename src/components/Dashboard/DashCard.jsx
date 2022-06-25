const DashCard = ({ icon, label, amount }) => {
    return (
        <div className="col-xl-4">
            <div className="card widget-flat">
                <div className="card-body">
                    <h4 className="text-muted font-weight-normal mt-0">
                        <i className={`fa fa-${icon} title-icon`}></i> {label}
                    </h4>
                    <h3 className="mt-3">{amount}</h3>
                </div>
            </div>
        </div>
    )
}

export default DashCard