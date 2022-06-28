import { Button, Status, Pagination } from "@/components"

const UserList = ({ users, onEdit, onDelete, pagination, onChangePage }) => {

    const emptyUsers = users?.length === 0

    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr className="bg-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th className="text-center">Status</th>
                        <th className="text-center w-15">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_at}</td>
                            <td className="text-center">
                                <Status status={!!user.status} />
                            </td>
                            <td className="text-center w-15">
                                <Button 
                                    icon='edit'
                                    className='btn-sm btn-info mr-1'
                                    onClick={() => onEdit(user)}
                                    title="Edit User"
                                />

                                <Button
                                    icon='trash'
                                    className='btn-sm btn-danger'
                                    onClick={() => onDelete(user.id)}
                                    title="Delete User"
                                />
                            </td>
                        </tr>
                    ))}

                    {emptyUsers && 
                        <tr>
                            <td className="text-center" colSpan="6">
                                <div className="alert alert-danger">
                                    <i className="fa fa-exclamation-triangle"></i> Users not found!
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

export default UserList