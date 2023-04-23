import React, { useState } from 'react'

export default function Registerscreen() {
  const [name, setname] = useState(``)
  const [email, setemail] = useState(``)
  const [password, setpassword] = useState(``)
  const [cpassword, setcpassword] = useState(``)

  function register(e) {
    e.preventDefault()

    if (password === cpassword) {
      const user = {
        name: name,
        email: email,
        password: password
      }
      // submit the form data here
    } else {
      alert('Passwords not matching')
    }
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 card p-3' style={({ marginTop: '150px' })}>
          <div className='div'>
            <form onSubmit={register}>
              <h2 className='text-center'>Register</h2>
              <input
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                required
                onChange={(e) => {
                  setname(e.target.value)
                }}
              />

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
                type='text'
                placeholder='Password'
                className='form-control'
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />

              <input
                type='text'
                placeholder='Confirm Password'
                className='form-control'
                value={cpassword}
                required
                onChange={(e) => {
                  setcpassword(e.target.value)
                }}
              />

              <div className='text-right p-3'>
                <button type='submit' className='btn btn-dark'>
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
