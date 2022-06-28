import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useAuth } from '@/hooks'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const { user, logOut } = useAuth()

    const onLogout = () => {
        const shouldDelete = confirm('Do you really want logout?')
        
        if (shouldDelete) {
            logOut()
        }
    }

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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                        onClick={() => setShowMenu(state => !state)}>
                            <span className="account-user-avatar">
                                <Image 
                                    src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg" 
                                    className="rounded-circle" 
                                    width="40" 
                                    height="40" 
                                    alt="User Avatar"
                                />
                            </span>
                            <span className="account-user-name ml-1">{user?.name}</span>
                        </a>
                        <ul className={`dropdown-menu ${showMenu ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                            <li>
                                <Link href="/app/profile">
                                    <a className="dropdown-item notify-item">
                                        <i className="fa fa-user-circle"></i>&nbsp; Meu Perfil
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/app/profile">
                                    <a className="dropdown-item notify-item">
                                        <i className="fa fa-user-edit"></i>&nbsp; Alterar Perfil
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="dropdown-item notify-item" onClick={onLogout}>
                                        <i className="fa fa-power-off"></i>&nbsp; Logout 
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar