import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import Left from '../mainpage/Left';
import In from '../mainpage/In';
import { Link } from 'react-router-dom';

const A1 = ({ }) => {
  const [reservModal, reservModalOn] = useState(false);
  const [mapname, setmapname] = useState('1층A.png');
  const onclickA1 = () => {
    setmapname("1층A.png");
  }
  const onclickB1 = () => {
    setmapname("B1.jpg");
  }
  const onclickC1 = () => {
    setmapname("A1.jpg");
  }
  const onclickA2 = () => {
    setmapname("A1.jpg");
  }
  const onclickB2 = () => {
    setmapname("A1.jpg");
  }
  const onclickC2 = () => {
    setmapname("A1.jpg");
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
        </Link>
        <Link to="/C1">
          <button className='locbtn' onClick={onclickC1}>1층 C</button>
        </Link>
        <Link to="/A2">
          <button className='locbtn' onClick={onclickA2}>2층 A</button>
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

export default A1;