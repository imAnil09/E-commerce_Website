import React, { useEffect, useState } from 'react';
import ProductsCard from '../Components/ProductsCard';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { store } from '../Store/store';

const ProductsPage = () => {

  const storeQuery = useSelector((state) => state.query)
  
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // console.log(storeQuery || '')

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products${storeQuery.length > 0 ? "?q=" + storeQuery : '/'}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));
  }, [storeQuery]);

  if (!products) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  if(products.length == 0){
    return (
      <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 bg-gray-100 rounded shadow-lg w-64 sm:w-96">
          <h2 className="text-2xl text-center font-bold mb-4">No Data Found</h2>
          {/* <p className="text-gray-600">Please add some items to your cart.</p> */}
        {/* <Link to="/products"><button className='bg-blue-300 font-semibold py-2 px-3 rounded mt-3'>Search again!</button></Link> */}
        </div>
      </div>
        </>
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
