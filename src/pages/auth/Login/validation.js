import * as yup from "yup"

export const validation = () => {yup.object({
    email: yup.string().required()
})}