const Header = ({ icon, title }) => (
    <div className="row">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body py-2">
                    <h4 className="page-title">
                        <i className={`fa fa-${icon} title-icon mr-1`}></i> {title}
                    </h4>
                </div>
            </div>
        </div>
    </div>
)

export default Header