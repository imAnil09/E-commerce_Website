import { Badge, Button, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const count = useSelector((state) => state.count);

  const inputRef = useRef();

  const dispatch = useDispatch();

  const [queryParam, setQueryParam] = useState();

  const location = useLocation();

  const handleGlobalSearch = () => {
    dispatch({type: 'SEARCH_QUERY', payload: {query: queryParam }})
  }
  

  return (
    <header className="sticky top-0 bg-gray-100 text-white py-4 px-6 grid grid-cols-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} width="50px" height="50px" alt="e-commerce" />
        </Link>
        <p className="text-blue-500 text-2xl font-bold ml-5">aniZon</p>
      </div>
      <div className="flex items-center justify-end">
      {location.pathname.includes('products') &&  
        <OutlinedInput
        id="outlined-adornment-weight"
        size="small"
        ref={inputRef.focus}
        value={queryParam}
        placeholder='Search products...'
        onKeyDown={(e) => {
          if(e.keyCode == 13){
            handleGlobalSearch()
          }
        }}
        onChange={(e) => setQueryParam(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
              <BiSearch className="cursor-pointer"  onClick={handleGlobalSearch}/>
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'weight',
          }}
          />
        }
        <>
        {location.pathname === '/' &&  
          <Link to="/" className="ml-2">
            <Button>Login</Button>
          </Link>
        }
        {location.pathname === '/cart' &&  
          <Link to=".." relative='path'>
            <button className='bg-blue-500 py-2 px-3'>Back</button>
          </Link>
        }
        </>
        <Link to="/cart" className="ml-2">
          <Button className="text-blue-500">
            <Badge badgeContent={count} color="primary">
              <FiShoppingCart className="mr-1.5" style={{ position: "relative", top: "1px", fontSize: "1.5rem" }} />
            </Badge>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default React.memo(NavBar);
