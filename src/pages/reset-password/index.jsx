import Link from 'next/link'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/reset-password'

import { useResetPassword } from '@/hooks'

import { AuthLayout, Alert, Errors, Button } from '@/components'

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(schema)
    const { loading, success, apiErrors, resetPassword } = useResetPassword()

    return (
        <AuthLayout page='recover'>
            <Errors errors={apiErrors} />
            <Alert status='success' message={success} />

            <form className="mb-1" onSubmit={handleSubmit(resetPassword)}>
                <div className="form-group">
                    <label>Email</label>
                    <input {...register('email')} type="email" name="email" className={`form-control ${errors?.email && 'is-invalid'}`} placeholder="Email" />
                    <span className="invalid-feedback">{errors.email?.message}</span>
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