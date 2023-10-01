import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-screen-xl mx-auto py-8 px-3">
        <p className="text-center text-white">&copy; SimpleFireBaseAuth&trade; 2023. All right reserved.</p>
        <p><Link to="/terms">Terms and Conditions</Link></p>
      </div>
    </footer>
  )
}

export default Footer
