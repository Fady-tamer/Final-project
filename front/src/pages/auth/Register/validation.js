import * as yup from "yup";

// regex
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validation = yup.object({
  username: yup
    .string()
    .required("Full Name is required"),
  email: yup
    .string()
    .matches(emailRules, "Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRules,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .required("Password is required"),
});