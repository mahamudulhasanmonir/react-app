import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white tracking-wide">TechSphere</h1>

        <div className="space-x-6 hidden md:flex">
          <Link className="text-gray-300 hover:text-white duration-200" to="/">Home</Link>
          <Link className="text-gray-300 hover:text-white duration-200" to="/services">Services</Link>
          <Link className="text-gray-300 hover:text-white duration-200" to="/about">About</Link>
          <Link className="text-gray-300 hover:text-white duration-200" to="/contact">Contact</Link>
        </div>

        <button className="md:hidden text-white">☰</button>
      </div>
    </nav>
  );
}
