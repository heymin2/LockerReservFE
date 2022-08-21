import React from 'react';
import '../css/lockerpage.css';
import Main from './Main';
import A1 from '../area/A1';
import A2 from '../area/A2';
import B1 from '../area/B1';
import B2 from '../area/B2';
import C2 from '../area/C2';
import { Routes, Route } from 'react-router-dom';


const Mcenter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/A" element={<A1 />}></Route>
      <Route path="/C" element={<A2 />}></Route>
      <Route path="/B" element={<B1 />}></Route>
      <Route path="/D" element={<C2 />}></Route>
      <Route path="/E" element={<B2 />}></Route>
    </Routes>
  );
}

export default Mcenter;