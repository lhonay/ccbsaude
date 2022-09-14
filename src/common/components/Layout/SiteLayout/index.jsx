import { Header, Navbar, Sidebar, Footer } from "@/common/components";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import Head from "next/head";
const SiteLayout = ({ children }) => {
	return (
		<>
			<div className="content" id="content-box">
				{children}
			</div>
		</>
	);
};

export default SiteLayout;
