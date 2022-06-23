import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    password_confirmation: yup.string().min(8).required()
        .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

export default {
    resolver: yupResolver(schema)
}