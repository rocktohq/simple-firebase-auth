import { sendPasswordResetEmail } from "firebase/auth";
import { Helmet, HelmetProvider } from "react-helmet-async"
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const ForgotPassword = () => {
  const [error, setError] = useState(null);
  const [success, setsuccess] = useState(null);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Reset Password
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setsuccess("Please check your mail.");
      })
      .catch(error => {
        setError(error.message);
      })
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <section className="my-12 max-w-screen-md mx-auto">
        <div className="shadow-md rounded-md p-5">
          <h2 className="text-3xl font-semibold text-center">Reset Password</h2>
          {
            // Error Message
            error && <div className="w-4/5 md:w-1/2 mx-auto my-5">
              <p className="text-center text-red-500 font-medium"><span className="font-bold">Error:</span> {error}</p>
            </div>
          }
          {
            // Success Message
            success && <div className="w-4/5 md:w-1/2 mx-auto my-5">
              <p className="text-center text-green-500 font-medium">{success}</p>
            </div>
          }
          <form onSubmit={handleResetPassword}>
            <div className="mt-5 w-4/5 md:w-1/2 mx-auto">
              <input type="email" name="email" placeholder="example@something.com" className="border rounded px-5 py-3 focus:outline-none w-full" />
            </div>
            <div className="text-center w-4/5 md:w-1/2 mx-auto mt-5">
              <input type="submit" value="Reset Password" className="btn btn-primary text-white rounded w-full" />
            </div>
          </form>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default ForgotPassword
