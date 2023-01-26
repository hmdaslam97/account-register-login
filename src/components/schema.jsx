import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  fullname: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().min(999999999,'Must be 10 digits').required("Required"),
  password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password of min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
  // termsAndConditions: yup.bool().oneOf([true], 'Accept the T&C'),
});

export const advancedSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
});