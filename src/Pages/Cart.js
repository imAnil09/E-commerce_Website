import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await Promise.all(cartItems.map((element) =>
          fetch(`https://fakestoreapi.com/products/${element}`)
            .then((res) => res.json())
        ));
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [cartItems]);

  if (!items) {
    return <div>Loading...</div>;
  }
  if(items.length == 0){
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-white rounded shadow-lg w-64 sm:w-96">
            <h2 className="text-2xl font-bold mb-4">Your Cart Is Empty</h2>
            <p className="text-gray-600">Please add some items to your cart.</p>
          </div>
        </div>
      );
  }

  return (
      <ul style={{listStyle:"none"}}>
        {items.map((item) => (
            <>
          <li key={item.id}>
            <Grid container>
              <Grid item lg={2} sx={{ display:"felx", paddin:".5rem"}}>
                <img src={item.image} width='150px' height='200px' alt={item.title} />
              </Grid>
              <Grid item lg={6}>
                <Typography>{item.title}</Typography>
                <Typography>$ {item.price}</Typography>
              </Grid>
            </Grid>
          </li>
          <Divider />
          </>
        ))}
      </ul>
  );
};

export default React.memo(Cart);