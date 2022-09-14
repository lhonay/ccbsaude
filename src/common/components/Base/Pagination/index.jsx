const Button = ({ meta, onChangePage }) => {
	const pages = Array.from(
		{ length: meta?.last_page },
		(page, index) => index + 1
	);

	const previous = () => onChangePage(meta?.current_page - 1);

	const next = () => onChangePage(meta?.current_page + 1);

	return (
		<nav>
			<ul className="pagination pg-primary">
				<li
					className={`page-item ${
						meta?.current_page === 1 && "disabled"
					}`}
				>
					<a className="page-link" onClick={previous}>
						<span aria-hidden="true">«</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>

				{/* {pages.map((page) => (
					<li
						className={`page-item ${
							page === meta?.current_page && "active"
						}`}
						key={page}
					>
						<a
							className="page-link"
							onClick={() => onChangePage(page)}
						>
							{page}
						</a>
					</li>
				))} */}

				<li
					className={`page-item ${
						meta?.current_page === meta?.last_page && "disabled"
					}`}
				>
					<a className="page-link" onClick={next}>
						<span aria-hidden="true">»</span>
						<span className="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Button;
