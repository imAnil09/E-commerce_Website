import { Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-auto">
            </div>
            <footer className="bg-gray-700 text-white py-4 px-6 text-center">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                {/* <li><Link to='/product'>Product</Link></li> */}
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/help_center'>Help Center</Link></li>
                <li><Link to='/about'>About</Link></li>
                    </ul>
                <p>&copy; 2023 My Webpage. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default React.memo(FooterPage)