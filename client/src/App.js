import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import React from 'react';

import Proddescscreen from './screens/Proddescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      
     <BrowserRouter>
   
     <Routes>
    
     <Route exact path='/' element={<Homescreen />} />
     <Route exact path='/product/:_id' element={<Proddescscreen />} />
    <Route path='/cart' element={<Cartscreen />}/>
    <Route path='/register' element={<Registerscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
     </Routes>
    

   

     </BrowserRouter>
    
    </div>
  );
}

export default App;
