import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/hooks";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container-fluid">
				<nav className="pull-left">
					<ul className="nav">
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://www.themekita.com"
							>
								ThemeKita
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Help
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Licenses
							</a>
						</li>
					</ul>
				</nav>
				<div className="copyright ml-auto">
					2018, made with{" "}
					<i className="fa fa-heart heart text-danger"></i> by{" "}
					<a href="https://www.themekita.com">ThemeKita</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
