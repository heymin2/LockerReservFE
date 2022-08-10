import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Mcenter = lazy(() => import('./mainpage/Mcenter'));
const Header = lazy(() => import('./mainpage/Header'));
const Left = lazy(() => import('./mainpage/Left'));
const Right = lazy(() => import('./mainpage/Right'));
const In = lazy(() => import('./mainpage/In'));

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Mcenter />
        <In />
        <Left />
      </Suspense>
    </BrowserRouter>
  </div>
);
export default App;