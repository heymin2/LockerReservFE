import '../css/lockerpage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Left.css';
import Right from './Right';
const Main = () => {
  return (
    <>
      <aside className='asideleft'>
        <img className='map' src={'1층A.png'}></img>
        <button className='locbtn' onClick={() => alert('로그인하세요')} >1층 A</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>1층 B</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>1층 C</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>2층 A</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>2층 B</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>2층 C</button>
      </aside>
      <div className="app-center">
        <div className='box'>
          <Link to="/">
            <main>
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"빨간사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
            </main>
          </Link>
        </div>
      </div>
      <Right />
    </>
  )
}

export default Main;