import Link from 'next/link'

const Button = ({ meta, onChangePage }) => {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <Link href="#">
                        <a className="page-link">
                            <i className="fa fa-arrow-left"></i>
                        </a>
                    </Link>
                </li>

                {[...Array(meta?.last_page)].map((page, index) =>
                    <li className={`page-item ${(index+1) == meta?.current_page ? 'active' : ''}`} key={index}>
                        <button href="#" className="page-link" onClick={() => onChangePage(index+1)}>
                            {index+1}
                        </button>
                    </li>
                )}

                <li className="page-item">
                    <a href="#" className="page-link">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Button