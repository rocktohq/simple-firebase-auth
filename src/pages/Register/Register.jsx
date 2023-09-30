import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import auth from "../../firebase/firebase.config";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;

    if (email === "" && password === "") {
      setError("All fields are required!");
      return;
    }
    else if (email === "") {
      setError("Email field can not be empty!");
      return;
    }
    else if (password === "") {
      setError("Password field can not be empty!");
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Please provide an valid email!");
      return;
    } else if (password.length < 6) {
      setError("Password at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must have an uppercase letter!");
      return;
    } else if (!checked) {
      setError("Terms and conditions must be accepted!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setSuccess(true);
        console.log(result.user);
        sendEmailVerification(result.user)
          .then(() => {
            alert("Check email and verify your email.")
          })
      })
      .catch(error => console.error("Error: ", error.message))
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="my-12 max-w-screen-md mx-auto">
        <div className="shadow-md rounded-md p-5">
          <h2 className="text-3xl font-semibold text-center">Register Here</h2>
          {
            // Error Message
            error && <div className="w-4/5 md:w-1/2 mx-auto my-5">
              <p className="text-center text-red-500 font-medium"><span className="font-bold">Error:</span> {error}</p>
            </div>
          }
          {
            // Success Message
            success && <div className="w-4/5 md:w-1/2 mx-auto my-5">
              <p className="text-center text-green-500 font-medium">Registration successful. Please <Link to="/login"><span className="underline font-bold text-primary">Login here</span></Link> to get access.</p>
            </div>
          }
          <form onSubmit={handleRegister}>
            <div className="mt-5 w-4/5 md:w-1/2 mx-auto">
              <input type="email" name="email" placeholder="example@something.com" className="border rounded px-5 py-3 focus:outline-none w-full" />
            </div>
            <div className="mt-5 relative w-4/5 md:w-1/2 mx-auto">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="border rounded px-5 py-3 focus:outline-none w-full" />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute text-xl top-[15px] right-5">
                {
                  showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                }
              </span>
            </div>
            <div className="mt-5 relative w-4/5 md:w-1/2 mx-auto">
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              <label htmlFor="terms" className="font-medium">Accept Terms and Conditions</label>
            </div>
            <div className="text-center w-4/5 md:w-1/2 mx-auto mt-5">
              <input type="submit" value="Register" className="btn btn-primary text-white rounded w-full" />
            </div>
            <div className="text-center w-4/5 md:w-1/2 mx-auto mt-10">
              <p className="text-left">- Already have an account? Please <span className="font-medium text-primary underline"><Link to="/login">Login here</Link></span>.</p>
            </div>
          </form>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Register
