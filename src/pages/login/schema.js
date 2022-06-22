import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    username: yup.string().email().required().label('email'),
    password: yup.string().required(),
})

export default {
    resolver: yupResolver(schema)
}