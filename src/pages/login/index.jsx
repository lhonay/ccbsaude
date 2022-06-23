import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import schema from '../../schemas/login'

import { useAuth } from '../../hooks'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, error, signIn } = useAuth()

    return (
        <div className="auth-fluid">
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <div className="card-body">
                        <div className="text-center">
                            <Link href="/login">
                                <a>
                                    <Image src="/static/images/logo.png" width="200" height="180" alt="App Logo" />
                                </a>
                            </Link>
                        </div>

                        {error && 
                            <div className="alert alert-danger">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                <ul className="display-errors">
                                    <li>Invalid User or Password</li>
                                </ul>
                            </div>
                        }

                        <form className="mb-1" onSubmit={handleSubmit(signIn)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('username')} type="email" name="username" className={`form-control ${errors.username?.message && 'is-invalid'}`} placeholder="Email" />
                                <span className="invalid-feedback">{errors.username?.message}</span>
                            </div>

                            <div className="form-group">
                                <Link href="/reset-password">
                                    <a className="text-muted float-right">
                                        <small>Forgot your password?</small>
                                    </a>
                                </Link>

                                <label>Password</label>
                                <input {...register('password')} type="password" name="password" className={`form-control ${errors.password?.message && 'is-invalid'}`} placeholder="Password" />
                                <span className="invalid-feedback">{errors.password?.message}</span>
                            </div>

                            <div className="form-group mb-0 text-center">
                                <button type="submit" className="btn btn-success btn-block">
                                    { loading 
                                        ? <span><i className="fa fa-spin fa-spinner"></i> Logging...</span>
                                        : <span><i className="fa fa-check"></i> Sign In</span>
                                    }
                                </button>
                            </div>
                        </form>
                        
                        <Link href="/register">
                            <a className="text-muted">
                                <small>{`Don't have an account? Sign Up`}</small>
                            </a>
                        </Link>

                        <p className="text-center text-muted mt-2">
                            &copy HelpDesk | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth-bg">
                <Image src="/static/images/bg-login.svg" width="650" height="650" alt="Login BG" />
            </div>
        </div>
    )
}

export default Login