import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { filterProducts } from '../actions/productActions'
export default function Filter() {
const [searchkey,setsearchkey] = useState('')
const [sort,setsort] = useState('popular')
const [category,setcategory] = useState('all')
const [gender,setgender] = useState('gender')
const dispatch = useDispatch()

  return (
    <div>
      <div className='row justify-content-center'>
        
        <div className='row'>
          <div className='col-m-6 d-flex'>
            <div className='col-m-2 m-2'>
              <select value={sort} onChange={(e)=>{setsort(e.target.value)}}>
              <option value='popular'>Popular</option>
                <option value='htl'>Descending</option>
                <option value='lth'>Ascending</option>
              </select>
            </div>
            <div className='col-m-2 m-2'>
              <select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
              <option value='all'>All</option>
                <option value='traditional'>Ethnic wear</option>
                <option value='Western wear'>Western wear</option>
              </select>
            </div>
            <div className='col-m-2 m-2'>
              <select  value={gender} onChange={(e)=>{setgender(e.target.value)}}>
              <option value='gender'>All</option>
                <option value='women'>Women</option>
                <option value='men'>Men</option>
              </select>
            </div>
            <div className='col-m-2 m-2 d-flex ml-auto'>
              <button className='btn btn-dark' onClick={()=>{dispatch(filterProducts(sort,category,gender))}}>FILTER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
