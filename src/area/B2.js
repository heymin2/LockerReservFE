import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import In from '../mainpage/In';
import { Link } from 'react-router-dom';

const B2 = () => {
    const [reservModal, reservModalOn] = useState(false);
    const [mapname, setmapname] = useState('220.png');
    const [hang, setHang] = useState('1');
    const [yeol, setYeol] = useState('')

    const onclickA1 = () => {
        setmapname("113.png");
    }
    const onclickB1 = () => {
        setmapname("114.png");
    }
    const onclickA2 = () => {
        setmapname("214.png");
    }
    const onclickB2 = () => {
        setmapname("219.png");
    }
    const onclickC2 = () => {
        setmapname("220.png");
    }
    return (
        <>
            <aside className='asideleft'>
                <img className='map' src={mapname} alt="profile"></img>
                <Link to="/A">
                    <button className='locbtn' onClick={onclickA1}>113호</button>
                </Link>
                <Link to="/B">
                    <button className='locbtn' onClick={onclickB1}>114호</button>
                </Link><br />
                <Link to="/C">
                    <button className='locbtn' onClick={onclickA2}>214호</button>
                </Link>
                <Link to="/D">
                    <button className='locbtn' onClick={onclickB2}>219호</button>
                </Link>
                <Link to="/E">
                    <button className='locbtn' style={{ backgroundColor: '#2178DF' }} onClick={onclickC2}>220호</button>
                </Link>
            </aside>
            <div className='app-center'>
                <div className='box'>
                    <ReservModal
                        show={reservModal}
                        onHide={() => reservModalOn(false)}
                        floor={'220'}
                        part={'E'}
                        hang={hang}
                        yeol={yeol}
                    />
                    <main>
                        <img className="locker" src={"blue.png"} onClick={() => { reservModalOn(true); setHang('1'); setYeol('1') }} alt="profile" />
                        <img className="locker" src={"blue.png"} onClick={() => { reservModalOn(true); setYeol('2') }} alt="profile" />
                        <img className="locker" src={"blue.png"} onClick={() => { reservModalOn(true); setYeol('3') }} alt="profile" />
                        <img className="locker" src={"blue.png"} onClick={() => { reservModalOn(true); setYeol('4') }} alt="profile" />
                    </main>
                </div >
            </div>
            <In />
        </>
    );
}

export default B2;