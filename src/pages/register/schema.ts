import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup.string().required('o nome é obrigatório'),
    email: yup.string().required('o e-mail é obrigatório').email('é necessário um e-mail válido'),
    password: yup
        .string()
        .required('o campo de senha é obrigatório')
        .matches(/(?=.*?[A-Z])/, 'é necessário conter ao menos uma letra maiúscula na senha')
        .matches(/(?=.*?[a-z])/, 'é necessário conter ao menos uma letra minúscula na senha')
        .matches(/(?=.*?[0-9])/, 'é necessário conter ao menos um número na senha')
        .matches(/(?=.*?[#?!@$%^&*-])/, 'é necessário conter ao menos um dos seguintes caracteres expeciais :  # , ? , ! , @, $, %, ^, &, *, -, ]')
        .min(6),
        professional_level:yup.string().required("nível profissional é obrigatório"),
        kind_of_work: yup.string().required("a modalidade de emprego é obrigatória")
})
