import React from 'react'
import OneProduct from './OneProduct'

const Cart = ({ products, handleAdd }) => {
    return (
        <>
            {products.length === 0 ? <h2>No products in cart</h2> :
                <h2>My cart</h2>
            }

            <div className='all-products'>
                {products.map((p) => {
                    return <OneProduct product={p} handleAdd={handleAdd} />
                })}

                {/* <OneProduct product={products[0]} />
                <OneProduct product={products[1]} />
                <OneProduct product={products[2]} /> */}
            </div>
        </>

    )
}

export default Cart