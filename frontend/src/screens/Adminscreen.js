import React from 'react'
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import { adminlogoutUser } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
export default function Adminscreen() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch()
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-10'>
          <ul className='admin'>
            <li><Link to='/admin/productslist' style={{ color: 'black' }}>Productslist    </Link></li>
            <li style={{ paddingLeft: '20px' }}><Link to='/admin/addnewproduct' style={{ color: 'black' }}>Newproductslist</Link></li>
          </ul>

          <div className='text-right p-3'>
                <button type='submit' className='btn btn-dark' onClick={()=>{dispatch(adminlogoutUser(currentUser))}}>
                 LOGOUT
                </button>
                </div>
        </div>
      </div>
    </div>
  )
}
