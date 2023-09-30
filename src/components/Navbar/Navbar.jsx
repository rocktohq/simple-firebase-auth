import { NavLink } from "react-router-dom"

const Navbar = () => {

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
  </>

  return (
    <nav className="flex justify-between items-center shadow-md px-3 py-5 rounded">
      <h1 className="text-4xl font-bold"><span className="text-primary">F</span><span className="text-gray-600">Auth</span></h1>
      <ul className="flex justify-around items-center gap-5 text-xl font-medium">
        {navLinks}
      </ul>
    </nav>
  )
}

export default Navbar
