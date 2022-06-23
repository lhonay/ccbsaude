import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { api } from '../services'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(null)

    const router = useRouter()

    useEffect(() => {
        const { 'nextadmin.token': token } = parseCookies()

        if (token) {
            getUser()
        }
    }, [])

    async function getUser() {
        try {
            const { data } = await api.get('profile')
            setUser(data)
        } catch (error) {
            alert(`Get user: ${error}`)
        }
    }

    async function signIn(payload) {
        try {
            setLoading(true)

            const { access_token: token } = await api.post('login', payload)

            setCookie(null, 'nextadmin.token', token, {
                maxAge: 60 * 60 * 2,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            await getUser()

            setError(false)

            router.push('/app/dashboard')
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }     
    }

    async function logOut() {
        await api.delete('logout')

        destroyCookie(null, 'nextadmin.token')

        router.push('/login')
    }

    const values = {
        loading,
        error, 
        user, 
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}