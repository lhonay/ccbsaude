import { useState } from "react";

import { api } from "@/services";
import { formatApiErrors } from "@/utils";

const useSchedules = () => {
	const [model] = useState("schedules");
	const [schedule, setSchedule] = useState({});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [apiErrors, setApiErrors] = useState([]);

	const initForm = (data) => {
		setSchedule(data);
		setLoading(false);
		setSuccess(null);
		setApiErrors([]);
	};

	const save = async (payload) => {
		try {
			setLoading(true);
			setSuccess(null);

			// const { message } = schedule?.id
			// 	? await api.patch(`${model}/${schedule.id}`, payload)
			// 	: await api.post(`${model}`, payload);

			const { message } = await api.post(`${model}`, payload);

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

	return {
		loading,
		success,
		setApiErrors,
		apiErrors,
		initForm,
		fetch,
		schedule,
		save,
	};
};

export default useSchedules;
