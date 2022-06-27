import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { loginSchema } from '@/schemas'

import { useAuth } from '@/hooks'

import { AuthLayout, Alert, Input, Button } from '@/components'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(loginSchema)
    const { loading, error, signIn } = useAuth()

    return (
        <AuthLayout page='login'>
            {error && <Alert status='danger' message='Invalid User or Password' />}

            <form className="mb-1" onSubmit={handleSubmit(signIn)}>
                <div className="form-group">
                    <Input 
                        type='email'
                        name='username'
                        label='Email'
                        errors={errors}
                        register={register}
                    />
                </div>

                <div className="form-group">
                    <Link href="/reset-password">
                        <a className="text-muted float-right">
                            <small>Forgot your password?</small>
                        </a>
                    </Link>
                    
                    <Input 
                        type='password'
                        name='password'
                        label='Password'
                        errors={errors}
                        register={register}
                    />
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