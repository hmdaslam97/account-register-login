import { useFormik} from "formik";
import { advancedSchema } from "./schema.jsx";
import axios from "axios";


const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);

  axios.post("https://reqres.in/api/login", {
    email: values.email,
    password: values.password,
})
    .then(response => { 
        if(response.status== 200)
        {
          alert("Logged-in Successfully");
          window.location.href = '/'; 
        }
        // console.log(response.status); 
    }) 
    .catch(error => { 
      switch(error.status)
      {
        case 400: alert("User does not exist or the email/password is missing");break;
        case 401: alert("Email or password is incorrect");break;
        default: alert("Internal Server Error");
      }
      console.log(error); 
    });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignIn = () => {
  const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit,} = 
  useFormik({ initialValues: {email: "",password: "",},
              validationSchema: advancedSchema,
              onSubmit, });

  console.log(errors);

  return (<>
    <center><h1>Welcome to Login Form</h1></center>
    <form onSubmit={handleSubmit} autoComplete="off">
        
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (<p className="error">{errors.password}</p>)}



      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  </>
  );
};
export default SignIn;