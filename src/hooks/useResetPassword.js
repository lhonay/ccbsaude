import { useState } from 'react'
import { api } from '@/services'
import { formatApiErrors } from '@/utils'

const useResetPassword = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [apiErrors, setApiErrors] = useState([])
    
    const resetPassword = async payload => {
        try {
            setLoading(true)

            const response = await api.post('password/reset', payload)
            
            setSuccess(response.message)
            setApiErrors([])
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
        success,
        apiErrors,
        resetPassword,
    }
}

export default useResetPassword