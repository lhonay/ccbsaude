const Header = ({ children }) => {
	return (
		<>
			<div className="panel-header bg-grey-gradient">
				<div className="page-inner py-5">
					<div className="d-flex align-items-center align-items-md-center flex-column flex-md-row">
						<div>
							<h2 className="text-black pb-2 fw-bold ">
								CCB SAÚDE
							</h2>
							<h5 className="text-black op-7 mb-2">
								Av. 19 de Outrubro, Parque Piauí - Teresina,
								Piauí, Brasil
							</h5>
						</div>
						<div className="ml-md-auto py-2 py-md-0"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
