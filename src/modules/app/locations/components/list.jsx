import { ButtonForm, Status, Pagination } from "@/common/components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const LocationList = ({
	lists,
	onEdit,
	onDelete,
	pagination,
	onChangePage,
}) => {
	const emptyLists = lists?.length === 0;

	return (
		<div>
			<table className="table table-hover table-striped">
				<thead>
					<tr className="bg-light">
						<th>Id</th>
						<th>Nome</th>
						<th>Localidade</th>
						<th>Criado em</th>
						<th className="text-center">Status</th>
						<th className="text-center w-15">Ações</th>
					</tr>
				</thead>
				<tbody>
					{lists?.map((list) => (
						<tr key={list.id}>
							<td>{list.id}</td>
							<td>{list.name}</td>
							<td>
								{list.location?.name} -
								{list?.location?.city?.name} (
								{list?.location?.state?.name})
							</td>
							<td>{list.created_at}</td>
							<td className="text-center">
								<Status status={!!list.status} />
							</td>
							<td className="text-center w-15">
								<ButtonForm
									onClick={() => onEdit(list)}
									title="Edit Event"
								>
									<AiFillEdit />
								</ButtonForm>

								<ButtonForm
									className="btn-danger"
									onClick={() => onDelete(list.id)}
									title="Delete Event"
								>
									<AiFillDelete />
								</ButtonForm>
							</td>
						</tr>
					))}

					{emptyLists && (
						<tr>
							<td className="text-center" colSpan="6">
								<div className="text-danger">
									<i className="fa fa-exclamation-triangle"></i>
									Evento não encontrados!
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

export default LocationList;
