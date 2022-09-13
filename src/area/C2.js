import React, { Component, useEffect, useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import CancelModal from '../modals/CancelModal';
import In from '../mainpage/In';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
// import isAdmin from '../isAdmin';

const C2 = () => {
    const [cancelModal, cancelModalOn] = useState(false);
    const [reservModal, reservModalOn] = useState(false);
    const [mapname, setmapname] = useState('219.png');
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

    const [lockers] = useState([
        {
            hang: 1,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 2,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 2,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 2,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 2,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 2,
            status: 'blue',
        }
    ]);
    useEffect(() => {
        axios.get('http://52.78.124.15:5000/reservation/D').then((res) => {
            console.log(res);
            console.log(lockers);
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].status === 'red') {
                    for (var j = 0; j < lockers.length; j++) {
                        if (res.data[i].hang === lockers[j].hang && res.data[i].yeol === lockers[j].yeol) {
                            lockers[j].status = 'red';
                            document.getElementsByClassName('locker')[j].src = 'red.png';
                            break;
                        }
                    }
                } else if (res.data[i].status === 'grey') {
                    for (var k = 0; k < lockers.length; k++) {
                        if (res.data[i].hang === lockers[k].hang && res.data[i].yeol === lockers[k].yeol) {
                            lockers[k].status = 'grey';
                            document.getElementsByClassName('locker')[k].src = 'grey.png';
                            break;
                        }
                    }
                }
            }
        });
    }, [lockers]);

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
                <Link to="/c">
                    <button className='locbtn' onClick={onclickA2}>214호</button>
                </Link>
                <Link to="/D">
                    <button className='locbtn' style={{ backgroundColor: '#2178DF' }} onClick={onclickB2}>219호</button>
                </Link>
                <Link to="/E">
                    <button className='locbtn' onClick={onclickC2}>220호</button>
                </Link>
            </aside>
            <div className='app-center'>
                <div className='box'>
                    <ReservModal
                        show={reservModal}
                        onHide={() => reservModalOn(false)}
                        floor={'219'}
                        part={'D'}
                        hang={hang}
                        yeol={yeol}
                    />  <CancelModal
                        show={cancelModal}
                        onHide={() => cancelModalOn(false)}
                        floor={'113'}
                        part={'A'}
                        hang={hang}
                        yeol={yeol}
                    />
                    <main>
                        <img className="locker" src={lockers[0].status + '.png'}
                            onClick={() => {
                                if (lockers[0].status === 'blue') { reservModalOn(true); }
                                else if (lockers[0].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[0].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[1].status + '.png'}
                            onClick={() => {
                                if (lockers[1].status === 'blue') { reservModalOn(true); }
                                else if (lockers[1].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[1].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('2');
                            }} alt="profile" /> <br />
                        <img className="locker" src={lockers[2].status + '.png'}
                            onClick={() => {
                                if (lockers[2].status === 'blue') { reservModalOn(true); }
                                else if (lockers[2].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[2].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[3].status + '.png'}
                            onClick={() => {
                                if (lockers[3].status === 'blue') { reservModalOn(true); }
                                else if (lockers[3].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[3].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('2');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[4].status + '.png'}
                            onClick={() => {
                                if (lockers[4].status === 'blue') { reservModalOn(true); }
                                else if (lockers[4].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[4].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[5].status + '.png'}
                            onClick={() => {
                                if (lockers[5].status === 'blue') { reservModalOn(true); }
                                else if (lockers[5].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[5].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('2');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[6].status + '.png'}
                            onClick={() => {
                                if (lockers[6].status === 'blue') { reservModalOn(true); }
                                else if (lockers[6].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[6].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[7].status + '.png'}
                            onClick={() => {
                                if (lockers[7].status === 'blue') { reservModalOn(true); }
                                else if (lockers[7].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[7].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('2');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[8].status + '.png'}
                            onClick={() => {
                                if (lockers[8].status === 'blue') { reservModalOn(true); }
                                else if (lockers[8].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[8].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[9].status + '.png'}
                            onClick={() => {
                                if (lockers[9].status === 'blue') { reservModalOn(true); }
                                else if (lockers[9].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[9].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('2');
                            }} alt="profile" />
                    </main>
                </div >
            </div>
            <In />
        </>
    );
}

export default C2;