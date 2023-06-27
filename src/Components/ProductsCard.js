import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductsCard({imageSrc, alt, title, description}) {
  return (
    <div>
        <img className='w-50' src={imageSrc} alt={alt} />
    </div>
  );
}
// {description.split(' ').splice(0,15).map(item => item).join(' ')}