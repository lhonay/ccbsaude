import Link from 'next/link'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/register'

import { useRegister } from '@/hooks'

import { AuthLayout, Errors, Button } from '@/components'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, apiErrors, signUp } = useRegister()

    return (
        <AuthLayout page='register'>
            <Errors errors={apiErrors} />

            <form className="mb-1" onSubmit={handleSubmit(signUp)}>
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
                    <Button 
                        label={loading ? 'Registering...' : 'Register'}
                        loading={loading}
                    />
                </div>
            </form>
                        
            <Link href="/login">
                <a className="text-muted">
                    <small>Already have an account? Sign In</small>
                </a>
            </Link>
        </AuthLayout>
    )
}

export default Register