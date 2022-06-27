import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { userSchema } from '@/schemas'

import { useRoles, useUsers } from '@/hooks'

import { Modal, Button, Input, MultiSelect, Alert, Errors, Checkbox } from '@/components'

const UserForm = ({ visible, user, isEdit, onClose }) => {
    const { control, register, setValue, handleSubmit, reset, formState: { errors } } = useForm(userSchema)

    const { roles, getRolesOptions } = useRoles()
    const { loading, apiErrors, success, initForm, save } = useUsers()

    useEffect(() => {  
        reset()
        initForm(user)
        getRolesOptions()

        if (user?.roles) {
            setValue('role_keys', user.roles)
        }
    }, [visible])

    useEffect(() => {
        if (! isEdit) {
            reset()
        } 
    }, [success])

    const renderFooter = () => (
        <Button 
            label={loading ? 'Saving...' : 'Save'}
            className='btn-success'
            onClick={handleSubmit(save)}
        />
    )

    return (
        <Modal 
            visible={visible}
            title='Create a new User' 
            onClose={() => onClose(success)}
            renderFooter={renderFooter}
        >
            <form>
                <div className="col-12">
                    <Alert status='success' message={success} />
                    <Errors errors={apiErrors} />

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Input 
                                type='text'
                                name='name'
                                label='Name *'
                                errors={errors}
                                register={register}
                                model={user}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Input 
                                type='email'
                                name='email'
                                label='Email *'
                                errors={errors}
                                register={register}
                                model={user}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <MultiSelect
                                label="Roles *" 
                                name="role_keys"
                                control={control}
                                options={roles}
                                errors={errors}
                                selectedValues={user?.roles}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Input
                                type='password'
                                name='password'
                                label='Password *'
                                errors={errors}
                                register={register}
                                model={user}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <Input
                                type='password'
                                name='password_confirmation'
                                label='Confirm Password *'
                                errors={errors}
                                register={register}
                                model={user}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Checkbox
                                name='status'
                                label='Status *'
                                errors={errors}
                                register={register}
                                model={user}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default UserForm