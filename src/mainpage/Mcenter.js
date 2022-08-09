import React from 'react';
import '../css/lockerpage.css';
import Main from '../mainpage/Main';
import A1 from '../area/A1';
import A2 from '../area/A2';
import B1 from '../area/B1';
import B2 from '../area/B2';
import C1 from '../area/C1';
import C2 from '../area/C2';
import In from './In';
import Right from './Right';
import { Routes, Route } from 'react-router-dom';


const Mcenter = () => {
  return (
    <main className="app-center">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/A1" element={<A1 />}></Route>
        <Route path="/A2" element={<A2 />}></Route>
        <Route path="/B1" element={<B1 />}></Route>
        <Route path="/B2" element={<B2 />}></Route>
        <Route path="/C1" element={<C1 />}></Route>
        <Route path="/C2" element={<C2 />}></Route>
        <Route path="/In" element={<In />}></Route>
        <Route path="/Right" element={<Right />}></Route>
      </Routes>
    </main>
  )
}

export default Mcenter;