import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('./mainpage/Main'));
const Header = lazy(() => import('./mainpage/Header'));
const Left = lazy(() => import('./mainpage/Left'));
const Right = lazy(() => import('./mainpage/Right'));

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Main />
        <Right />
        <Left />
      </Suspense>
    </BrowserRouter>
  </div>
);
export default App;