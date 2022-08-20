import React, { useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import In from '../mainpage/In';
import { Link } from 'react-router-dom';

const B1 = () => {
    const [reservModal, reservModalOn] = useState(false);
    const [mapname, setmapname] = useState('1층B.png');
    const [floor, setFloor] = useState('114');
    const [part, setPart] = useState('B');
    const [hang, setHang] = useState('1');
    const [yeol, setYeol] = useState('')
    const [fs, setFs] = useState('앞');

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
                <Link to="/A">
                    <button className='locbtn' onClick={onclickA1}>113호 앞</button>
                </Link>
                <Link to="/B">
                    <button className='locbtn' style={{ backgroundColor: '#2178DF' }} onClick={onclickB1}>114호 앞</button>
                </Link><br />
                <Link to="/C">
                    <button className='locbtn' onClick={onclickA2}>214호 앞</button>
                </Link>
                <Link to="/D">
                    <button className='locbtn' onClick={onclickB2}>219호 앞</button>
                </Link>
                <Link to="/E">
                    <button className='locbtn' onClick={onclickC2}>219호 옆</button>
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
                        fs={fs}
                    />
                    <main>
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('1') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('2') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('3') }} />
                        <img className="locker" src={"파란사물함.png"} onClick={() => { reservModalOn(true); setYeol('4') }} />
                    </main>
                </div >
            </div>
            <In />
        </>
    );
}

export default B1;