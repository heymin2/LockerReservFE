import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';

const A1 = ({ rservNum }) => {
  const [reservModal, reservModalOn] = useState(false);
  return (
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
  );
}

export default A1;