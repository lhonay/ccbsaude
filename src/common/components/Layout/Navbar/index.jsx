import { useState, useEffect, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import { BiExit } from "react-icons/bi";

import { useAuth } from "@/hooks";

import { BiBell } from "react-icons/bi";

const Navbar = () => {
	const { user, logOut } = useAuth();

	const [dropdownProfile, setDropdownProfile] = useState(false);
	const [showNotification, setShowNotification] = useState(false);

	const dropdownProfileRef = useRef(null);
	const showNotificationRef = useRef(null);

	useEffect(() => {
		if (!showNotification) return;
		function handleClick(event) {
			if (
				showNotificationRef.current &&
				!showNotificationRef.current.contains(event.target)
			) {
				setShowNotification(false);
			}
		}
		window.addEventListener("click", handleClick);
		return () => window.removeEventListener("click", handleClick);
	}, [showNotification]);

	useEffect(() => {
		if (!dropdownProfile) return;
		function handleClick(event) {
			if (
				dropdownProfileRef.current &&
				!dropdownProfileRef.current.contains(event.target)
			) {
				setDropdownProfile(false);
			}
		}
		window.addEventListener("click", handleClick);
		return () => window.removeEventListener("click", handleClick);
	}, [dropdownProfile]);

	const onLogout = () => {
		confirmAlert({
			title: "Atenção",
			message: "Deseja sair do Sistema?",
			buttons: [
				{
					label: "Sim, Sair!",
					onClick: () => {
						logOut();
					},
				},
				{
					label: "Cancelar",
				},
			],
			closeOnEscape: true,
		});
	};

	return (
		<nav
			className="navbar navbar-header navbar-expand-lg"
			data-background-color="blue2"
		>
			<div className="container-fluid">
				<div className="collapse" id="search-nav">
					<form className="navbar-left navbar-form nav-search mr-md-3">
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									type="submit"
									className="btn btn-search pr-1"
								>
									<i className="fa fa-search search-icon"></i>
								</button>
							</div>
							<input
								type="text"
								placeholder="Buscar ..."
								className="form-control"
							/>
						</div>
					</form>
				</div>
				<ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
					<li className="nav-item toggle-nav-search hidden-caret">
						<a className="nav-link" href="#search-nav">
							<i className="fa fa-search"></i>
						</a>
					</li>

					<li className="nav-item dropdown hidden-caret">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="notifDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={() =>
								setShowNotification((state) => !state)
							}
							ref={showNotificationRef}
						>
							<BiBell className="h2 mt-1 mb-0" />
							<span className="notification">4</span>
						</a>
						<ul
							className={`dropdown-menu notif-box animated fadeIn ${
								showNotification ? "show" : ""
							}`}
							aria-labelledby="notifDropdown"
						>
							<li>
								<div className="dropdown-title">
									Você tem 4 novas notificações
								</div>
							</li>
							<li>
								<div className="notif-scroll scrollbar-outer">
									<div className="notif-center">
										<a href="#">
											<div className="notif-icon notif-primary">
												<i className="fa fa-user-plus"></i>
											</div>
											<div className="notif-content">
												<span className="block">
													New user registered
												</span>
												<span className="time">
													5 minutes ago
												</span>
											</div>
										</a>
									</div>
								</div>
							</li>
							<li>
								<a
									className="see-all"
									href="javascript:void(0);"
								>
									Ver todas as notificações
									<i className="fa fa-angle-right"></i>
								</a>
							</li>
						</ul>
					</li>

					<li className="nav-item dropdown hidden-caret show">
						<a
							className="-toggle profile-pic"
							data-toggle="dropdown"
							href="#"
							aria-expanded="false"
							onClick={() =>
								setDropdownProfile((state) => !state)
							}
							ref={dropdownProfileRef}
						>
							<div className="avatar-sm">
								<img
									src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg"
									alt="..."
									className="avatar-img rounded-circle"
								/>
							</div>
						</a>
						<ul
							className={`dropdown-menu dropdown-user animated fadeIn ${
								dropdownProfile ? "show" : ""
							}`}
						>
							<div className="dropdown-user-scroll scrollbar-outer">
								<li>
									<div className="user-box">
										<div className="avatar-lg">
											<img
												src="http://backend-admin.nettdesk.com.br/assets/images/user-avatar.svg"
												alt="image profile"
												className="avatar-img rounded"
											/>
										</div>
										<div className="u-text">
											<h4>{user?.name}</h4>
											<p className="text-muted">
												{user?.email}
											</p>
											<a
												href="profile.html"
												className="btn btn-xs btn-secondary btn-sm"
											>
												Visualiar Perfil
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">
										Meu Perfil
									</a>
									<a className="dropdown-item" href="#">
										Alterar Perfil
									</a>
									<div className="dropdown-divider"></div>
									<a
										className="dropdown-item"
										href="#"
										onClick={onLogout}
									>
										Sair do Sistema
									</a>
								</li>
							</div>
						</ul>
					</li>
					<li className="nav-item dropdown hidden-caret submenu">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							onClick={onLogout}
						>
							<BiExit className="h2 mt-1 mb-0 color-white" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
