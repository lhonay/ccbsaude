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
	useRegionals,
	RegionalList,
	RegionalForm,
} from "@/modules/app/regionals";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("regionals", {
		params: context.query,
	});

	return {
		props: {
			regionals: data,
			meta: meta,
		},
	};
}

const Schedules = ({ regionals, meta }) => {
	const [regional, setRegional] = useState({});
	const [search, setSearch] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const router = useRouter();

	const { destroy } = useRegionals();

	const onChange = (event) => setSearch(event.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setRegional({});
		setShowModal(true);
	};

	const edit = (data) => {
		setRegional(data);
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
			<HeaderForm module="Cadastros" menu="Regional" link="regionals" />

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
									label="Nova Regional"
									className="btn-outline-primary"
									onClick={create}
								>
									<AiFillPlusCircle className="mr-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<RegionalList
							lists={regionals}
							onEdit={edit}
							onDelete={remove}
							pagination={meta}
							onChangePage={refreshData}
						/>
					</div>
				</div>
			</div>
			<RegionalForm
				visible={showModal}
				data={regional}
				isEdit={!!regional?.id}
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

export default Schedules;
