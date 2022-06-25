const Button = ({ meta, onChangePage }) => {
    const pages = Array.from({ length: meta?.last_page }, (page, index) => index + 1)

    const previous = () => onChangePage(meta?.current_page - 1)

    const next = () => onChangePage(meta?.current_page + 1)

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${meta?.current_page === 1 && 'disabled'}`}>
                    <button className="page-link" onClick={previous}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                </li>

                {pages.map(page =>
                    <li className={`page-item ${(page) === meta?.current_page && 'active'}`} key={page}>
                        <button className="page-link" onClick={() => onChangePage(page)}>
                            {page}
                        </button>
                    </li>
                )}

                <li className={`page-item ${meta?.current_page === meta?.last_page && 'disabled'}`}>
                    <button className="page-link" onClick={next}>
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Button