import Link from 'next/link'
import Image from 'next/image'

import { getAPIClient } from '@/services'
import { AdminLayout, Header, Status } from '@/components'

export async function getServerSideProps(context) {
    const api = getAPIClient(context)
  
    const { data } = await api.get('profile')
  
    return {
        props: {
            user: data,
        }
    }
}

const Profile = ({ user }) => {
    return (
        <AdminLayout>
            <Header icon='user' title='Profile' />
            <div className="card">
                <div className="card-header text-center">
                    <Image 
                        src={user.avatar_url} 
                        className="rounded-circle" 
                        width="100" 
                        height="100"
                        alt="User Avatar"
                    />

                    <div className="my-2">
                        <Link href="/app/profile/edit">
                            <a className="btn btn-sm btn-outline-success btn-rounded">
                                <i className="fa fa-edit" /> Alterar Meu Perfil
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-md-12">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nome</label>
                            <div className="col-md-9">
                                <p className="form-control-plaintext">{user.name}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-md-9">
                                <p className="form-control-plaintext">{user.email}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Roles</label>
                            <div className="col-md-9">
                                {user.roles.map(role => (
                                    <button key={role.id} className="btn btn-sm btn-success mr-1 mb-1">
                                        {role.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <hr />

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Status</label>
                            <div className="col-md-9">
                                <p className="form-control-plaintext">
                                    <Status status={user.status} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Profile