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

import { useEvents, EventList } from "@/modules/app/events";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("events", { params: context.query });

	return {
		props: {
			lists: data,
			meta: meta,
		},
	};
}

const Events = ({ lists, meta }) => {
	const [event, setEvent] = useState({});
	const [search, setSearch] = useState(null);

	const router = useRouter();

	const { destroy } = useEvents();

	const onChange = (event) => setSearch(event.target.value);

	const refreshData = (page = 1) => {
		const query = { page };

		if (search) {
			query.name = search;
		}

		router.replace({ pathname: router.pathname, query });
	};

	const create = () => {
		setEvent({});
		router.push("/app/events/create");
	};

	const edit = (data) => {
		router.push(`/app/events/${data.id}`);
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
			<HeaderForm module="Cadastros" menu="Eventos" link="events" />

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
									label="Novo Evento"
									className="btn-outline-primary"
									onClick={create}
								>
									<AiFillPlusCircle className="mr-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<EventList
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

export default Events;
