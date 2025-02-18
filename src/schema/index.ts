import * as Yup from "yup";

const SignUpValidationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(),
  termsAndConditions: Yup.boolean().oneOf([true]).strict(true),
  role: Yup.string().required(),
});

// sign-up-form.tsx
// email: "", password: ""

const SignInValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export { SignUpValidationSchema, SignInValidationSchema };
