import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 border-b">
      <Link to="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
        XBlog
      </Link>
      
      <div className="sm:block hidden">
      <Search />
      </div>

      <ul className="md:inline-flex items-center hidden">
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-500"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            {" "}
            About{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            {" "}
            Press{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            {" "}
            Contact{" "}
          </a>
        </li>
        <li className="px-2 md:px-4 hidden md:block">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            {" "}
            Login{" "}
          </a>
        </li>
        <li className="px-2 md:px-4 hidden md:block">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-purple-500"
          >
            {" "}
            Register{" "}
          </a>
        </li>
      </ul>

      <ul className="sm:hidden">
      <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-500"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
