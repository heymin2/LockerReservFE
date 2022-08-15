import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import In from '../mainpage/In';
import { Link } from 'react-router-dom';

const A2 = () => {
  const [reservModal, reservModalOn] = useState(false);
  const [mapname, setmapname] = useState('2층A.png');
  const onclickA1 = () => {
    setmapname("1층A.png");
  }
  const onclickB1 = () => {
    setmapname("1층B.png");
  }
  const onclickA2 = () => {
    setmapname("2층A.png");
  }
  const onclickB2 = () => {
    setmapname("2층B.png");
  }
  const onclickC2 = () => {
    setmapname("2층C.png");
  }
  return (
    <>
      <aside className='asideleft'>
        <img className='map' src={mapname}></img>
        <Link to="/A1">
          <button className='locbtn' onClick={onclickA1}>1층 A</button>
        </Link>
        <Link to="/B1">
          <button className='locbtn' onClick={onclickB1}>1층 B</button>
        </Link><br />
        <Link to="/A2">
          <button className='locbtn' style={{ backgroundColor: '#2178DF' }} onClick={onclickA2}>2층 A</button>
        </Link>
        <Link to="/B2">
          <button className='locbtn' onClick={onclickB2}>2층 B</button>
        </Link>
        <Link to="/C2">
          <button className='locbtn' onClick={onclickC2}>2층 C</button>
        </Link>
      </aside>
      <div className='app-center'>
        <div className='box'>
          <ReservModal
            show={reservModal}
            onHide={() => reservModalOn(false)}
          />
          <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
          <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
          <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
          <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
        </div >
      </div>
      <In />
    </>
  );
}

export default A2;