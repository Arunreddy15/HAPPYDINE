
import * as Yup from "yup";



export const loginValidationSchema = Yup.object({
    username: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric allowed")
        .required("Username is required"),
    password: Yup.string().required("Password is required"),
});