import Link from 'next/link'
import Image from 'next/image'

import { useAuth } from '@/hooks'

const Sidebar = () => {
    const { user, logOut } = useAuth()

    const onLogout = () => {
        const shouldDelete = confirm('Do you really want logout?')
        
        if (shouldDelete) {
            logOut()
        }
    }

    return (
        <div className="left-side-menu left-side-menu-detached content-main">
            <div className="leftbar-user">
                <Link href="/app/profile">
                    <a>
                        <Image 
                            src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg" 
                            className="rounded-circle" 
                            width="60" 
                            height="60" 
                            alt="User Avatar"
                        />
                        <span className="leftbar-user-name">{user?.name}</span>
                    </a>
                </Link>
            </div>

            <ul className="metismenu side-nav side-nav-light mt-0">
                <li className="side-nav-item">
                    <Link href="/app/dashboard">
                        <a className="side-nav-link">
                            <i className="fa fa-tachometer-alt"></i> Dashboard 
                        </a>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link href="/app/profile">
                        <a className="side-nav-link">
                            <i className="fa fa-user"></i> Profile 
                        </a>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link href="/app/roles">
                        <a className="side-nav-link">
                            <i className="fa fa-list"></i> Roles 
                        </a>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link href="/app/users">
                        <a className="side-nav-link">
                            <i className="fa fa-users"></i> Users 
                        </a>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link href="/app/charts">
                        <a className="side-nav-link">
                            <i className="fa fa-chart-line"></i> Charts 
                        </a>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link href="#">
                        <a className="side-nav-link" onClick={onLogout}>
                            <i className="fa fa-power-off"></i> Logout 
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar