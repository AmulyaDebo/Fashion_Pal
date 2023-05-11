import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

export default function Proddescscreen({match}) {

  const { _id } = useParams();
  const [quantity,setquantity] = useState(1);

  const getProductByIdState = useSelector(state => state.getProductByIdReducer)
  const { product, loading, error } = getProductByIdState
  const dispatch = useDispatch();
  function addtocart()
  {
    dispatch(addToCart(product,quantity));
  }
  useEffect(() => {
    dispatch(getProductById(_id));
   
    
  }, [dispatch, _id]);
  
  console.log('Product:', product);
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : error ? (<h1>{error}</h1>) : (
        <div className='row'>

          <div className='col-md-6'>

            <div className='card p-5 m-20'>
              <h1>{product.name}</h1>
              <img src={product.image} alt="This is a dress" />
              <p>{product.description}</p>
            </div>

          </div>

          <div className="col-md-6 text-start">
            <div className='m-2'>
              <h1>Price : {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option key={i} value={i + 1}>{i + 1}</option>
                })}
              </select>
              <hr />
              <button className='btn btn-dark' onClick={addtocart}>ADD TO CART</button>
            </div>
          </div>

        </div>
      )}



    </div>
  )
}
