const Modal = ({ visible, title, children, renderFooter, onClose }) => {
    return (
        <div>
             <div className="modal fade show" style={{ display: visible ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-scroll modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {title}
                            </h4>
                            <button type="button" className="close" onClick={onClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body modal-body-scroll">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {renderFooter && renderFooter()}

                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {visible && <div className="modal-backdrop fade show"></div>}
        </div>
    )
}

export default Modal