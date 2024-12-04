import React from 'react'

const OneProduct = () => {
    return (
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Neka slika" className='card-img-top' />
            <div className="card-body">
                <h3 className="card-title">
                    Product name
                </h3>
                <p className="card-text">
                    Product description
                </p>
                <button className="btn">+</button>
                <button className="btn">-</button>

            </div>
        </div>
    )
}

export default OneProduct