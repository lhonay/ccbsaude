import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
    const { register, handleSubmit } = useForm()

    const handleSignIn = async formData => {
        // alert(JSON.stringify(data))
        const response = await axios.post('http://backend-admin.nettdesk.com.br/api/v1/login')

        console.log(response.data)
    }

    return (
        <div className="auth-fluid">
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <div className="card-body">
                        <div className="text-center">
                            <Link href="/login">
                                <a>
                                    <img src="/static/images/logo.png" alt="Logo"  />
                                </a>
                            </Link>
                        </div>

                        <form method="POST" onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('email')} type="email" name="email" className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <Link href="/reset-password">
                                    <a className="text-muted float-right">
                                        <small>Forgot your password?</small>
                                    </a>
                                </Link>

                                <label>Password</label>
                                <input {...register('password')} type="password" name="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-success btn-block" type="submit">
                                    <i className="fa fa-check"></i> Sign In
                                </button>
                            </div>
                        </form>
                        
                        <Link href="/register">
                            <a className="text-muted">
                                <small>{`Don't have an account? Sign Up`}</small>
                            </a>
                        </Link>

                        <p className="text-center text-muted mt-2">
                            &copy; HelpDesk | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth-bg">
                <img src="/static/images/bg-login.png" width="70%" />
            </div>
        </div>
    )
}

export default Login