import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Products from '../components/Products';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';

export default function Homescreen() {
  const getallproductsstate=useSelector(state=>state.getAllProductsReducer)
  const {loading,products,error} = getallproductsstate
 // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {

      dispatch(getAllProducts())
  }, []);

  return (
    <div>
      <div className='row justify-content-center'>
      {console.log("loading: ", loading)}
      {console.log("error: ", error)}
      {console.log("products: ", products)}
     { console.log("Type of products:", typeof products)}

        {loading?(<h1>Loading...</h1>):error?(<h1>Something went wrong</h1>):(<h1>{products.map(product=>{return<div className= 'card' key={product._id}><Products products={product}/></div>})}</h1>)}
        
      </div>
    </div>
  );
}
