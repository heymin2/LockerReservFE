import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import CancelModal from '../modals/CancelModal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Left.css';
import Right from './Right';
const Main = () => {
  const [reservModal, reservModalOn] = useState(false);
  const [cancelModal, cancelModalOn] = useState(false);
  return (
    <>
      <aside className='asideleft'>
        <img className='map' src={'113.png'} alt="profile"></img>
        <button className='locbtn' onClick={() => alert('로그인하세요')} >113호</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>114호</button><br />
        <button className='locbtn' onClick={() => alert('로그인하세요')}>214호</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>219호</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>220호</button>
      </aside>
      <div className="app-center">
        <div className='box'>
          <ReservModal
            show={reservModal}
            onHide={() => reservModalOn(false)}
            floor={'113'}
            part={'A'}
            hang={'1'}
            yeol={'1'}
          />
          <CancelModal
            show={cancelModal}
            onHide={() => cancelModalOn(false)}
            floor={'113'}
            part={'A'}
            hang={'1'}
            yeol={'2'}
          />
          <Link to="/">
            <main>
              <img className="locker" src={"blue.png"} onClick={() => reservModalOn(true)} alt="profile" />
              <img className="locker" src={"red.png"} onClick={() => cancelModalOn(true)} alt="profile" />
              <img className="locker" src={"grey.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" /><br />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" /><br />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
              <img className="locker" src={"blue.png"} onClick={() => alert('로그인하세요')} alt="profile" />
            </main>
          </Link>
        </div>
      </div>
      <Right />
    </>
  );
}

export default Main;