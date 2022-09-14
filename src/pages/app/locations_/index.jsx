import { useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { getAPIClient } from "@/services";

import { AdminLayout, Button, Header, SearchInput } from "@/common/components";

import { useLocations, List, Form } from "@/modules/app/locations/";

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
	const [showModal, setShowModal] = useState(false);

	const router = useRouter();

	const { destroy } = useLocations();

	const onChange = (event) => setSearch(event.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setLocation({});
		setShowModal(true);
	};

	const edit = (data) => {
		setLocation(data);
		setShowModal(true);
	};

	const remove = async (id) => {
		const shouldDelete = confirm(
			"Do you really want to delete this location?"
		);

		if (shouldDelete) {
			await destroy(id);
			toast.success("User deleted successfully!");
			refreshData();
		}
	};

	return (
		<AdminLayout>
			<Header link="locations" icon="localities" title="Localidades" />
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body">
							<div className="row mb-2">
								<div className="col-md-10">
									<SearchInput
										placeholder="Find by location name or email"
										changeSearch={onChange}
										onSearch={() => refreshData()}
									/>
								</div>
								<div className="col-md-2">
									<Button
										icon="plus"
										label="Nova Localidade"
										className="btn-outline-success btn-rounded"
										onClick={create}
									/>
								</div>
							</div>
							<List
								lists={lists}
								onEdit={edit}
								onDelete={remove}
								pagination={meta}
								onChangePage={refreshData}
							/>
						</div>
					</div>
				</div>
			</div>

			<Form
				visible={showModal}
				data={location}
				isEdit={!!location?.id}
				onClose={(success) => {
					setShowModal(true);

					if (success) {
						refreshData();
					}
				}}
			/>
		</AdminLayout>
	);
};

export default Locations;
