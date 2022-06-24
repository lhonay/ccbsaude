import Image from 'next/image'

const AuthLayout = ({ page, children }) => (
    <div className="auth-fluid">
        <div className="auth-fluid-form-box">
            <div className="align-items-center d-flex h-100">
                <div className="card-body">
                    <div className="text-center">
                        <Image src="/static/images/logo.png" width="200" height="180" alt="App Logo" />
                    </div>
                    {children}
                    <p className="text-center text-muted mt-2">
                        &copy; HelpDesk | All rights reserved.
                    </p>
                </div>
            </div>
        </div>
        <div className="auth-bg">
            <Image src={`/static/images/bg-${page}.svg`} width="650" height="650" alt="Auth Bg" />
        </div>
    </div>
)

export default AuthLayout