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

import { useLocations, LocationList } from "@/modules/app/locations";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("locations", {
		params: context.query,
	});

	return {
		props: {
			lists: data,
			meta: meta,
		},
	};
}

const Locations = ({ lists, meta }) => {
	const [location, setLocation] = useState({});
	const [search, setSearch] = useState(null);

	const router = useRouter();

	const { destroy } = useLocations();

	const onChange = (location) => setSearch(location.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setLocation({});
		router.push("/app/locations/create");
	};

	const edit = (data) => {
		router.push(`/app/locations/${data.id}`);
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
			<HeaderForm
				module="Cadastros"
				menu="Localidades"
				link="locations"
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
									label="Novo Localização"
									className="btn-outline-primary"
									onClick={create}
								>
									<AiFillPlusCircle className="mr-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<LocationList
							lists={lists}
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

export default Locations;
