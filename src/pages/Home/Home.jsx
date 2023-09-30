import { Helmet, HelmetProvider } from "react-helmet-async";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './../../firebase/firebase.config';
import { useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";


const Home = () => {

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
      })
      .catch(error => console.error(error))
  }

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        console.log(result)
      })
      .then(error => {
        console.log(error.message)
      })
  }

  console.log(user)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Simple Firebase Auth - Home</title>
      </Helmet>
      <section className="my-10">

        <div className="max-w-screen-md shadow-md mx-auto p-5 rounded-md">
          {
            user
              ? (<div className="flex gap-5 items-center justify-center">
                <img className="rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocIQom2TDiTKqyJuutDsokRIB-2JPAn2s25Ao9R8EO3wvpw=s96-c" />
                <div>
                  <p className="text-xl font-medium">{user.displayName}</p>
                  <p>{user.email}</p>
                  {
                    user.phone && <p>{user.phone}</p>
                  }
                </div>
              </div>)
              : (<div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <button onClick={handleGoogleLogin} className="btn btn-primary text-white"><AiFillGoogleCircle className="text-2xl"></AiFillGoogleCircle>Login with Google</button>
                <button onClick={handleFacebookLogin} className="btn btn-primary text-white"><AiFillFacebook className="text-2xl"></AiFillFacebook>Login with Facebook</button>
              </div>)
          }
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Home
