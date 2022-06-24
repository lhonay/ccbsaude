import Link from 'next/link'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/login'

import { useAuth } from '@/hooks'

import { AuthLayout, Alert, Button } from '@/components'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, error, signIn } = useAuth()

    return (
        <AuthLayout page='login'>
            {error && <Alert status='danger' message='Invalid User or Password' />}

            <form className="mb-1" onSubmit={handleSubmit(signIn)}>
                <div className="form-group">
                    <label>Email</label>
                    <input {...register('username')} type="email" name="username" className={`form-control ${errors?.username && 'is-invalid'}`} placeholder="Email" />
                    <span className="invalid-feedback">{errors.username?.message}</span>
                </div>

                <div className="form-group">
                    <Link href="/reset-password">
                        <a className="text-muted float-right">
                            <small>Forgot your password?</small>
                        </a>
                    </Link>

                    <label>Password</label>
                    <input {...register('password')} type="password" name="password" className={`form-control ${errors?.password && 'is-invalid'}`} placeholder="Password" />
                    <span className="invalid-feedback">{errors.password?.message}</span>
                </div>

                <div className="form-group mb-0 text-center">
                    <Button 
                        label={loading ? 'Logging...' : 'Sign In'}
                        loading={loading}
                    />
                </div>
            </form>
                
            <Link href="/register">
                <a className="text-muted">
                    <small>{`Don't have an account? Sign Up`}</small>
                </a>
            </Link>
        </AuthLayout>
    )
}

export default Login