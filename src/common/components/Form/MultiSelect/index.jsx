import Multiselect from 'multiselect-react-dropdown'
import { Controller } from 'react-hook-form'

const MultiSelect = ({ label, name, options, selectedValues, control, errors }) => (
    <div>
        <label>{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
                <Multiselect
                    options={options} 
                    selectedValues={selectedValues || []}
                    onSelect={items => onChange(items?.map(item => item.id))}
                    onRemove={items => onChange(items?.map(item => item.id))}
                    displayValue='name'
                />
            )}
        /> 
        <span className="small text-danger">{errors[name]?.message}</span>
    </div>
)

export default MultiSelect
