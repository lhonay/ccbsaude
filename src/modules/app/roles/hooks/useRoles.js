import { useState } from "react";

import { api } from "@/services";
import { formatApiErrors } from "@/utils";

const useRoles = () => {
	const [role, setRole] = useState({});
	const [roles, setRoles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [apiErrors, setApiErrors] = useState([]);

	const initForm = (data) => {
		setRole(data);
		setLoading(false);
		setSuccess(null);
		setApiErrors([]);
	};

	const getRolesOptions = async () => {
		try {
			setLoading(true);
			const { data } = await api.get("roles");
			setRoles(data);
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

			const { message } = role?.id
				? await api.patch(`roles/${role.id}`, payload)
				: await api.post("roles", payload);

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
			await api.delete(`roles/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		roles,
		loading,
		success,
		apiErrors,
		initForm,
		getRolesOptions,
		save,
		destroy,
	};
};

export default useRoles;
