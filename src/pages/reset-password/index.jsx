import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import schema from './schema'

import { useResetPassword } from '../../hooks'

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, success, apiErrors, resetPassword } = useResetPassword()

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

                        {apiErrors.length > 0 && 
                            <div className="alert alert-danger">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                <ul className="display-errors">
                                    {apiErrors.map((error, index) => <li key={index}>{error}</li>)}
                                </ul>
                            </div>
                        }

                        {success && 
                            <div className="alert alert-success">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                {success}
                            </div>
                        }

                        <form className="mb-1" onSubmit={handleSubmit(resetPassword)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('email')} type="email" name="email" className={`form-control ${errors.email?.message && 'is-invalid'}`} placeholder="Email" />
                                <span className="invalid-feedback">{errors.email?.message}</span>
                            </div>

                            <div className="form-group mb-0 text-center">
                                <button type="submit" className="btn btn-success btn-block">
                                    { loading 
                                        ? <span><i className="fa fa-spin fa-spinner"></i> Reseting...</span>
                                        : <span><i className="fa fa-check"></i> Reset Password</span>
                                    }
                                </button>
                            </div>
                        </form>
                        
                        <Link href="/login">
                            <a className="text-muted">
                                <small>Back to Sign In</small>
                            </a>
                        </Link>

                        <p className="text-center text-muted mt-2">
                            &copy; HelpDesk | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth-bg">
                <Image src="/static/images/bg-recover.svg" width="650" height="650" alt="Login BG" />
            </div>
        </div>
    )
}

export default ResetPassword