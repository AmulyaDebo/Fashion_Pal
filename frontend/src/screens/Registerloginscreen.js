import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { loginUser,adminloginUser } from '../actions/userActions';
import Error from '../components/Error';

export default function Registerloginscreen() {
  const loginreducer = useSelector(state=>state.adminLoginReducer)
  const {success,error} = loginreducer
   const [email, setemail] = useState(``)
  const [password, setpassword] = useState(``)

  const dispatch = useDispatch()
  function login(e) {
    e.preventDefault()
    const user = {
    
      email: email,
      password: password
    }
    dispatch(adminloginUser(user))
   
  }
useEffect(()=>{
  if(localStorage.getItem('currentUser'))
  {
    window.location.href="/admindisplay"
  }
})
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 card p-3' style={({ marginTop: '150px' })}>
          <div className='div'>

          {error&&(<Error error='Invalid Credentials'/>)}

            <form onSubmit={login}>
              <h2 className='text-center'>ADMIN LOGIN</h2>
             

              <input
                type='text'
                placeholder='email'
                className='form-control'
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />

              <input
                type='password'
                placeholder='Password'
                className='form-control'
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />

             
              <div className='text-right p-3'>
                <button type='submit' className='btn btn-dark'>
                 LOGIN
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
