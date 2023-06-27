import { Button, Grid, Paper, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const Product = () => {
  const [item, setItem] = useState();
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [])

  const addCartHandler = (itemId) => {  
    dispatch({ type: 'ADD_TO_CART', payload: { itemId: itemId } })
  }

  if(!item){
    return <div>Loading...</div>
  }

  return (
    <Grid container>
      <Grid sm={12} lg={5.5} item style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "1.5rem" }}>
        <img src={item.image} alt={item.title} style={{ border: "1px solid gray", borderRadius: "5px", padding: "2rem" }} width="400px" height="300px" />
        <br />
        <div className='flex gap-3'>
          <button className='bg-orange-300 p-3' onClick={() => addCartHandler(item.id)}>Add to Cart</button>
          <button className='bg-orange-300 p-3'>Buy now</button>
        </div>
      </Grid>

      <Grid sm={12} lg={5.5} item style={{ margin: "1.5rem" }}>
        <Typography className='title' sx={{ fontSize: "2rem" }}>{item.title}</Typography>
        <Typography className='desc' sx={{ fontSize: "1rem", color: "gray" }}>{item.description}</Typography>
        <br />
        <Typography className='price' sx={{ fontSize: "2rem", color: "gray" }}>Price: $ {item.price}</Typography>
        <br />
        <Typography>Rating </Typography>
        <span style={{ display: "flex", alignItems: 'center', gap: "1rem", color: "gray" }}><Rating name="read-only" value={4.1} readOnly /> {450}</span>
      </Grid>
    </Grid>
  )
}

export default React.memo(Product)