import Image from 'next/image'
import { getAPIClient } from '../../../services'

import { AdminLayout } from '../../../components'

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
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body py-2">
                            <h4 className="page-title">
                                <i className="fa fa-user title-icon mr-1"></i> Profile
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!isLoading" className="card">
                <div className="card-header text-center">
                    <Image 
                        src={user.avatar_url} 
                        className="rounded-circle" 
                        width="100" 
                        height="100"
                        alt="User Avatar"
                    />

                    {/* <div className="my-2">
                        <router-link :to="{name: profile}" className="btn btn-sm btn-outline-success btn-rounded">
                            <i className="fa fa-edit" /> Alterar Meu Perfil
                        </router-link>
                    </div> */}
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
                                    {/* <Status :status="user.status" /> */}
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