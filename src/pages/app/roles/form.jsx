import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import schema from '@/schemas/roles'

import { useRoles } from '@/hooks'

import { Modal } from '@/components'

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
        <button type="button" className="btn btn-success" onClick={handleSubmit(save)}>
            {loading
                ? <span><i className="fa fa-spin fa-spinner"></i> Saving...</span>
                : <span><i className="fa fa-check"></i> Save</span>
            }
        </button>
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
                    {success && 
                        <div className="alert alert-success">
                            <button type="button" className="close" data-dismiss="alert">×</button>
                            {success}
                        </div>
                    }

                    {apiErrors.length > 0 && 
                        <div className="alert alert-danger">
                            <button type="button" className="close" data-dismiss="alert">×</button>
                            <ul className="display-errors">
                                {apiErrors.map((error, index) => <li key={index}>{error}</li>)}
                            </ul>
                        </div>
                    }
                
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Name *</label>
                            <input {...register('name', {value: role?.name})} name="name" className={`form-control ${errors?.name && 'is-invalid'}`} placeholder="Name" />
                            <span className="invalid-feedback">{errors.name?.message}</span>
                        </div>

                        <div className="form-group col-md-12">
                            <label>Description *</label>
                            <textarea {...register('description', {value: role?.description})} name="description" rows={10} className={`form-control ${errors?.description && 'is-invalid'}`} placeholder="Description"></textarea>
                            <span className="invalid-feedback">{errors.description?.message}</span>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default RoleForm