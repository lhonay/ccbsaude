import { useState } from "react";

import { api } from "@/services";
import { formatApiErrors } from "@/utils";

const useEvents = () => {
	const [model] = useState("events");
	const [event, setEvent] = useState({});
	// const [role, setRole] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [apiErrors, setApiErrors] = useState([]);

	const initForm = (data) => {
		setEvent(data);
		setLoading(false);
		setSuccess(null);
		setApiErrors([]);
	};

	const show = async (id) => {
		try {
			setLoading(true);
			await api.get(`${model}/${id}`);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const save = async (payload) => {
		try {
			setLoading(true);
			setSuccess(null);

			const { message } = event?.id
				? await api.patch(`${model}/${event.id}`, payload)
				: await api.post(`${model}`, payload);

			setSuccess(message);
		} catch ({ response }) {
			if (response.status === 422) {
				const _errors = formatApiErrors(response.data.errors);
				setApiErrors(_errors);
			}

			if (response.status === 404) {
				setApiErrors([response.data.message]);
			}
		} finally {
			setLoading(false);
		}
	};

	const destroy = async (id) => {
		try {
			await api.delete(`${model}/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		loading,
		success,
		apiErrors,
		initForm,
		fetch,
		event,
		show,
		save,
		destroy,
	};
};

export default useEvents;
