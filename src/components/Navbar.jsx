import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 h-18">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Pasal
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 text-xl hover:text-white">
            Home
          </Link>
          <Link to="/cart" className="text-gray-300 text-xl hover:text-white">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
