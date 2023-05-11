import React from 'react'
import {Link} from "react-router-dom";
export default function Products({products}) {
  return (
    <div className='col-md-3 m-5 card p-2'>
        <div>
          <Link to={`product/${products._id}`}>
          <img src={products.image} className='img-fluid text-center' alt="Product"/>
          <h1>{products.name}</h1>
                    
          <h1>Price:{products.price}</h1>
          </Link>
                    

                </div>
        </div>
  )
}
