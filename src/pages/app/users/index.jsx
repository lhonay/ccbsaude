import { useState } from "react";
import { useRouter } from "next/router";

import { getAPIClient } from "@/services";

import { confirmDelete } from "@/utils";

import { AiFillPlusCircle } from "react-icons/ai";

import {
	AdminLayout,
	Button,
	HeaderForm,
	SearchInput,
} from "@/common/components";

import { useUsers, UserList } from "@/modules/app/users/";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("users", { params: context.query });

	return {
		props: {
			users: data,
			meta: meta,
		},
	};
}

const Users = ({ users, meta }) => {
	const [user, setUser] = useState({});
	const [search, setSearch] = useState(null);

	const router = useRouter();

	const { destroy } = useUsers();

	const onChange = (event) => setSearch(event.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setUser({});
		router.push("/app/users/create");
	};

	const edit = (data) => {
		router.push(`/app/users/${data.id}`);
	};

	const remove = async (id) => {
		confirmDelete({
			labelConfirm: "Sim, Excluir",
			onConfirm: () => {
				destroy(id);
				refreshData();
			},
			onCancel: refreshData(),
		});
	};

	return (
		<AdminLayout>
			<HeaderForm module="Cadastros" menu="Usuários" link="users" />

			<div className="col-md-12">
				<div className="card">
					<div className="card-header">
						<div className="row row-demo-grid">
							<div className="col-md-6">
								<SearchInput
									placeholder="Buscar por nome ou e-mail"
									changeSearch={onChange}
									onSearch={() => refreshData()}
								/>
							</div>
							<div className="col-md-6 ml-auto text-right">
								<Button
									label="Novo Usuario"
									className="btn-outline-primary"
									onClick={create}
								>
									<AiFillPlusCircle className="mr-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<UserList
							users={users}
							onEdit={edit}
							onDelete={remove}
							pagination={meta}
							onChangePage={refreshData}
						/>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default Users;
