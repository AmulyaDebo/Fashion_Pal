
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import React from 'react';
import Addproduct from './screens/Addproduct';
import Productslist from './screens/Productslist';
import Proddescscreen from './screens/Proddescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Registerloginscreen from './screens/Registerloginscreen'
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      
     <BrowserRouter>
   
     <Routes>
    
     <Route exact path='/' element={<Loginscreen />} />
     <Route exact path='/homescreen' element={<Homescreen />} />
     <Route exact path='/homescreen/product/:_id' element={<Proddescscreen />} />
    <Route path='/cart' element={<Cartscreen />}/>
    <Route path='/register' element={<Registerscreen/>}/>
    <Route exact path='/login' element={<Loginscreen />} />
    <Route exact path='/admin' element={<Registerloginscreen />} />
    <Route path='/admindisplay' element={<Adminscreen/>}/>

          <Route path='/admin/productslist' element={<Productslist/>} />
            <Route path='/admin/addnewproduct'  element={<Addproduct/>} />
    
     </Routes>
    

   

     </BrowserRouter>
    
    </div>
  );
}

export default App;
