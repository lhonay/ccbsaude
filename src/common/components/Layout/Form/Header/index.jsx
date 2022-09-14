import { useRouter } from "next/router";
import Link from "next/link";
import { BiChevronRight, BiHomeAlt } from "react-icons/bi";

const Header = ({ module, menu, link, form }) => {
	const router = useRouter();
	return (
		<div className="page-inner">
			<div className="page-header">
				<h4 className="page-title h4 color">
					{/* <Link href={`/app/${link}`}> */}
					{menu}
					{/* </Link> */}
				</h4>

				<ul className="breadcrumbs pl-3">
					<li className="nav-home">
						<Link href={`/app/`}>
							<a>
								<BiHomeAlt />
							</a>
						</Link>
					</li>
					<li className="separator">
						<BiChevronRight />
					</li>
					{module && (
						<>
							<li className="nav-item">
								<Link href={`/app/${link}`}>
									<a href="#">{module}</a>
								</Link>
							</li>
							<li className="separator">
								<BiChevronRight />
							</li>
						</>
					)}
					<li className="nav-item">
						<Link href={`/app/${link}`}>
							<a href="#">{form ? "Formulário" : "Listagem"}</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
