import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

const useAuth = () => {
    const context = useContext(AuthContext)

    if (! context) {
        throw new Error('Error on creaate the auth context!')
    }

    return context
}

export default useAuth