import { useState } from 'react'
import { useRouter } from 'next/router'

import { useRoles } from '@/hooks'
import { getAPIClient } from '@/services'

import { AdminLayout, Button, Header, SearchInput } from '@/components'

import RoleList from './list'
import RoleForm from './form'

export async function getServerSideProps(context) {
    const api = getAPIClient(context)

    const { data, meta } = await api.get('roles', { params: context.query })
  
    return {
        props: {
            roles: data,
            meta: meta,
        }
    }
}

const Roles = ({ roles, meta }) => {
    const [role, setRole] = useState({})
    const [search, setSearch] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const router = useRouter()

    const { destroy } = useRoles()

    const onChange = event => setSearch(event.target.value)

    const refreshData = (page = 1) => {
        const query = { page }

        if (search) {
            query.name = search
        }

        router.replace({ pathname: router.pathname, query })
    }

    const create = () => {
        setRole({})
        setShowModal(true)
    }

    const edit = data => {
        setRole(data)
        setShowModal(true)
    }

    const remove = async id => {
        await destroy(id)
        refreshData()
    }

    return (
        <AdminLayout>
            <div className="row">
                <div className="col-xl-12">
                    <Header icon='list' title='Roles' />
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <SearchInput 
                                        placeholder='Find by role name'
                                        changeSearch={onChange}
                                        onSearch={() => refreshData()} 
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Button
                                        icon='plus' 
                                        label='Create Role'
                                        className='btn-outline-success btn-rounded'
                                        onClick={create} 
                                    />
                                </div>
                            </div>
                            <RoleList 
                                roles={roles}
                                onEdit={edit}
                                onDelete={remove} 
                                pagination={meta}
                                onChangePage={refreshData} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <RoleForm
                visible={showModal}
                role={role}
                isEdit={!!role}
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

export default Roles