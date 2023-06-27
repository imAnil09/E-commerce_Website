import React, { useEffect, useState } from 'react';
import ProductsCard from '../Components/ProductsCard';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
  if(products.length == 0){
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          </div>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title.split(' ').splice(0,5).map(word => word)}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.title.split(' ').splice(0, 10).map(word => word).join(' ')}</h2>
              <p className="text-gray-700">{product.description.split(' ').splice(0,15).map(word => word).join(' ')}...</p>
              {/* <p className="mt-4 text-blue-500 font-bold">{product.price} USD</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductsPage);
