import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ShopEasy</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-200 transition">Shop</Link>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;