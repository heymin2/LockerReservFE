import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import Left from '../mainpage/Left';
import In from '../mainpage/In';

const C2 = ({ rservNum }) => {
    const [reservModal, reservModalOn] = useState(false);
    return (
        <>
            <Left />
            <div className='app-center'>
                <div className='box'>
                    <ReservModal
                        show={reservModal}
                        onHide={() => reservModalOn(false)}
                    />
                    <img className="locker" src={"빨간사물함.png"} onClick={() => reservModalOn(true)} />
                    <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
                    <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
                    <img className="locker" src={"파란사물함.png"} onClick={() => reservModalOn(true)} />
                </div >
            </div>
            <In />
        </>
    );
}

export default C2;