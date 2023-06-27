import React, { useEffect, useState } from 'react'
import ProductsCard from '../Components/ProductsCard'
import { Link, useNavigate } from 'react-router-dom'

const ProductsPage = () => {
    const [product, setProduct] = useState()
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProduct(data)).catch(e => console.log(e))
        console.log(product)
    }, []);

    if(!product){
        return <div>Loading...</div>
    }

    return (
        <React.Fragment>
            <ul className='grid grid-cols-4'>{product.map(element => (
                <li style={{ listStyle: "none" }} key={element.id}>
                    <Link to={`/products/${element.id}`}><ProductsCard key={element.id} price={element.price} title={element.title} imageSrc={element.image} description={element.description} alt={element.alt} /></Link>
                </li>
            ))}</ul>
        </React.Fragment>
    )
}

export default React.memo(ProductsPage)