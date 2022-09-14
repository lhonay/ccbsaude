import { useState } from "react";

import { api } from "@/services";
import { formatApiErrors } from "@/utils";

const useRegionals = () => {
	const [model] = useState("regionals");
	const [regional, setRegional] = useState({});
	const [regionals, setRegionals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [apiErrors, setApiErrors] = useState([]);

	const initForm = (data) => {
		setRegional(data);
		setLoading(false);
		setSuccess(null);
		setApiErrors([]);
	};

	const getRegionalsOptions = async () => {
		try {
			setLoading(true);
			const { data } = await api.get("regionals");
			setRegionals(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getRegional = async (id) => {
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

			const { message } = regional?.id
				? await api.patch(`${model}/${regional.id}`, payload)
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
		regional,
		regionals,
		getRegionalsOptions,
		getRegional,
		save,
		destroy,
	};
};

export default useRegionals;
