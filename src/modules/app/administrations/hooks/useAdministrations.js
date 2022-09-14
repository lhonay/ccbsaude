import { useState } from "react";

import { api } from "@/services";
import { formatApiErrors } from "@/utils";

const useAdministrations = () => {
	const [model] = useState("administrations");
	const [administration, setAdministration] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [apiErrors, setApiErrors] = useState([]);

	const initForm = (data) => {
		setAdministration(data);
		setLoading(false);
		setSuccess(null);
		setApiErrors([]);
	};

	const get = async (id) => {
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

			const { message } = administration?.id
				? await api.patch(`${model}/${administration.id}`, payload)
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
			setSuccess(null);
			const { message } = await api.delete(`${model}/${id}`);
			setSuccess(message);
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
		administration,
		get,
		save,
		destroy,
	};
};

export default useAdministrations;
