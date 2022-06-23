import { useState } from 'react'
import { useRouter } from 'next/router'

import { api } from '../services'
import { formatApiErrors } from '../utils'

const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const [apiErrors, setApiErrors] = useState([])

    const router = useRouter()
    
    const signUp = async payload => {
        try {
            setLoading(true)

            await api.post('register', payload)

            router.push('/login')
        } catch ({ response }) {
            if (response.status === 422) {
                const _errors = formatApiErrors(response.data.errors)
                setApiErrors(_errors)
            }
            
            if (response.status === 404) {
                setApiErrors([response.data.message])
            }
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        apiErrors,
        signUp,
    }
}

export default useRegister