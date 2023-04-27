import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Error  from '../components/Error';
import { getAllProducts,deleteProduct } from '../actions/productActions';

export default function Productslist() {
      const getallproductstate = useSelector(state=>state.getAllProductsReducer)
      const {products,loading,error} = getallproductstate
      const dispatch = useDispatch()

      useEffect(()=>{
        dispatch(getAllProducts())
      },[])
      return(
        <div>
          <h2>Products list</h2>
          <table className='table table-bordered'>
            <thead>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>id</th>
              <th>Delete</th>
            </thead>
            <tbody>

                  {error&&(<Error error='Something went wrong'/>)}
                  {products&&(products.map(product=>{
                    return <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.countInStock}</td>
                      <td>{product._id}</td>
                      <td><i class="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteProduct(product._id))}}></i></td>
                    </tr>
                 
                  }))}

            </tbody>
          </table>
       
        </div>
      )
}
