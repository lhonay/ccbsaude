import { useState } from 'react'

import { api } from '@/services'
import { formatApiErrors } from '@/utils'

const useUsers = () => {
    const [role, setRole] = useState({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [apiErrors, setApiErrors] = useState([])

    const initForm = data => {
        setRole(data)
        setLoading(false)
        setSuccess(null)
        setApiErrors([])
    }

    const save = async payload => {
        try {
            setLoading(true)
            setSuccess(null)

            const { message } = role?.id 
                ? await api.patch(`users/${role.id}`, payload)
                : await api.post('users', payload)

            setSuccess(message)
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

    const destroy = async id => {
        try {
            await api.delete(`users/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        loading,
        success,
        apiErrors,
        initForm,
        fetch,
        save,
        destroy,
    }
}

export default useUsers