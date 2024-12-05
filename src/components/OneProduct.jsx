import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const OneProduct = ({ product, handleAdd }) => {
    let location = useLocation();
    return (

        < div className='card' >
            {console.log(location)}
            <img src="https://picsum.photos/200" alt="Neka slika" className='card-img-top' />
            <div className="card-body">
                <h3 className="card-title">
                    {product.title}
                </h3>
                <p className="card-text">
                    {product.description}
                </p>
                {location.pathname === '/' ? '' :
                    <p className="card-text">
                        Amount: {product.amount}
                    </p>
                }

                <button className="btn" onClick={() => handleAdd(product.id)}><FaPlus /></button>
                <button className="btn"><FaMinus /></button>

            </div>
        </div >
    )
}

export default OneProduct