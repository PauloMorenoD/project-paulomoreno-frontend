import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().required('o e-mail é obrigatório').email('é necessário um e-mail válido'),
    password: yup.string().required('o campo de senha é obrigatório')
})
