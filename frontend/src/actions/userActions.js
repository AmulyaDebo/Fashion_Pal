import axios from 'axios';
export const registerNeewUser=(user)=>dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    axios
    .post("http://localhost:5000/api/users/register",user,{
        withCredentials: true
      })
    .then(res=>{
        dispatch({type:'USER_REGISTER_SUCCESS'})
        console.log(res.data)
    })
    .catch(err=>{
        dispatch({type:'USER_REGISTER_FAILED'},{payload:err})
       // console.log(err.response.data)
    })
}

export const loginUser=(user)=>dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    axios
    .post("http://localhost:5000/api/users/login",user,{
        withCredentials: true
      })
    .then(res=>{
        dispatch({type:'USER_LOGIN_SUCCESS'})

        localStorage.setItem('currentUser',JSON.stringify(res.data))
        window.location.href='/'

        console.log(res.data)
    })
    .catch(err=>{
        dispatch({type:'USER_LOGIN_FAILED'},{payload:err})
       // console.log(err.response.data)
    })
}

export const adminloginUser=(user)=>dispatch=>{
    dispatch({type:'ADMIN_LOGIN_REQUEST'})
    axios
    .post("http://localhost:5000/api/users/adminlogin",user,{
        withCredentials: true
      })
    .then(res=>{
        dispatch({type:'ADMIN_LOGIN_SUCCESS'})

        localStorage.setItem('currentUser',JSON.stringify(res.data))
        window.location.href='/admindisplay'

        console.log(res.data)
    })
    .catch(err=>{
        dispatch({type:'ADMIN_LOGIN_FAILED'},{payload:err})
       // console.log(err.response.data)
    })
}

export const logoutUser = ()=>dispatch=>{
            localStorage.removeItem('currentUser')
            localStorage.removeItem('cartItems')
            dispatch({type:'USER_LOGOUT'})
            window.location.href='/'
}

export const adminlogoutUser = ()=>dispatch=>{
    localStorage.removeItem('currentUser')
 
    dispatch({type:'ADMIN_USER_LOGOUT'})
    window.location.href='/admin'
}