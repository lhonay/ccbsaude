import { useState } from "react";

import { AdminLayout, HeaderForm } from "@/common/components";

import { EventForm } from "@/modules/app/events";

import { getAPIClient } from "@/services";

export async function getServerSideProps(context) {
	const api = getAPIClient(context);

	const { data } = await api.get(`events/${context.query.id}`);

	return {
		props: {
			events: data,
		},
	};
}

const EventEdit = ({ events }) => {
	const [event, setEvent] = useState(events);

	return (
		<AdminLayout>
			<HeaderForm
				icon="events"
				module="Cadastros"
				menu="Eventos"
				link="events"
				form
			/>
			<div className="col-md-12">
				<EventForm event={event} isEdit={!!event?.id} />
			</div>
		</AdminLayout>
	);
};

export default EventEdit;
