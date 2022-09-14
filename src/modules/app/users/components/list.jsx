import { ButtonForm, Status, Pagination } from "@/common/components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const UserList = ({ users, onEdit, onDelete, pagination, onChangePage }) => {
	const emptyUsers = users?.length === 0;

	return (
		<div>
			<table className="table table-hover table-striped">
				<thead>
					<tr className="bg-light">
						<th>Id</th>
						<th>Nome</th>
						<th>E-mail</th>
						<th>Criado em</th>
						<th className="text-center">Status</th>
						<th className="text-center w-15">Ações</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.created_at}</td>
							<td className="text-center">
								<Status status={!!user.status} />
							</td>
							<td className="text-center w-15">
								<ButtonForm
									onClick={() => onEdit(user)}
									title="Edit User"
								>
									<AiFillEdit />
								</ButtonForm>

								<ButtonForm
									className="btn-danger"
									onClick={() => onDelete(user.id)}
									title="Delete User"
								>
									<AiFillDelete />
								</ButtonForm>
							</td>
						</tr>
					))}

					{emptyUsers && (
						<tr>
							<td className="text-center" colSpan="6">
								<div className="text-danger">
									<i className="fa fa-exclamation-triangle"></i>
									Usuários não encontrados!
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<div className="row justify-content-md-center">
				<Pagination meta={pagination} onChangePage={onChangePage} />
			</div>
		</div>
	);
};

export default UserList;
