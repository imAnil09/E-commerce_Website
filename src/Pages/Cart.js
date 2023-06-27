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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default React.memo(Cart);