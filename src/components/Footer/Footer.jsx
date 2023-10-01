import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-screen-xl mx-auto py-8 px-3">
        <p className="text-center text-white">&copy; SimpleFireBaseAuth&trade; 2023. All right reserved.</p>
        <p className="text-center"><Link to="/terms">Terms and Conditions</Link> <a className="ml-5" href="https://github.com/rocktohq/simple-firebase-auth.git" rel="noreferrer" target="_blank"><AiOutlineGithub></AiOutlineGithub> Source Code</a></p>
      </div>
    </footer>
  )
}

export default Footer
