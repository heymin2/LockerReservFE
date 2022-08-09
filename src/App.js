import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Mcenter = lazy(() => import('./mainpage/Mcenter'));
const Header = lazy(() => import('./mainpage/Header'));
const Left = lazy(() => import('./mainpage/Left'));
const Right = lazy(() => import('./mainpage/Right'));

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Mcenter />
        <Right />
        <Left />
      </Suspense>
    </BrowserRouter>
  </div>
);
export default App;