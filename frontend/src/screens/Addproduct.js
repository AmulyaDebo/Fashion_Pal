import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addProduct } from '../actions/productActions';


export default function Addproduct() {
  const [name,setname] = useState("");
  const [price,setprice] = useState();
  const [countinstock,setcountinstock] = useState();
  const [imageurl,setimageurl] = useState("");
  const [category,setcategory] = useState("");
  const [description,setdescription] = useState("");
  const [gender,setgender] = useState("");
  const dispatch = useDispatch();
  const addproductselector = useSelector(state=>state.addProductReducer);
  const addproduct =(e)=>{
    e.preventDefault();
    const product = {
      name:name,
      price:price,
      countInStock:countinstock,
      image:imageurl,
      description:description,
      category,
    };
   dispatch(addProduct(product))
  };
  return(
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h2>Add product</h2>
          <form onSubmit={addproduct}>
            <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='name'
            required
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            />

          <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='price'
            required
            value={price}
            onChange={(e)=>{setprice(e.target.value)}}
            />

        <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='category'
            required
            value={category}
            onChange={(e)=>{setcategory(e.target.value)}}
            />
            <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='count in stock'
            required
            value={countinstock}
            onChange={(e)=>{setcountinstock(e.target.value)}}
            />
            
            <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='description'
            required
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
            />
            
            <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='image url'
            required
            value={imageurl}
            onChange={(e)=>{setimageurl(e.target.value)}}
            />
              <input
            type = "text"
            className='form-control mb-2 mr-sm-2'
            placeholder='gender'
            required
            value={gender}
            onChange={(e)=>{setgender(e.target.value)}}
            />
            <button
            className='btn btn-dark' type="Submit" style={{float:"left"}}>
              Add product
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}
