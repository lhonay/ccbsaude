import Link from 'next/link'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/register'

import { useRegister } from '@/hooks'

import { AuthLayout, Errors, Input, Button } from '@/components'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, apiErrors, signUp } = useRegister()

    return (
        <AuthLayout page='register'>
            <Errors errors={apiErrors} />

            <form className="mb-1" onSubmit={handleSubmit(signUp)}>
                <div className="form-group">
                    <Input 
                        type='text'
                        name='name'
                        label='Name *'
                        errors={errors}
                        register={register}
                    />
                </div>
                
                <div className="form-group">
                    <Input 
                        type='email'
                        name='email'
                        label='Email *'
                        errors={errors}
                        register={register}
                    />
                </div>

                <div className="form-group">
                    <Input 
                        type='password'
                        name='password'
                        label='Confirm Passsword *'
                        errors={errors}
                        register={register}
                    />
                </div>

                <div className="form-group">
                    <Input 
                        type='password'
                        name='password_confirmation'
                        label='Confirm Passsword *'
                        errors={errors}
                        register={register}
                    />
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