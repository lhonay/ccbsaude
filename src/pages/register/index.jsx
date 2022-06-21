import { useState } from 'react'

import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from '../../services'

const schema = yup.object().shape({
    name: yup.string().email().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    password_confirmation: yup.string().min(8).required(),
})

const Register = () => {
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const handleSignIn = async payload => {
        try {
            setLoading(true)
            const response = await api.post('login', payload)

            localStorage.setItem('token', response.access_token)

            Router.push('/dashboard')
        } catch (error) {
            setLoading(false)
            setHasError(true)
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

                        {hasError && 
                            <div className="alert alert-danger">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                <ul className="display-errors">
                                    <li>Usuário ou senha inválidos.</li>
                                </ul>
                            </div>
                        }

                        <form className="mb-1" onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input {...register('name')} type="text" name="name" className={`form-control ${errors.name?.message && 'is-invalid'}`} placeholder="Name" />
                                <span className="invalid-feedback">{errors.name?.message}</span>
                            </div>
                            
                            <div className="form-group">
                                <label>Email</label>
                                <input {...register('email')} type="email" name="username" className={`form-control ${errors.email?.message && 'is-invalid'}`} placeholder="Email" />
                                <span className="invalid-feedback">{errors.email?.message}</span>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input {...register('password')} type="password" name="password" className={`form-control ${errors.password?.message && 'is-invalid'}`} placeholder="Password" />
                                <span className="invalid-feedback">{errors.password?.message}</span>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input {...register('password_confirmation')} type="password" name="password_confirmation" className={`form-control ${errors.password_confirmation?.message && 'is-invalid'}`} placeholder="Confirm Password" />
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