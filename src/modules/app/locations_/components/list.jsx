import { Button, Status, Pagination } from "@/common/components";

const List = ({ lists, onEdit, onDelete, pagination, onChangePage }) => {
	const emptyLists = lists?.length === 0;

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
					{lists?.map((list) => (
						<tr key={list.id}>
							<td>{list.id}</td>
							<td>{list.name}</td>
							<td>{list.email}</td>
							<td>{list.created_at}</td>
							<td className="text-center">
								<Status status={!!list.status} />
							</td>
							<td className="text-center w-15">
								<Button
									icon="edit"
									className="btn-sm btn-info mr-1"
									onClick={() => onEdit(list)}
									title="Edit User"
								/>

								<Button
									icon="trash"
									className="btn-sm btn-danger"
									onClick={() => onDelete(list.id)}
									title="Delete User"
								/>
							</td>
						</tr>
					))}

					{emptyLists && (
						<tr>
							<td className="text-center" colSpan="6">
								<div className="alert alert-danger">
									<i className="fa fa-exclamation-triangle"></i>{" "}
									Lists not found!
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

export default List;
