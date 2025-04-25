import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { API_URL } from '../constants';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="shop-loading">Loading...</div>;
  if (error) return <div className="shop-error">{error}</div>;

  return (
    <div className="shop">
      <div className="shop__container">
        <h1 className="shop__title">Our Products</h1>
        <div className="shop__grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;