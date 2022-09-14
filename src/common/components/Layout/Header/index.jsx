import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import {
	BsLayoutSidebarInset,
	BsLayoutSidebar,
	BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

import { setCookie, destroyCookie, parseCookies } from "nookies";

const Header = ({ icon, title, link }) => {
	const [user, setUser] = useState(false);

	const handleSidebar = () => {
		// 	// Parse
		// 	const { sidebar: siderbar } = parseCookies();

		// 	setUser(!sidebar);

		// 	setCookie(null, "sidebar", user, {
		// 		maxAge: 30 * 24 * 60 * 60,
		// 	});

		// 	// Destroy
		// 	// destroyCookie(null, 'cookieName')
		alert("alerta");
	};

	return (
		<div className="logo-header" data-background-color="blue">
			<Link href={`/app/`}>
				<a href="" className="logo">
					{/* <img
				src="../../../assets/img/logo.svg"
				alt="navbar brand"
				className="navbar-brand"
			/> */}
					<AiFillMedicineBox className="mr-1 mt--1" />
					CCB Saúde
				</a>
			</Link>
			<button
				className="navbar-toggler sidenav-toggler ml-auto"
				type="button"
				onClick={handleSidebar}
			>
				<span className="navbar-toggler-icon">
					<BsLayoutSidebarInset /> 1
				</span>
			</button>
			<button className="topbar-toggler more" onClick={handleSidebar}>
				<BsLayoutSidebarInsetReverse /> 2
			</button>
			<div className="nav-toggle" onClick={handleSidebar}>
				<button className="btn btn-toggle toggle-sidebar">
					<BsLayoutSidebar /> 3
				</button>
			</div>
		</div>
		// <div className="row">
		// 	<div className="col-xl-12">
		// 		<div className="card">
		// 			<div className="card-body py-2">
		// 				<h4 className="page-title">
		// 					<Link href={`/app/${link}`}>
		// 						<a>
		// 							<i
		// 								className={`fa fa-${icon} title-icon mr-1`}
		// 							></i>
		// 							{title}
		// 						</a>
		// 					</Link>
		// 				</h4>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Header;
