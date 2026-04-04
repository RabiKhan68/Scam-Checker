import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function Navigation({ name }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-gray-500 pb-1 font-semibold text-white"
      : "hover:border-b-2 hover:border-gray-400 pb-1 transition-colors";

  return (
    <nav className="bg-gray-900 text-white px-10 py-1 flex justify-between items-center shadow-md sticky top-0 z-50 opacity-80">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
      </div>

      <div className="flex gap-8 text-sm">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/blog" className={linkClass}>
          Blogs
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact Us
        </NavLink>
        <NavLink to="/spam-check" className={linkClass}>
          Check Spam
        </NavLink>
      </div>
    </nav>
  );
}