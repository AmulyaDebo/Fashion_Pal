import { getAllProductsReducer,getProductByIdReducer,deleteProductReducer,addProductReducer } from "./reducers/productReducer";
import {CartReducer} from "./reducers/cartReducer";
import {combineReducers} from 'redux';
import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loginReducer, registerNewUserReducer, adminLoginReducer } from "./reducers/userReducer";
const finalReducer=combineReducers({
    getAllProductsReducer:getAllProductsReducer,
    getProductByIdReducer:getProductByIdReducer,
    CartReducer:CartReducer,
    registerNewUserReducer:registerNewUserReducer,
    loginReducer:loginReducer,
    adminLoginReducer:adminLoginReducer,
    deleteProductReducer:deleteProductReducer,
    addProductReducer:addProductReducer

});

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem("currentUser")):null
const initialState = {
 CartReducer:{cartItems:cartItems},
 loginReducer:{currentUser:currentUser}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer,initialState,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    ));

export default store;

