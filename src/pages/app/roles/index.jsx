import { useState } from 'react'
import { useRouter } from 'next/router'

import { useRoles } from '@/hooks'
import { getAPIClient } from '@/services'
import { AdminLayout } from '@/components'

import RoleForm from './form'
import Link from 'next/link'

export async function getServerSideProps(context) {
    const api = getAPIClient(context)
  
    const params = context.query
    const roles = await api.get('roles', { params })
  
    return {
        props: {
            roles: roles.data,
            meta: roles.meta,
        }
    }
}

const Roles = ({ roles, meta }) => {
    const [role, setRole] = useState({})
    // const [page, setPage] = useState(1)
    const [search, setSearch] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const router = useRouter()

    const { destroy } = useRoles()

    const onChange = event => setSearch(event.target.value)

    const refreshData = (page = 1) => {
        router.replace({
            pathname: router.pathname,
            query: {
                page: page ?? 1, 
                name: search, 
            },
        })
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
                    <div className="card">
                        <div className="card-body py-2">
                            <h4 className="page-title">
                                <i className="fa fa-list title-icon mr-1"></i> Roles
                            </h4>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <div className="input-group">
                                        <input className="form-control" onChange={onChange} placeholder="Find by role name" />
                                        <div className="input-group-append mr-1">
                                            <button type="button" className="btn btn-outline-secondary" onClick={refreshData}>
                                                <i className="fa fa-search"></i> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-outline-success btn-rounded" onClick={create}>
                                        <i className="fa fa-plus"></i> Create Role
                                    </button>
                                </div>
                            </div>
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr className="bg-light">
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Created At</th>
                                        <th className="text-center w-15">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map(role => (
                                        <tr key={role.id}>
                                            <td>{role.id}</td>
                                            <td>{role.name}</td>
                                            <td>{role.description}</td>
                                            <td>{role.created_at}</td>
                                            <td className="text-center w-15">
                                                <button className="btn btn-sm btn-info mr-1" title="Edit Role" onClick={() => edit(role)}>
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                
                                                <button className="btn btn-sm btn-danger" title="Delete Role" onClick={() => remove(role.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {roles.length == 0 && (
                                        <tr>
                                             <td className="text-center" colSpan="5">
                                                <div className="alert alert-danger">
                                                    <i className="fa fa-exclamation-triangle"></i> Roles not found!
                                                </div>
                                             </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="row justify-content-md-center">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">
                                                    <i className="fa fa-arrow-left"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        {[...Array(meta.last_page)].map((page, index) =>
                                            <li className={`page-item ${(index+1) == meta.current_page ? 'active' : ''}`} key={page}>
                                                <button href="#" className="page-link" onClick={() => refreshData(index+1)}>
                                                    {index+1}
                                                </button>
                                            </li>
                                        )}

                                        <li className="page-item">
                                            <a href="#" className="page-link">
                                                <i className="fa fa-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RoleForm
                visible={showModal}
                role={role}
                onClose={() => {
                    setShowModal(false)
                    refreshData()
                }}
            />
        </AdminLayout>
    )
}

export default Roles