import * as yup from "yup";

export const validation = yup.object({
  identifier: yup
    .string()
    .required("Email or UserName is required"),
  password: yup
    .string()
    .required("Password is required"),
});