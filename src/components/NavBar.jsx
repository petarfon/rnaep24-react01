import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ cartNum }) {
    return (
        <div className='navBar'>
            <Link to="/"><h2 className="site-title">E-shop</h2></Link>
            <p className="cart-num">{cartNum}</p>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default NavBar