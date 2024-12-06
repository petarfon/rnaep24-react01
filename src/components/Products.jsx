import React from 'react'
import OneProduct from './OneProduct'

const Products = ({ products, category, handleAdd }) => {
    return (
        <>
            <h2>All products in category {category}</h2>
            <div className='all-products'>
                {products.map((p) => {
                    return <OneProduct product={p} key={p.id} handleAdd={handleAdd} />
                })}

                {/* <OneProduct product={products[0]} />
                <OneProduct product={products[1]} />
                <OneProduct product={products[2]} /> */}
            </div>
        </>

    )
}

export default Products