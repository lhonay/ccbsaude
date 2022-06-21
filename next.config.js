module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
    images: {
        domains: ['backend-admin.nettdesk.com.br']
    }
}
