import { AdminLayout, Header, DashCard } from '@/components'

const Dashboard = () => {

    const menus = [
        {
            icon: 'users',
            label: 'Users',
            amount: 1000,
        },
        {
            icon: 'list',
            label: 'Roles',
            amount: 1000,
        },
        {
            icon: 'check',
            label: 'Permissions',
            amount: 1000,
        }
    ]

    return (
        <AdminLayout>
            <Header icon='tachometer-alt' title='Dashboard' />
            <div className="row">
                {menus.map((menu, index) => (
                    <DashCard key={index}  {...menu} />
                ))}
            </div>
        </AdminLayout>
    )
}

export default Dashboard