import { AdminLayout, Header } from '@/components'

const Users = () => {
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-xl-12">
                    <Header icon='users' title='Users' />
                </div>
            </div>
        </AdminLayout>
    )
}

export default Users