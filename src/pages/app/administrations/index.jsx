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

import {
	useAdministrations,
	AdministrationList,
	AdministrationForm,
} from "@/modules/app/administrations";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("administrations", {
		params: context.query,
	});

	return {
		props: {
			administrations: data,
			meta: meta,
		},
	};
}

const Administrations = ({ administrations, meta }) => {
	const [administration, setAdministration] = useState({});
	const [search, setSearch] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const router = useRouter();

	const { destroy } = useAdministrations();

	const onChange = (event) => setSearch(event.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setAdministration({});
		setShowModal(true);
	};

	const edit = (data) => {
		setAdministration(data);
		setShowModal(true);
	};

	const remove = async (id) => {
		confirmDelete({
			onConfirm: () => {
				destroy(id);
				refreshData();
			},
			onCancel: refreshData(),
		});
	};

	return (
		<AdminLayout>
			<HeaderForm
				module="Cadastros"
				menu="Administração"
				link="administrations"
			/>

			<div className="col-md-12">
				<div className="card">
					<div className="card-header">
						<div className="row row-demo-grid">
							<div className="col-md-6">
								<SearchInput
									placeholder="Buscar por nome"
									changeSearch={onChange}
									onSearch={() => refreshData()}
								/>
							</div>
							<div className="col-md-6 ml-auto text-right">
								<Button
									label="Nova Administração"
									className="btn-outline-primary"
									onClick={create}
								>
									<AiFillPlusCircle className="mr-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<AdministrationList
							lists={administrations}
							onEdit={edit}
							onDelete={remove}
							pagination={meta}
							onChangePage={refreshData}
						/>
					</div>
				</div>
			</div>
			<AdministrationForm
				visible={showModal}
				data={administration}
				isEdit={!!administration?.id}
				onClose={(success) => {
					setShowModal(false);

					if (success) {
						refreshData();
					}
				}}
			/>
		</AdminLayout>
	);
};

export default Administrations;
