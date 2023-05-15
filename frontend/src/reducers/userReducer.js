export const registerNewUserReducer=(state={},action)=>{
        switch(action.type)
        {
            case 'USER_REGISTER_REQUEST':
                return{
                    ...state,
                    loading:true
                }
            case 'USER_REGISTER_SUCCESS':
                return{
                    ...state,
                    loading:false,
                    success:true
                }
            case 'USER_REGISTER_FAILED':
                return{
                    ...state,
                    loading:false,
                    error:true
                }
            default: return state;
        }
}
export const loginReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'USER_LOGIN_SUCCESS':
            return{
                ...state,
                loading:false,
                success:true
            }
        case 'USER_LOGIN_FAILED':
            return{
                ...state,
                loading:false,
                error:'Invalid credentials'
            }
        case 'USER_LOGOUT':
            return{
                ...state,
                
            }
        default: return state;
    }
}

export const adminLoginReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADMIN_LOGIN_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'ADMIN_LOGIN_SUCCESS':
            return{
                ...state,
                loading:false,
                success:true
            }
        case 'ADMIN_LOGIN_FAILED':
            return{
                ...state,
                loading:false,
                error:'Invalid credentials'
            }
        case 'ADMIN_LOGOUT':
            return{
                ...state,
                
            }
        default: return state;
    }
}
