import { Header, Navbar, Sidebar, Footer } from "@/common/components";
import { setCookie, destroyCookie, parseCookies } from "nookies";

const AdminLayout = ({ children }) => {
	const { sidebar: sidebar } = parseCookies();

	return (
		<>
			{/* <div className={`wrapper ${sidebar ? "" : "sidebar_minimize"}`}> */}
			{/* <div className="wrapper sidebar_minimize"> */}
			<div className="wrapper">
				<div className="main-header">
					<Header />
					<Navbar />
				</div>
				<Sidebar />
				<div className="main-panel">
					<div className="loadings hidden"></div>
					<div className="content" id="content-box">
						{children}
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default AdminLayout;
