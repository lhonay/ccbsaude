import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { resetSchema } from '@/schemas'

import { useResetPassword } from '@/hooks'

import { AuthLayout, Alert, Errors, Input, Button } from '@/components'

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(resetSchema)
    const { loading, success, apiErrors, resetPassword } = useResetPassword()

    return (
        <AuthLayout page='recover'>
            <Errors errors={apiErrors} />
            <Alert status='success' message={success} />

            <form className="mb-1" onSubmit={handleSubmit(resetPassword)}>
                <div className="form-group">
                    <Input 
                        type='email'
                        name='email'
                        label='Email'
                        errors={errors}
                        register={register}
                    />
                </div>

                <div className="form-group mb-0 text-center">
                    <Button 
                        label={loading ? 'Reseting...' : 'Reset Password'}
                        loading={loading}
                    />
                </div>
            </form>
                        
            <Link href="/login">
                <a className="text-muted">
                    <small>Back to Sign In</small>
                </a>
            </Link>
        </AuthLayout>
    )
}

export default ResetPassword