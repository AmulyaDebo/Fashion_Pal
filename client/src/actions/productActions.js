import axios from 'axios';

export const getAllProducts = () => dispatch => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' })

  axios.get('/api/products/getallproducts')
    .then(res => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data.products })
    })
    .catch(err => {
      dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err.message })
    });
}

export const getProductById = (_id) => dispatch => {
  dispatch({ type: 'GET_PRODUCT_BY_ID_REQUEST' })

  console.log('productId:', _id);
  axios.get(`http://localhost:5000/api/products/getproductbyid?_id=${_id}`)
    .then(res => {  
      dispatch({ type: 'GET_PRODUCT_BY_ID_SUCCESS', payload: res.data })
    })
    .catch(err => {
      dispatch({ type: 'GET_PRODUCT_BY_ID_FAILED', payload: err.message })
    });
}


