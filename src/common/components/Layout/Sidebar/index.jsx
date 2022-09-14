import { useContext } from "react";

import Link from "next/link";

import { BiHomeAlt, BiUser, BiSpreadsheet } from "react-icons/bi";
import { MdAddBox, MdOutlineHomeWork } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { GiTempleGate } from "react-icons/gi";

import { useAuth } from "@/hooks";

const Sidebar = () => {
	const { user, logOut } = useAuth();

	const onLogout = () => {
		const shouldDelete = confirm("Do you really want logout?");

		if (shouldDelete) {
			logOut();
		}
	};

	return (
		<div className="sidebar sidebar-style-2">
			{/* aqui */}
			<div className="sidebar-wrapper scrollbar scrollbar-inner">
				<div className="sidebar-content">
					<div className="user">
						<div className="avatar-sm float-left mr-2">
							<img
								// src="{avatar_url}"
								src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg"
								alt="Avatar"
								className="avatar-img rounded-circle"
							/>
						</div>
						<div className="info">
							<a
								data-toggle="collapse"
								href="#collapseExample"
								aria-expanded="true"
							>
								<span>
									{user?.name}
									<span className="user-level">
										{user?.email}
									</span>
									<span className="caret"></span>
								</span>
							</a>
							<div className="clearfix"></div>

							<div className="collapse in" id="collapseExample">
								<ul className="nav">
									<li>
										<a href="#profile">
											<span className="link-collapse">
												My Profile
											</span>
										</a>
									</li>
									<li>
										<a href="#edit">
											<span className="link-collapse">
												Edit Profile
											</span>
										</a>
									</li>
									<li>
										<a href="#settings">
											<span className="link-collapse">
												Settings
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<ul className="nav nav-primary">
						<li className="nav-item active">
							<a
								data-toggle="collapse"
								href="#dashboard"
								className="collapsed"
								aria-expanded="false"
							>
								<BiHomeAlt className="h3 mt-1 ml-1 color-white" />
								<p className="pl-2">Dashboard</p>
								<span className="caret"></span>
							</a>
							<div className="collapse" id="dashboard">
								<ul className="nav nav-collapse">
									<li>
										<a href="../demo1/index.html">
											<span className="sub-item">
												Dashboard 1
											</span>
										</a>
									</li>
									<li>
										<a href="../demo2/index.html">
											<span className="sub-item">
												Dashboard 2
											</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-section">
							<span className="sidebar-mini-icon">
								<i className="fa fa-ellipsis-h"></i>
							</span>
							<h4 className="text-section">MENU</h4>
						</li>
						<li className="nav-item">
							<a data-toggle="collapse active" href="#base">
								<MdAddBox className="h2 m-0 pr-1" />
								<p>Cadastros</p>
								<span className="caret"></span>
							</a>
							<div className="collapse show" id="base">
								<ul className="nav nav-collapse">
									<li>
										<Link href="/app/roles">
											<a className="side-nav-link">
												<BiSpreadsheet className="h2 m-0 pr-1" />
												Permissões
											</a>
										</Link>
									</li>
									<li>
										<Link href="/app/users">
											<a className="side-nav-link">
												<BiUser className="h2 m-0 pr-1" />
												Usuarios
											</a>
										</Link>
									</li>
									<li>
										<Link href="/app/regionals">
											<a className="side-nav-link">
												<BiUser className="h2 m-0 pr-1" />
												Regional
											</a>
										</Link>
									</li>
									<li>
										<Link href="/app/administrations">
											<a className="side-nav-link">
												<MdOutlineHomeWork className="h2 m-0 pr-1" />
												Administração
											</a>
										</Link>
									</li>
									<li>
										<Link href="/app/locations">
											<a className="side-nav-link">
												<GiTempleGate className="h2 m-0 pr-1" />
												Localidades
											</a>
										</Link>
									</li>
									<li>
										<Link href="/app/events">
											<a className="side-nav-link">
												<BsCalendar2Event className="h2 m-0 pr-1" />
												Eventos
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		// <div className="left-side-menu left-side-menu-detached content-main">
		// 	<div className="leftbar-user">
		// 		<Link href="/app/profile">
		// 			<a>
		// 				<Image
		// 					src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg"
		// 					className="rounded-circle"
		// 					width="60"
		// 					height="60"
		// 					alt="User Avatar"
		// 				/>
		// 				<span className="leftbar-user-name">{user?.name}</span>
		// 			</a>
		// 		</Link>
		// 	</div>

		// 	<ul className="metismenu side-nav side-nav-light mt-0">
		// 		<li className="side-nav-item">
		// 			<Link href="/app/dashboard">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-tachometer-alt"></i> Dashboard
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/profile">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-user"></i> Profile
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/roles">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-list"></i> Roles
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/users">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-users"></i> Usuarios
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/locations">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-users"></i> Localidades
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/regionals">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-users"></i> Regional
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/administrations">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-users"></i> Administração
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="/app/charts">
		// 				<a className="side-nav-link">
		// 					<i className="fa fa-chart-line"></i> Charts
		// 				</a>
		// 			</Link>
		// 		</li>

		// 		<li className="side-nav-item">
		// 			<Link href="#">
		// 				<a className="side-nav-link" onClick={onLogout}>
		// 					<i className="fa fa-power-off"></i> Logout
		// 				</a>
		// 			</Link>
		// 		</li>
		// 	</ul>
		// </div>
	);
};

export default Sidebar;
