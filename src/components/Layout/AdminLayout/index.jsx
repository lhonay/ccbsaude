import { Navbar, Sidebar } from '@/components'

const AdminLayout = ({ children }) => (
    <div>
        <Navbar />
        <div className="container-fluid">
            <div className="wrapper">
                <Sidebar  />
                <div className="content-page">
                    <div className="content content-main">
                        <div className="loadings hidden"></div>
                        <main id="content-box">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AdminLayout