import React from 'react'
import { useState,useDispatch, useSelector } from 'react-redux'
import { addToCart,deleteFromCart } from '../actions/cartActions'
export default function Cartscreen() {
    const cartreducerstate=useSelector(state=>state.CartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate

    var subtotal = cartItems.reduce((acc,item)=>acc+(item.price*item.quantity),0)
   
    return (
    <div className='row mt-3 justify-content-center'>
       <div className='col-md-8 card'>
        <h1 className='text-center m-5'>MY CART</h1>
        <table className='table table-bordered' >
            <thead>
            <tr>
                <th  >Name</th>
                <th >Price</th>
                <th >Quantity</th>
                <th >Total price</th>
                <th >Delete</th>
            </tr>
            </thead>
            <tbody>
                {cartItems.map(item=>{
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><select
                      value={item.quantity} onChange={(e)=>{dispatch(addToCart(item,e.target.value))}}
                    
                    >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                  return <option key={i} value={i + 1}>{i + 1}</option>
                })}
                            </select></td>
                        <td>{item.quantity * item.price}</td>
                        <td><i class="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                    </tr>
                })}
            </tbody>
        </table>
                <hr/>
                <h2 className='text-center'> SUB TOTAL: {subtotal} RS/-</h2>
       </div>
    </div>
  )
}
