import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email: yup.string().email().required(),
})

const resolver = {
    resolver: yupResolver(schema)
}

export default resolver