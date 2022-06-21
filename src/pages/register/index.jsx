import { useState } from 'react'

import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from '../../services'

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    password_confirmation: yup.string().min(8).required(),
})

const Register = () => {
    const [apiErrors, setApiErrors] = useState([])
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const handleRegister = async payload => {
        try {
            setLoading(true)
            const response = await api.post('register', payload)

            Router.push('login')
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
        } finally {
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

                        {message && 
                            <div className="alert alert-success">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                {message}
                            </div>
                        }

                        <form className="mb-1" onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input {...register('name')} type="text" name="name" className={`form-control ${errors?.name && 'is-invalid'}`} placeholder="Name" />
                                <span className="invalid-feedback">{errors.name?.message}</span>
                            </div>
                            
                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('email')} type="email" name="email" className={`form-control ${errors?.email && 'is-invalid'}`} placeholder="Email" />
                                <span className="invalid-feedback">{errors.email?.message}</span>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input {...register('password')} type="password" name="password" className={`form-control ${errors?.password && 'is-invalid'}`} placeholder="Password" />
                                <span className="invalid-feedback">{errors.password?.message}</span>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input {...register('password_confirmation')} type="password" name="password_confirmation" className={`form-control ${errors?.password_confirmation && 'is-invalid'}`} placeholder="Confirm Password" />
                                <span className="invalid-feedback">{errors.password_confirmation?.message}</span>
                            </div>

                            <div className="form-group mb-0 text-center">
                                <button type="submit" className="btn btn-success btn-block">
                                    { loading 
                                        ? <span><i className="fa fa-spin fa-spinner"></i> Registering...</span>
                                        : <span><i className="fa fa-check"></i> Register</span>
                                    }
                                </button>
                            </div>
                        </form>
                        
                        <Link href="/login">
                            <a className="text-muted">
                                <small>Already have an account? Sign In</small>
                            </a>
                        </Link>

                        <p className="text-center text-muted mt-2">
                            &copy; HelpDesk | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth-bg">
                <Image src="/static/images/bg-register.svg" width="650" height="650" alt="Login BG" />
            </div>
        </div>
    )
}

export default Register