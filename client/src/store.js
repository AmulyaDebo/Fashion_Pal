import { getAllProductsReducer,getProductByIdReducer } from "./reducers/productReducer";
import {CartReducer} from "./reducers/cartReducer";
import {combineReducers} from 'redux';
import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const finalReducer=combineReducers({
    getAllProductsReducer:getAllProductsReducer,
    getProductByIdReducer:getProductByIdReducer,
    CartReducer:CartReducer

});

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const initialState = {
 CartReducer:{cartItems:cartItems}
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

