import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="navbar-custom fixed-top topnav-navbar bg-success">
            <div className="container-fluid">
                <Link href="/app/dashboard">
                    <a className="topnav-logo">
                        <span className="topnav-logo-lg">
                            <Image 
                                src="/static/images/logo-w.png" 
                                width="40" 
                                height="40" 
                                alt="HelpDesk Logo" 
                            />
                        </span>
                    </a>
                </Link>

                <ul className="navbar-nav list-unstyled topbar-right-menu float-right">
                    <Link href="/app/profile">
                        <a className="nav-link">
                            <span className="account-user-avatar">
                                <Image 
                                    src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg" 
                                    className="rounded-circle" 
                                    width="40" 
                                    height="40" 
                                    alt="User Avatar"
                                />
                            </span>
                        </a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar