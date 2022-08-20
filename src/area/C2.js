import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import In from '../mainpage/In';
import { Link } from 'react-router-dom';

const C2 = () => {
    const [reservModal, reservModalOn] = useState(false);
    const [mapname, setmapname] = useState('2층C.png');
    const [floor, setFloor] = useState('2');
    const [part, setPart] = useState('C');
    const [hang, setHang] = useState('1');
    const [yeol, setYeol] = useState('')

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
                    <button className='locbtn' onClick={onclickA1}>113호 앞</button>
                </Link>
                <Link to="/B1">
                    <button className='locbtn' onClick={onclickB1}>114호 앞</button>
                </Link><br />
                <Link to="/A2">
                    <button className='locbtn' onClick={onclickA2}>214호 앞</button>
                </Link>
                <Link to="/B2">
                    <button className='locbtn' onClick={onclickB2}>219호 앞</button>
                </Link>
                <Link to="/C2">
                    <button className='locbtn' style={{ backgroundColor: '#2178DF' }} onClick={onclickC2}>219호 옆</button>
                </Link>
            </aside>
            <div className='app-center'>
                <div className='box'>
                    <ReservModal
                        show={reservModal}
                        onHide={() => reservModalOn(false)}
                        floor={floor}
                        part={part}
                        hang={hang}
                        yeol={yeol}
                    />
                    <main>
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('2') }} /><br />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('2'); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('2'); setYeol('2') }} /><br />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('3'); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('3'); setYeol('2') }} /><br />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('4'); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('4'); setYeol('2') }} /><br />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('5'); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setHang('5'); setYeol('2') }} /><br />
                    </main>
                </div >
            </div>
            <In />
        </>
    );
}

export default C2;