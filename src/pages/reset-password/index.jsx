import { useState } from 'react'

import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from '../../services'

const schema = yup.object().shape({
    email: yup.string().email().required().label('email'),
});

const ResetPassword = () => {
    const [apiErrors, setApiErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const handleSignIn = async payload => {
        try {
            setLoading(true)
            const response = await api.post('password/reset', payload)
            alert(response.message)

            setLoading(false)


            // Router.push('/dashboard')
        } catch ({ response }) {
            if (response.status === 422) {
                const newErrors = Object.keys(response.data.errors).map(error => ([
                    response.data.errors[error][0]
                ]))

                setApiErrors(newErrors)
            }
            
            if (response.status === 404) {
                setApiErrors([response.data.message])
            }

            setLoading(false)
        }
    }

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

                        <form className="mb-1" onSubmit={handleSubmit(handleSignIn)}>
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