import { useState } from "react";

import { getAPIClient } from "@/services";
import { AdminLayout, HeaderForm } from "@/common/components";

import { EventForm } from "@/modules/app/events";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data, meta } = await api.get("events", { params: context.query });

	return {
		props: {
			data: data,
			meta: meta,
		},
	};
}

const EventCreate = ({ data, meta }) => {
	const [event, setEvent] = useState({});

	return (
		<AdminLayout>
			<HeaderForm
				module="Cadastros"
				menu="Eventos"
				link="events/create"
				form
			/>
			<div className="col-md-12">
				<EventForm event={event} />
			</div>
		</AdminLayout>
	);
};

export default EventCreate;
