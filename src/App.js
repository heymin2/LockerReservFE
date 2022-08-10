import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Mcenter = lazy(() => import('./mainpage/Mcenter'));
const Header = lazy(() => import('./mainpage/Header'));
const Left = lazy(() => import('./mainpage/Left'));


const App = () => (
  <div>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Mcenter />
      </Suspense>
    </BrowserRouter>
  </div>
);
export default App;