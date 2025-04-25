import { useState } from 'react';
import { CART_KEY } from '../constants';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
    setQuantity(1);
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 mb-2">${product.price}</p>
        
        <div className="flex items-center mb-4">
          <button 
            onClick={decrement}
            className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <input 
            type="number" 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-12 text-center border-t border-b border-gray-200 py-1"
            min="1"
          />
          <button 
            onClick={increment}
            className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


