import React from 'react';

import { AboutUs, Header, SpecialMenu  , Chef, Gallery} from './container';
import { Navbar } from './components';
import './App.css';
import Layout from './Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = (props) => (
  <BrowserRouter>
   <Routes>
     <Route path="/gallery" element={<Gallery/>}></Route>
     <Route  path='/gallery' element={<Navbar/>}></Route>
     <Route  path='/' element={<Layout><Header/></Layout>}></Route>
   </Routes>
 </BrowserRouter>
);
export default App;
