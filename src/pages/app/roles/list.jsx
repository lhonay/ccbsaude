import { Button, Pagination } from "@/components"

const RoleList = ({ roles, onEdit, onDelete, pagination, onChangePage }) => {

    const emptyRoles = roles?.length === 0

    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr className="bg-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th className="text-center w-15">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles?.map(role => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>{role.description}</td>
                            <td>{role.created_at}</td>
                            <td className="text-center w-15">
                                <Button 
                                    icon='edit'
                                    className='btn-sm btn-info mr-1'
                                    onClick={() => onEdit(role)}
                                    title="Edit Role"
                                />

                                <Button
                                    icon='user'
                                    className='btn-sm btn-danger'
                                    onClick={() => onDelete(role.id)}
                                    title="Delete Role"
                                />
                            </td>
                        </tr>
                    ))}

                    {emptyRoles && 
                        <tr>
                            <td className="text-center" colSpan="5">
                                <div className="alert alert-danger">
                                    <i className="fa fa-exclamation-triangle"></i> Roles not found!
                                </div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="row justify-content-md-center">
                <Pagination meta={pagination} onChangePage={onChangePage}  />
            </div>
        </div>
    )
}

export default RoleList