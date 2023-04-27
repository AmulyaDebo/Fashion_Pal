import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
  const cartreducer = useSelector(state => state.CartReducer);
  const { cartItems } = cartreducer;
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          FASHION PAL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
          <div className='navbar-nav ms: auto'>
          {currentUser ? (
            <Dropdown className='ms-auto'>
              <Dropdown.Toggle variant="secondary dropdown-toggle ms-auto" id="dropdown-basic">
              {currentUser.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
               
                <Dropdown.Item onClick={()=>{dispatch(logoutUser(currentUser))}}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}

          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
