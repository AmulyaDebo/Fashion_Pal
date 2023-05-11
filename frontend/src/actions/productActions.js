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
export const filterProducts = (sortkey, category, gender) => dispatch => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' });
  axios
    .get('http://localhost:5000/api/products/getallproducts')
    .then(res => {
      let filteredProducts = res.data;
      console.log(`Filtered products: ${JSON.stringify(res.data, null, 2)}`);
      console.log(typeof(sortkey))

      if (sortkey !== 'popular') {
        if (sortkey === 'htl') {
          filteredProducts = res.data.sort((a, b) => {
            return -a.price + b.price;
          });
          console.log(`Filtered products after : ${JSON.stringify(filteredProducts, null, 2)}`);
        } else {
          filteredProducts = res.data.sort((a, b) => {
            return a.price - b.price;
          }
          );
          
        }
      }

      

      if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category.toLowerCase().includes(category));
      }
      if (gender !== 'gender') {
        filteredProducts = filteredProducts.filter(product => product.gender.toLowerCase().includes(gender));
      }
      else {
        filteredProducts = res.data;
      }
   
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: filteredProducts });
    })
    .catch(err => {
      dispatch({ type: 'GET_PRODUCTS_FAILED' });
    });
};
