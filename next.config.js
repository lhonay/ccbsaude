module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			// {
			// 	source: "/",
			// 	destination: "/",
			// 	permanent: true,
			// },
			{
				source: "/app",
				destination: "/app/dashboard",
				permanent: true,
			},
		];
	},
	images: {
		domains: ["backend-admin.nettdesk.com.br"],
	},
};
