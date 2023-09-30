import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import auth from "../../firebase/firebase.config";

const Login = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;


    if (email === "") {
      setError("Email field can not be empty!");
      return;
    }
    else if (password === "") {
      setError("Password field can not be empty!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(resutl => console.log(resutl))
      .catch(error => console.error("Error: ", error))
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="my-12 max-w-screen-md mx-auto">
        <div className="shadow-md rounded-md p-5">
          <h2 className="text-3xl font-semibold text-center">Login Here</h2>
          {
            error && <div className="my-5">
              <p className="text-center text-red-500">{error}</p>
            </div>
          }
          <form onSubmit={handleLogin}>
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
            <div className="text-center w-4/5 md:w-1/2 mx-auto mt-5">
              <input type="submit" value="Login" className="btn btn-primary text-white rounded w-full" />
            </div>
          </form>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Login
