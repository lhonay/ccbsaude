import axios from "axios";
import { parseCookies } from "nookies";

export default function getAPIClient(context = null) {
	const { token: token } = parseCookies(context);

	const api = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		timeout: 10000,
	});

	if (token) {
		api.defaults.headers["Authorization"] = `Bearer ${token}`;
	}

	api.interceptors.response.use(
		(response) => response.data,
		(error) => {
			if (!error.response) {
				toast({
					status: "error",
					message: "Error connecting to server!",
				});
			}

			if (error.response.status == 401) {
				localStorage.removeItem("token");
			}

			if (error.response.status == 500) {
				toast({
					status: "error",
					message: "Error executing the action!",
				});
			}

			return Promise.reject(error);
		}
	);

	return api;
}
