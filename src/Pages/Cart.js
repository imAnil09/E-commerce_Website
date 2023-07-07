import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AddButtonComponent from '../Components/AddButtonComponent';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  // const newcartItems = [...cartItems]
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [items, setItems] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await Promise.all(cartItems.map((element) =>
          fetch(`https://fakestoreapi.com/products/${element}`)
            .then((res) => res.json())
        ));
        setItems(fetchedItems);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
    // console.log(cartItems, "itemRemoved")
  }, [cartItems, count]);


  const handleRemoveItem = (item) => {
    cartItems.forEach((cartItem, index) => {
      if(cartItem == item){
        const val  = cartItems.splice(index, 1)
        console.log(val)
        console.log(cartItems)
        dispatch({type: 'AFTER_REMOVED', payload: {items: cartItems}})
      }
    })
    
  }
  

  if (items.length == 0) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-gray-100 rounded shadow-lg w-64 sm:w-96">
            <h2 className="text-2xl font-bold mb-4">Your Cart Is Empty</h2>
            <p className="text-gray-600">Please add some items to your cart.</p>
            <Link to="/products"><button className='bg-blue-300 font-semibold py-2 px-3 rounded mt-3'>Shop now!</button></Link>
          </div>
        </div>
      </>
    );
  }
  if (!items) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 min-h-screen">
      <ul className="divide-y divide-gray-300">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <li className="py-4 flex">
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-44 rounded-md"
                />
              </div>
              <div className="ml-4 flex flex-col gap-3">
                <p className="font-medium text-xl">
                  {item.title}
                </p>
                <p className="text-gray-600 text-2xl">
                  $ {item.price}
                </p>
                <AddButtonComponent />
                <div>
                  <button className='py-1 px-5 rounded-md bg-red-500 text-white' onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
                </div>
              </div>
            </li>
            <Divider />
          </React.Fragment>
        ))}
        <li className="py-4">
          <Grid container>
            <Grid item lg={6} sm={3} xs={3}>
              <Typography variant="h6" className="font-medium">
                Total Items:
              </Typography>
            </Grid>
            <Grid item lg={6} sm={3} xs={3}>
              <Typography variant="h6" className="font-medium">
                {count}
              </Typography>
            </Grid>
          </Grid>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Cart);