import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
export default function Navbar() {

  const cartreducer=useSelector(state=>state.CartReducer) ;
  const {cartItems} =cartreducer;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">FASHION PAL</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
           
         
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/cart"><i class="fas fa-shopping-cart"></i>{cartItems.length}</a>
            </li>

          </ul>
          
        </div>
      </nav>
    </div>
  )
}
