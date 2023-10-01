import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-screen-xl mx-auto py-8 px-3">
        <p className="text-center text-white">&copy; SimpleFireBaseAuth&trade; 2023. All right reserved.</p>
        <p className="text-center text-white flex gap-5"><Link to="/terms">Terms and Conditions</Link> <a href="https://github.com/rocktohq/simple-firebase-auth.git" rel="noreferrer" target="_blank">Source Code</a></p>
      </div>
    </footer>
  )
}

export default Footer
