import axios from 'axios'

const api = axios.create({
    // baseURL: process.env.API_URL,
    baseURL: 'http://backend-admin.nettdesk.com.br/api/v1/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

api.interceptors.request.use(async config => {
    try {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    } catch (error) {
        console.log(error)
    }
})

api.interceptors.response.use(response => response.data, error => {
    if (!error.response) {
        // toast({ status: 'error', message: 'Error connecting to server!' })
    }

    if (error.response.status == 401) {
        // localStorage.removeItem('access_token')
    }

    if (error.response.status == 500) {
        // toast({ status: 'error', message: 'Error executing the action!' })
    }

    return Promise.reject(error)
})

export default api