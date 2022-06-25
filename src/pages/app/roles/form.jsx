import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/roles'

import { useRoles } from '@/hooks'

import { Modal, Button, Input, Alert, Errors, Textarea } from '@/components'

const RoleForm = ({ visible, role, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(schema)

    const { loading, apiErrors, success, initForm, save } = useRoles()

    useEffect(() => {  
        reset()
        initForm(role)
    }, [visible])

    useEffect(() => {
        if (! role.id) {
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
            title='Create a new Role' 
            onClose={onClose}
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
                                model={role}
                            />
                        </div>

                        <div className="form-group col-md-12">
                            <Textarea 
                                name='description'
                                label='Description *'
                                errors={errors}
                                register={register}
                                model={role}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default RoleForm