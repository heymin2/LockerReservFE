import React, { Component, useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import In from '../mainpage/In';
import { Link, Navigate } from 'react-router-dom';
// import isAdmin from '../isAdmin';

const A1 = ({ component: Component }) => {
  const [reservModal, reservModalOn] = useState(false);
  const [mapname, setmapname] = useState('113.png');
  const [hang, setHang] = useState('1');
  const [yeol, setYeol] = useState('');

  const onclickA1 = () => {
    setmapname('113.png');
  };
  const onclickB1 = () => {
    setmapname('114.png');
  };
  const onclickA2 = () => {
    setmapname('214.png');
  };
  const onclickB2 = () => {
    setmapname('219.png');
  };
  const onclickC2 = () => {
    setmapname('220.png');
  };
  return (
    <>
      {/* isAdmin() ? Component :{' '}
      <Navigate to="/" {...alert('접근할 수 없는 페이지입니다.')} /> */}
      <aside className="asideleft">
        <img className="map" src={mapname} alt="profile"></img>
        <Link to="/A">
          <button
            className="locbtn"
            style={{ backgroundColor: '#2178DF' }}
            onClick={onclickA1}
          >
            113호
          </button>
        </Link>
        <Link to="/B">
          <button className="locbtn" onClick={onclickB1}>
            114호
          </button>
        </Link>
        <br />
        <Link to="/C">
          <button className="locbtn" onClick={onclickA2}>
            214호
          </button>
        </Link>
        <Link to="/D">
          <button className="locbtn" onClick={onclickB2}>
            219호
          </button>
        </Link>
        <Link to="/E">
          <button className="locbtn" onClick={onclickC2}>
            220호
          </button>
        </Link>
      </aside>
      <div className="app-center">
        <div className="box">
          <ReservModal
            show={reservModal}
            onHide={() => reservModalOn(false)}
            floor={'113'}
            part={'A'}
            hang={hang}
            yeol={yeol}
          />
          <main>
            <img
              className="locker"
              src={'파란사물함.png'}
              onClick={() => {
                reservModalOn(true);
                setHang('1');
                setYeol('1');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={'파란사물함.png'}
              onClick={() => {
                reservModalOn(true);
                setYeol('2');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={'파란사물함.png'}
              onClick={() => {
                reservModalOn(true);
                setYeol('3');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={'파란사물함.png'}
              onClick={() => {
                reservModalOn(true);
                setYeol('4');
              }}
              alt="profile"
            />
          </main>
        </div>
      </div>
      <In />
    </>
  );
};

export default A1;
