import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().min(10).max(100).required(),
})

const resolver = {
    resolver: yupResolver(schema)
}

export default resolver