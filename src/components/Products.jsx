import React from 'react'
import OneProduct from './OneProduct'

const Products = () => {
    return (
        <>
            <h2>All products</h2>
            <div className='all-products'>
                <OneProduct />
                <OneProduct />
                <OneProduct />
            </div>
        </>

    )
}

export default Products