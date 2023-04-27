import axios from 'axios';

export const getAllProducts = () => dispatch => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' })

  axios.get('http://localhost:5000/api/products/getallproducts')
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

export const deleteProduct=(productid)=>dispatch=>{

  dispatch({type:"DELETE_PRODUCT_REQUEST"})

  axios.post('http://localhost:5000/api/products/deleteproduct',{productid}).then(res=>{
    dispatch({type:'DELETE_PRODUCT_SUCCESS',payload:res.data})
    alert('Product deleted successfully')
    window.location.reload()
  }).catch(err=>{dispatch({type:'DELETE_PRODUCT_FAILED',payload:err})})

}

export const addProduct = (product)=>dispatch=>{
  dispatch({type:"ADD_PRODUCT_REQUEST"})
  axios.post('http://localhost:5000/api/products/addproduct',{product}).then(res=>{
    console.log(res);
    dispatch({typr:"ADD_PRODUCT_SUCCESS"})
    window.location.reload()
 
  }).catch(err=>{dispatch({type:"ADD_PRODUCT_FAILED"})})
}
