import { useState } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'

import { useUsers } from '@/hooks'
import { getAPIClient } from '@/services'

import { AdminLayout, Button, Header, SearchInput } from '@/components'

import UserList from './list'
import UserForm from './form'

export async function getServerSideProps(context) {
    const api = getAPIClient(context)

    const { data, meta } = await api.get('users', { params: context.query })

    return {
        props: {
            users: data,
            meta: meta,
        }
    }
}

const Users = ({ users, meta }) => {
    const [user, setUser] = useState({})
    const [search, setSearch] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const router = useRouter()

    const { destroy } = useUsers()

    const onChange = event => setSearch(event.target.value)

    const refreshData = (page = 1) => {
        const query = { page }

        if (search) {
            query.name = search
        }

        router.replace({ pathname: router.pathname, query })
    }

    const create = () => {
        setUser({})
        setShowModal(true)
    }

    const edit = data => {
        setUser(data)
        setShowModal(true)
    }

    const remove = async id => {
        const shouldDelete = confirm('Do you really want to delete this user?')
        
        if (shouldDelete) {
            await destroy(id)
            toast.success('User deleted successfully!')
            refreshData()
        }
    }

    return (
        <AdminLayout>
            <Header icon='users' title='Users' />
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <SearchInput 
                                        placeholder='Find by user name or email'
                                        changeSearch={onChange}
                                        onSearch={() => refreshData()} 
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Button
                                        icon='plus' 
                                        label='Create User'
                                        className='btn-outline-success btn-rounded'
                                        onClick={create} 
                                    />
                                </div>
                            </div>
                            <UserList 
                                users={users}
                                onEdit={edit}
                                onDelete={remove} 
                                pagination={meta}
                                onChangePage={refreshData}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <UserForm
                visible={showModal}
                user={user}
                isEdit={!!user?.id}
                onClose={success => {
                    setShowModal(false)

                    if (success) {
                        refreshData()
                    }
                }}
            />
        </AdminLayout>
    )
}

export default Users