import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ cartNum }) {
    return (
        <div className='navBar'>
            <Link className='site-title' to="/">E-shop</Link>
            <p className="cart-num">{cartNum}</p>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default NavBar