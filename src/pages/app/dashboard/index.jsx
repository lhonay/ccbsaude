import { AdminLayout } from '../../../components'

const Dashboard = () => {

    return (
        <AdminLayout>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body py-2">
                            <h4 className="page-title">
                                <i className="fa fa-tachometer-alt title-icon mr-1"></i> Dashboard
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card widget-flat">
                        <div className="card-body">
                            <h4 className="text-muted font-weight-normal mt-0" title="Number of Student">
                                <i className="fa fa-users title-icon"></i> Users
                            </h4>
                            <h3 className="mt-3">1000</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card widget-flat">
                        <div className="card-body">
                            <h4 className="text-muted font-weight-normal mt-0" title="Number of Student">
                                <i className="fa fa-list title-icon"></i> Roles
                            </h4>
                            <h3 className="mt-3">1000</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card widget-flat">
                        <div className="card-body">
                            <h4 className="text-muted font-weight-normal mt-0" title="Number of Student">
                                <i className="fa fa-check title-icon"></i> Permissions
                            </h4>
                            <h3 className="mt-3">1000</h3>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard