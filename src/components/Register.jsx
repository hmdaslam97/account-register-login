import { useFormik} from "formik";
import { basicSchema } from "./schema.jsx";
import './Register.css'
import axios from "axios";

const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);
const url = 'https://reqres.in/api/users';

const data = { 
      email: values.email,
    password: values.password,
    name:values.fullname,
    mobile:values.phone,
};

axios.post(url, data)
    .then(response => { 
        if(response.status==201)
        {
          alert("Registration Successful");
          window.location.href = '/signin'; //as per project 200 means success
        }
        // console.log(response.status); 
    }) 
    .catch(error => { 
      switch(error.status)
      {
        case 400: alert("Some of the fields are missing or incorrect");break;
        case 402: alert("User Already Exists with the given email id");break;
        default: alert("Internal Server Error");
      }
        console.log(error); 
    });
  await new Promise((resolve) => setTimeout(resolve, 5000));
  actions.resetForm();
  
};

const Register = () => {
 
   const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = 
  useFormik({ initialValues: {fullname: "",email: "",phone: "",password: "",termsAndConditions: false,},
              validationSchema: basicSchema,
              onSubmit, });

  return (<>
    <center><h1>Welcome to Registration Form</h1></center>
    <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="fullname">Full Name</label>
        <input
            value={values.fullname}
            onChange={handleChange}
            id="fullname"
            type="fullname"
            placeholder="Enter Full Name"
            onBlur={handleBlur}
            className={errors.fullname && touched.fullname ? "input-error" : ""}
        />
      {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}
      

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

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="number"
        placeholder="Enter Phone no "
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.phone && touched.phone ? "input-error" : ""}
      />
      {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}

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

      {/* <label>
              Terms and conditions
              <input type="checkbox" name="termsAndConditions" />
            </label>
            {errors.termsAndConditions && <small>{errors.termsAndConditions}</small> } */}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
      
    </form>
    </>
  );
};
export default Register;

//after submitting the above form if values.status is 201 then i want it to be redirected to '/signin' page give me code