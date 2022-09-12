import React, { Component, useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import CancelModal from '../modals/CancelModal';
import In from '../mainpage/In';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
// import isAdmin from '../isAdmin';

const A1 = ({ component: Component }) => {
  const [reservModal, reservModalOn] = useState(false);
  const [cancelModal, cancelModalOn] = useState(false);
  const [mapname, setmapname] = useState('113.png');
  const [hang, setHang] = useState(1);
  const [yeol, setYeol] = useState(1);

  const lockers = [{
    hang: 1,
    yeol: 1,
    status: 'blue'
  }, {
    hang: 1,
    yeol: 2,
    status: 'blue'
  }, {
    hang: 2,
    yeol: 1,
    status: 'blue'
  }, {
    hang: 2,
    yeol: 2,
    status: 'blue'
  }]

  const onclickA1 = () => {
    setmapname('113.png');
    axios.get('http://13.125.255.247:5000/reservation/A').then((res) => {
      console.log(res);
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].status === 'red') {
          for (var j = 0; j < lockers.length; j++) {
            if (res.data[i].hang === lockers[j].hang && res.data[i].yeol === lockers[j].yeol) {
              lockers[j].status('red');
              //locker[j].status = 'red';
              break;
            }
          }
        }
        else if (res.data[i].status === 'grey') {
          for (var k = 0; k < lockers.length; k++) {
            if (res.data[i].hang === lockers[k].hang && res.data[i].yeol === lockers[k].yeol) {
              lockers[k].status('grey');
              //locker[k].status = 'grey';
            }
          }
        }
      }
    });
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
          <CancelModal
            show={cancelModal}
            onHide={() => cancelModalOn(false)}
            floor={'113'}
            part={'A'}
            hang={hang}
            yeol={yeol}
          />
          <main>
            <img
              className="locker"
              src={lockers[0].status + '.png'}
              hang='1'
              yeol='1'
              onClick={() => {
                if (lockers[0].status === 'blue') {
                  reservModalOn(true);
                } else if (lockers[0].status === 'red') {
                  cancelModalOn(true);
                } else if (lockers[0].status === 'grey') {
                  reservModalOn(false);
                }
                setHang('1');
                setYeol('1');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={lockers[1].status + '.png'}
              onClick={() => {
                if (lockers[1].status === 'blue') {
                  reservModalOn(true);
                } else if (lockers[1].status === 'red') {
                  cancelModalOn(true);
                } else if (lockers[1].status === 'grey') {
                  reservModalOn(false);
                }
                setHang('1');
                setYeol('2');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={lockers[2].status + '.png'}
              onClick={() => {
                if (lockers[2].status === 'blue') {
                  reservModalOn(true);
                } else if (lockers[2].status === 'red') {
                  cancelModalOn(true);
                } else if (lockers[2].status === 'grey') {
                  reservModalOn(false);
                }
                setHang('2');
                setYeol('1');
              }}
              alt="profile"
            />
            <img
              className="locker"
              src={lockers[3].status + '.png'}
              onClick={() => {
                if (lockers[3].status === 'blue') {
                  reservModalOn(true);
                } else if (lockers[3].status === 'red') {
                  cancelModalOn(true);
                } else if (lockers[3].status === 'grey') {
                  reservModalOn(false);
                }
                setHang('2');
                setYeol('1');
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
