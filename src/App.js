import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Mcenter = lazy(() => import('./mainpage/Mcenter'));
const Header = lazy(() => import('./mainpage/Header'));

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
