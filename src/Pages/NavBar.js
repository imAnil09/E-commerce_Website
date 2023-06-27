import { Badge, Button, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const count = useSelector((state) => state.count);

  return (
    <header className="sticky top-0 bg-gray-100 text-white py-4 px-6 grid grid-cols-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} width="50px" height="50px" alt="e-commerce" />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <OutlinedInput
          id="outlined-adornment-weight"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <BiSearch className="cursor-pointer" />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <Link to="/" className="ml-2">
          <Button>Login</Button>
        </Link>
        <Link to="/cart" className="ml-2">
          <Button className="text-blue-500">
            <Badge badgeContent={count} color="primary">
              <FiShoppingCart className="mr-1.5" style={{ position: "relative", top: "3.5px" }} />
            </Badge>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
