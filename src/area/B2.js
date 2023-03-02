import React, { Component, useEffect, useState } from 'react';
import '../css/lockerpage.css';
import ReservModal from '../modals/ReservModal';
import CancelModal from '../modals/CancelModal';
import In from '../mainpage/In';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
// import isAdmin from '../isAdmin';

const B2 = () => {
    const [cancelModal, cancelModalOn] = useState(false);
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
            hang: 1,
            yeol: 3,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 4,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 5,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 6,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 7,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 8,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 9,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 10,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 11,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 12,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 13,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 14,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 15,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 16,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 17,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 18,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 19,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 20,
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
            hang: 2,
            yeol: 3,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 4,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 5,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 6,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 7,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 8,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 9,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 10,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 11,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 12,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 13,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 14,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 15,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 16,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 17,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 18,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 19,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 20,
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
            hang: 3,
            yeol: 3,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 4,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 5,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 6,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 7,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 8,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 9,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 10,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 11,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 12,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 13,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 14,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 15,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 16,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 17,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 18,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 19,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 20,
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
            hang: 4,
            yeol: 3,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 4,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 5,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 6,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 7,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 8,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 9,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 10,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 11,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 12,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 13,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 14,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 15,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 16,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 17,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 18,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 19,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 20,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 1,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 2,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 3,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 4,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 5,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 6,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 7,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 8,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 9,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 10,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 11,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 12,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 13,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 14,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 15,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 16,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 17,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 18,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 19,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 20,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 21,
            status: 'blue',
        }, {
            hang: 1,
            yeol: 22,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 21,
            status: 'blue',
        }, {
            hang: 2,
            yeol: 22,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 21,
            status: 'blue',
        }, {
            hang: 3,
            yeol: 22,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 21,
            status: 'blue',
        }, {
            hang: 4,
            yeol: 22,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 21,
            status: 'blue',
        }, {
            hang: 5,
            yeol: 22,
            status: 'blue',
        }
    ]);

    useEffect(() => {
        axios.get('http://52.78.124.15:5000/reservation/E').then((res) => {
            console.log(res);
            console.log(lockers);
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].status === 'red') {
                    for (var j = 0; j < lockers.length; j++) {
                        if (
                            res.data[i].hang === lockers[j].hang &&
                            res.data[i].yeol === lockers[j].yeol
                        ) {
                            lockers[j].status = 'red';
                            document.getElementsByClassName('locker')[j].src = 'red.png';
                            break;
                        }
                    }
                } else if (res.data[i].status === 'grey') {
                    for (var k = 0; k < lockers.length; k++) {
                        if (
                            res.data[i].hang === lockers[k].hang &&
                            res.data[i].yeol === lockers[k].yeol
                        ) {
                            lockers[k].status = 'grey';
                            document.getElementsByClassName('locker')[k].src = 'grey.png';
                            break;
                        }
                    }
                }
            }
        });
        return () => { };
    }, [lockers]);

    return (
        <>
            {/* isAdmin() ? Component :{' '}
      <Navigate to="/" {...alert('접근할 수 없는 페이지입니다.')} /> */}
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
                    <CancelModal
                        show={cancelModal}
                        onHide={() => cancelModalOn(false)}
                        floor={'220'}
                        part={'E'}
                        hang={hang}
                        yeol={yeol}
                    />
                    <main style={{ width: '900px' }}>
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
                            }} alt="profile" />
                        <img className="locker" src={lockers[2].status + '.png'}
                            onClick={() => {
                                if (lockers[2].status === 'blue') { reservModalOn(true); }
                                else if (lockers[2].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[2].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('3');
                            }} alt="profile" />
                        <img className="locker" src={lockers[3].status + '.png'}
                            onClick={() => {
                                if (lockers[3].status === 'blue') { reservModalOn(true); }
                                else if (lockers[3].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[3].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('4');
                            }} alt="profile" />
                        <img className="locker" src={lockers[4].status + '.png'}
                            onClick={() => {
                                if (lockers[4].status === 'blue') { reservModalOn(true); }
                                else if (lockers[4].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[4].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('5');
                            }} alt="profile" />
                        <img className="locker" src={lockers[5].status + '.png'}
                            onClick={() => {
                                if (lockers[5].status === 'blue') { reservModalOn(true); }
                                else if (lockers[5].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[5].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('6');
                            }} alt="profile" />
                        <img className="locker" src={lockers[6].status + '.png'}
                            onClick={() => {
                                if (lockers[6].status === 'blue') { reservModalOn(true); }
                                else if (lockers[6].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[6].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('7');
                            }} alt="profile" />
                        <img className="locker" src={lockers[7].status + '.png'}
                            onClick={() => {
                                if (lockers[7].status === 'blue') { reservModalOn(true); }
                                else if (lockers[7].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[7].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('8');
                            }} alt="profile" />
                        <img className="locker" src={lockers[8].status + '.png'}
                            onClick={() => {
                                if (lockers[8].status === 'blue') { reservModalOn(true); }
                                else if (lockers[8].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[8].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('9');
                            }} alt="profile" />
                        <img className="locker" src={lockers[9].status + '.png'}
                            onClick={() => {
                                if (lockers[9].status === 'blue') { reservModalOn(true); }
                                else if (lockers[9].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[9].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('10');
                            }} alt="profile" />
                        <img className="locker" src={lockers[10].status + '.png'}
                            onClick={() => {
                                if (lockers[10].status === 'blue') { reservModalOn(true); }
                                else if (lockers[10].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[10].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('11');
                            }} alt="profile" />
                        <img className="locker" src={lockers[11].status + '.png'}
                            onClick={() => {
                                if (lockers[11].status === 'blue') { reservModalOn(true); }
                                else if (lockers[11].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[11].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('12');
                            }} alt="profile" />
                        <img className="locker" src={lockers[12].status + '.png'}
                            onClick={() => {
                                if (lockers[12].status === 'blue') { reservModalOn(true); }
                                else if (lockers[12].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[12].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('13');
                            }} alt="profile" />
                        <img className="locker" src={lockers[13].status + '.png'}
                            onClick={() => {
                                if (lockers[13].status === 'blue') { reservModalOn(true); }
                                else if (lockers[13].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[13].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('14');
                            }} alt="profile" />
                        <img className="locker" src={lockers[14].status + '.png'}
                            onClick={() => {
                                if (lockers[14].status === 'blue') { reservModalOn(true); }
                                else if (lockers[14].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[14].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('15');
                            }} alt="profile" />
                        <img className="locker" src={lockers[15].status + '.png'}
                            onClick={() => {
                                if (lockers[15].status === 'blue') { reservModalOn(true); }
                                else if (lockers[15].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[15].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('16');
                            }} alt="profile" />
                        <img className="locker" src={lockers[16].status + '.png'}
                            onClick={() => {
                                if (lockers[16].status === 'blue') { reservModalOn(true); }
                                else if (lockers[16].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[16].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('17');
                            }} alt="profile" />
                        <img className="locker" src={lockers[17].status + '.png'}
                            onClick={() => {
                                if (lockers[17].status === 'blue') { reservModalOn(true); }
                                else if (lockers[17].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[17].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('18');
                            }} alt="profile" />
                        <img className="locker" src={lockers[18].status + '.png'}
                            onClick={() => {
                                if (lockers[18].status === 'blue') { reservModalOn(true); }
                                else if (lockers[18].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[18].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('19');
                            }} alt="profile" />
                        <img className="locker" src={lockers[19].status + '.png'}
                            onClick={() => {
                                if (lockers[19].status === 'blue') { reservModalOn(true); }
                                else if (lockers[19].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[19].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('20');
                            }} alt="profile" />
                        <img className="locker" src={lockers[100].status + '.png'}
                            onClick={() => {
                                if (lockers[100].status === 'blue') { reservModalOn(true); }
                                else if (lockers[100].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[100].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('21');
                            }} alt="profile" />
                        <img className="locker" src={lockers[101].status + '.png'}
                            onClick={() => {
                                if (lockers[101].status === 'blue') { reservModalOn(true); }
                                else if (lockers[101].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[101].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('1');
                                setYeol('22');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[20].status + '.png'}
                            onClick={() => {
                                if (lockers[20].status === 'blue') { reservModalOn(true); }
                                else if (lockers[20].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[20].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[21].status + '.png'}
                            onClick={() => {
                                if (lockers[21].status === 'blue') { reservModalOn(true); }
                                else if (lockers[21].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[21].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('2');
                            }} alt="profile" />
                        <img className="locker" src={lockers[22].status + '.png'}
                            onClick={() => {
                                if (lockers[22].status === 'blue') { reservModalOn(true); }
                                else if (lockers[22].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[22].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('3');
                            }} alt="profile" />
                        <img className="locker" src={lockers[23].status + '.png'}
                            onClick={() => {
                                if (lockers[23].status === 'blue') { reservModalOn(true); }
                                else if (lockers[23].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[23].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('4');
                            }} alt="profile" />
                        <img className="locker" src={lockers[24].status + '.png'}
                            onClick={() => {
                                if (lockers[24].status === 'blue') { reservModalOn(true); }
                                else if (lockers[24].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[24].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('5');
                            }} alt="profile" />
                        <img className="locker" src={lockers[25].status + '.png'}
                            onClick={() => {
                                if (lockers[25].status === 'blue') { reservModalOn(true); }
                                else if (lockers[25].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[25].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('6');
                            }} alt="profile" />
                        <img className="locker" src={lockers[26].status + '.png'}
                            onClick={() => {
                                if (lockers[26].status === 'blue') { reservModalOn(true); }
                                else if (lockers[26].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[26].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('7');
                            }} alt="profile" />
                        <img className="locker" src={lockers[27].status + '.png'}
                            onClick={() => {
                                if (lockers[27].status === 'blue') { reservModalOn(true); }
                                else if (lockers[27].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[27].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('8');
                            }} alt="profile" />
                        <img className="locker" src={lockers[28].status + '.png'}
                            onClick={() => {
                                if (lockers[28].status === 'blue') { reservModalOn(true); }
                                else if (lockers[28].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[28].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('9');
                            }} alt="profile" />
                        <img className="locker" src={lockers[29].status + '.png'}
                            onClick={() => {
                                if (lockers[29].status === 'blue') { reservModalOn(true); }
                                else if (lockers[29].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[29].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('10');
                            }} alt="profile" />
                        <img className="locker" src={lockers[30].status + '.png'}
                            onClick={() => {
                                if (lockers[30].status === 'blue') { reservModalOn(true); }
                                else if (lockers[30].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[30].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('11');
                            }} alt="profile" />
                        <img className="locker" src={lockers[31].status + '.png'}
                            onClick={() => {
                                if (lockers[31].status === 'blue') { reservModalOn(true); }
                                else if (lockers[31].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[31].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('12');
                            }} alt="profile" />
                        <img className="locker" src={lockers[32].status + '.png'}
                            onClick={() => {
                                if (lockers[32].status === 'blue') { reservModalOn(true); }
                                else if (lockers[32].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[32].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('13');
                            }} alt="profile" />
                        <img className="locker" src={lockers[33].status + '.png'}
                            onClick={() => {
                                if (lockers[33].status === 'blue') { reservModalOn(true); }
                                else if (lockers[33].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[33].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('14');
                            }} alt="profile" />
                        <img className="locker" src={lockers[34].status + '.png'}
                            onClick={() => {
                                if (lockers[34].status === 'blue') { reservModalOn(true); }
                                else if (lockers[34].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[34].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('15');
                            }} alt="profile" />
                        <img className="locker" src={lockers[35].status + '.png'}
                            onClick={() => {
                                if (lockers[35].status === 'blue') { reservModalOn(true); }
                                else if (lockers[35].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[35].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('16');
                            }} alt="profile" />
                        <img className="locker" src={lockers[36].status + '.png'}
                            onClick={() => {
                                if (lockers[36].status === 'blue') { reservModalOn(true); }
                                else if (lockers[36].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[36].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('17');
                            }} alt="profile" />
                        <img className="locker" src={lockers[37].status + '.png'}
                            onClick={() => {
                                if (lockers[37].status === 'blue') { reservModalOn(true); }
                                else if (lockers[37].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[37].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('18');
                            }} alt="profile" />
                        <img className="locker" src={lockers[38].status + '.png'}
                            onClick={() => {
                                if (lockers[38].status === 'blue') { reservModalOn(true); }
                                else if (lockers[38].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[38].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('19');
                            }} alt="profile" />
                        <img className="locker" src={lockers[39].status + '.png'}
                            onClick={() => {
                                if (lockers[39].status === 'blue') { reservModalOn(true); }
                                else if (lockers[39].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[39].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('20');
                            }} alt="profile" />
                        <img className="locker" src={lockers[102].status + '.png'}
                            onClick={() => {
                                if (lockers[102].status === 'blue') { reservModalOn(true); }
                                else if (lockers[102].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[102].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('21');
                            }} alt="profile" />
                        <img className="locker" src={lockers[103].status + '.png'}
                            onClick={() => {
                                if (lockers[103].status === 'blue') { reservModalOn(true); }
                                else if (lockers[103].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[103].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('2');
                                setYeol('22');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[40].status + '.png'}
                            onClick={() => {
                                if (lockers[40].status === 'blue') { reservModalOn(true); }
                                else if (lockers[40].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[40].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[41].status + '.png'}
                            onClick={() => {
                                if (lockers[41].status === 'blue') { reservModalOn(true); }
                                else if (lockers[41].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[41].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('2');
                            }} alt="profile" />
                        <img className="locker" src={lockers[42].status + '.png'}
                            onClick={() => {
                                if (lockers[42].status === 'blue') { reservModalOn(true); }
                                else if (lockers[42].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[42].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('3');
                            }} alt="profile" />
                        <img className="locker" src={lockers[43].status + '.png'}
                            onClick={() => {
                                if (lockers[43].status === 'blue') { reservModalOn(true); }
                                else if (lockers[43].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[43].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('4');
                            }} alt="profile" />
                        <img className="locker" src={lockers[44].status + '.png'}
                            onClick={() => {
                                if (lockers[44].status === 'blue') { reservModalOn(true); }
                                else if (lockers[44].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[44].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('5');
                            }} alt="profile" />
                        <img className="locker" src={lockers[45].status + '.png'}
                            onClick={() => {
                                if (lockers[45].status === 'blue') { reservModalOn(true); }
                                else if (lockers[45].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[45].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('6');
                            }} alt="profile" />
                        <img className="locker" src={lockers[46].status + '.png'}
                            onClick={() => {
                                if (lockers[46].status === 'blue') { reservModalOn(true); }
                                else if (lockers[46].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[46].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('7');
                            }} alt="profile" />
                        <img className="locker" src={lockers[47].status + '.png'}
                            onClick={() => {
                                if (lockers[47].status === 'blue') { reservModalOn(true); }
                                else if (lockers[47].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[47].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('8');
                            }} alt="profile" />
                        <img className="locker" src={lockers[48].status + '.png'}
                            onClick={() => {
                                if (lockers[48].status === 'blue') { reservModalOn(true); }
                                else if (lockers[48].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[48].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('9');
                            }} alt="profile" />
                        <img className="locker" src={lockers[49].status + '.png'}
                            onClick={() => {
                                if (lockers[49].status === 'blue') { reservModalOn(true); }
                                else if (lockers[49].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[49].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('10');
                            }} alt="profile" />
                        <img className="locker" src={lockers[50].status + '.png'}
                            onClick={() => {
                                if (lockers[50].status === 'blue') { reservModalOn(true); }
                                else if (lockers[50].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[50].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('11');
                            }} alt="profile" />
                        <img className="locker" src={lockers[51].status + '.png'}
                            onClick={() => {
                                if (lockers[51].status === 'blue') { reservModalOn(true); }
                                else if (lockers[51].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[51].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('12');
                            }} alt="profile" />
                        <img className="locker" src={lockers[52].status + '.png'}
                            onClick={() => {
                                if (lockers[52].status === 'blue') { reservModalOn(true); }
                                else if (lockers[52].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[52].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('13');
                            }} alt="profile" />
                        <img className="locker" src={lockers[53].status + '.png'}
                            onClick={() => {
                                if (lockers[53].status === 'blue') { reservModalOn(true); }
                                else if (lockers[53].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[53].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('14');
                            }} alt="profile" />
                        <img className="locker" src={lockers[54].status + '.png'}
                            onClick={() => {
                                if (lockers[54].status === 'blue') { reservModalOn(true); }
                                else if (lockers[54].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[54].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('15');
                            }} alt="profile" />
                        <img className="locker" src={lockers[55].status + '.png'}
                            onClick={() => {
                                if (lockers[55].status === 'blue') { reservModalOn(true); }
                                else if (lockers[55].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[55].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('16');
                            }} alt="profile" />
                        <img className="locker" src={lockers[56].status + '.png'}
                            onClick={() => {
                                if (lockers[56].status === 'blue') { reservModalOn(true); }
                                else if (lockers[56].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[56].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('17');
                            }} alt="profile" />
                        <img className="locker" src={lockers[57].status + '.png'}
                            onClick={() => {
                                if (lockers[57].status === 'blue') { reservModalOn(true); }
                                else if (lockers[57].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[57].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('18');
                            }} alt="profile" />
                        <img className="locker" src={lockers[58].status + '.png'}
                            onClick={() => {
                                if (lockers[58].status === 'blue') { reservModalOn(true); }
                                else if (lockers[58].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[58].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('19');
                            }} alt="profile" />
                        <img className="locker" src={lockers[59].status + '.png'}
                            onClick={() => {
                                if (lockers[59].status === 'blue') { reservModalOn(true); }
                                else if (lockers[59].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[59].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('20');
                            }} alt="profile" />
                        <img className="locker" src={lockers[104].status + '.png'}
                            onClick={() => {
                                if (lockers[104].status === 'blue') { reservModalOn(true); }
                                else if (lockers[104].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[104].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('21');
                            }} alt="profile" />
                        <img className="locker" src={lockers[105].status + '.png'}
                            onClick={() => {
                                if (lockers[105].status === 'blue') { reservModalOn(true); }
                                else if (lockers[105].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[105].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('3');
                                setYeol('22');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[60].status + '.png'}
                            onClick={() => {
                                if (lockers[60].status === 'blue') { reservModalOn(true); }
                                else if (lockers[60].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[60].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[61].status + '.png'}
                            onClick={() => {
                                if (lockers[61].status === 'blue') { reservModalOn(true); }
                                else if (lockers[61].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[61].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('2');
                            }} alt="profile" />
                        <img className="locker" src={lockers[62].status + '.png'}
                            onClick={() => {
                                if (lockers[62].status === 'blue') { reservModalOn(true); }
                                else if (lockers[62].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[62].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('3');
                            }} alt="profile" />
                        <img className="locker" src={lockers[63].status + '.png'}
                            onClick={() => {
                                if (lockers[63].status === 'blue') { reservModalOn(true); }
                                else if (lockers[63].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[63].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('4');
                            }} alt="profile" />
                        <img className="locker" src={lockers[64].status + '.png'}
                            onClick={() => {
                                if (lockers[64].status === 'blue') { reservModalOn(true); }
                                else if (lockers[64].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[64].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('5');
                            }} alt="profile" />
                        <img className="locker" src={lockers[65].status + '.png'}
                            onClick={() => {
                                if (lockers[65].status === 'blue') { reservModalOn(true); }
                                else if (lockers[65].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[65].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('6');
                            }} alt="profile" />
                        <img className="locker" src={lockers[66].status + '.png'}
                            onClick={() => {
                                if (lockers[66].status === 'blue') { reservModalOn(true); }
                                else if (lockers[66].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[66].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('7');
                            }} alt="profile" />
                        <img className="locker" src={lockers[67].status + '.png'}
                            onClick={() => {
                                if (lockers[67].status === 'blue') { reservModalOn(true); }
                                else if (lockers[67].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[67].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('8');
                            }} alt="profile" />
                        <img className="locker" src={lockers[68].status + '.png'}
                            onClick={() => {
                                if (lockers[68].status === 'blue') { reservModalOn(true); }
                                else if (lockers[68].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[68].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('9');
                            }} alt="profile" />
                        <img className="locker" src={lockers[69].status + '.png'}
                            onClick={() => {
                                if (lockers[69].status === 'blue') { reservModalOn(true); }
                                else if (lockers[69].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[69].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('10');
                            }} alt="profile" />
                        <img className="locker" src={lockers[70].status + '.png'}
                            onClick={() => {
                                if (lockers[70].status === 'blue') { reservModalOn(true); }
                                else if (lockers[70].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[70].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('11');
                            }} alt="profile" />
                        <img className="locker" src={lockers[71].status + '.png'}
                            onClick={() => {
                                if (lockers[71].status === 'blue') { reservModalOn(true); }
                                else if (lockers[71].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[71].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('12');
                            }} alt="profile" />
                        <img className="locker" src={lockers[72].status + '.png'}
                            onClick={() => {
                                if (lockers[72].status === 'blue') { reservModalOn(true); }
                                else if (lockers[72].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[72].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('13');
                            }} alt="profile" />
                        <img className="locker" src={lockers[73].status + '.png'}
                            onClick={() => {
                                if (lockers[73].status === 'blue') { reservModalOn(true); }
                                else if (lockers[73].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[73].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('14');
                            }} alt="profile" />
                        <img className="locker" src={lockers[74].status + '.png'}
                            onClick={() => {
                                if (lockers[74].status === 'blue') { reservModalOn(true); }
                                else if (lockers[74].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[74].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('15');
                            }} alt="profile" />
                        <img className="locker" src={lockers[75].status + '.png'}
                            onClick={() => {
                                if (lockers[75].status === 'blue') { reservModalOn(true); }
                                else if (lockers[75].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[75].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('16');
                            }} alt="profile" />
                        <img className="locker" src={lockers[76].status + '.png'}
                            onClick={() => {
                                if (lockers[76].status === 'blue') { reservModalOn(true); }
                                else if (lockers[76].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[76].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('17');
                            }} alt="profile" />
                        <img className="locker" src={lockers[77].status + '.png'}
                            onClick={() => {
                                if (lockers[77].status === 'blue') { reservModalOn(true); }
                                else if (lockers[77].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[77].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('18');
                            }} alt="profile" />
                        <img className="locker" src={lockers[78].status + '.png'}
                            onClick={() => {
                                if (lockers[78].status === 'blue') { reservModalOn(true); }
                                else if (lockers[78].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[78].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('19');
                            }} alt="profile" />
                        <img className="locker" src={lockers[79].status + '.png'}
                            onClick={() => {
                                if (lockers[79].status === 'blue') { reservModalOn(true); }
                                else if (lockers[79].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[79].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('20');
                            }} alt="profile" />
                        <img className="locker" src={lockers[106].status + '.png'}
                            onClick={() => {
                                if (lockers[106].status === 'blue') { reservModalOn(true); }
                                else if (lockers[106].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[106].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('21');
                            }} alt="profile" />
                        <img className="locker" src={lockers[107].status + '.png'}
                            onClick={() => {
                                if (lockers[107].status === 'blue') { reservModalOn(true); }
                                else if (lockers[107].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[107].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('4');
                                setYeol('22');
                            }} alt="profile" /><br />
                        <img className="locker" src={lockers[80].status + '.png'}
                            onClick={() => {
                                if (lockers[80].status === 'blue') { reservModalOn(true); }
                                else if (lockers[80].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[80].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('1');
                            }} alt="profile" />
                        <img className="locker" src={lockers[81].status + '.png'}
                            onClick={() => {
                                if (lockers[81].status === 'blue') { reservModalOn(true); }
                                else if (lockers[81].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[81].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('2');
                            }} alt="profile" />
                        <img className="locker" src={lockers[82].status + '.png'}
                            onClick={() => {
                                if (lockers[82].status === 'blue') { reservModalOn(true); }
                                else if (lockers[82].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[82].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('3');
                            }} alt="profile" />
                        <img className="locker" src={lockers[83].status + '.png'}
                            onClick={() => {
                                if (lockers[83].status === 'blue') { reservModalOn(true); }
                                else if (lockers[83].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[83].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('4');
                            }} alt="profile" />
                        <img className="locker" src={lockers[84].status + '.png'}
                            onClick={() => {
                                if (lockers[84].status === 'blue') { reservModalOn(true); }
                                else if (lockers[84].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[84].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('5');
                            }} alt="profile" />
                        <img className="locker" src={lockers[85].status + '.png'}
                            onClick={() => {
                                if (lockers[85].status === 'blue') { reservModalOn(true); }
                                else if (lockers[85].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[85].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('6');
                            }} alt="profile" />
                        <img className="locker" src={lockers[86].status + '.png'}
                            onClick={() => {
                                if (lockers[86].status === 'blue') { reservModalOn(true); }
                                else if (lockers[86].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[86].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('7');
                            }} alt="profile" />
                        <img className="locker" src={lockers[87].status + '.png'}
                            onClick={() => {
                                if (lockers[87].status === 'blue') { reservModalOn(true); }
                                else if (lockers[87].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[87].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('8');
                            }} alt="profile" />
                        <img className="locker" src={lockers[88].status + '.png'}
                            onClick={() => {
                                if (lockers[88].status === 'blue') { reservModalOn(true); }
                                else if (lockers[88].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[88].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('9');
                            }} alt="profile" />
                        <img className="locker" src={lockers[89].status + '.png'}
                            onClick={() => {
                                if (lockers[89].status === 'blue') { reservModalOn(true); }
                                else if (lockers[89].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[89].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('10');
                            }} alt="profile" />
                        <img className="locker" src={lockers[90].status + '.png'}
                            onClick={() => {
                                if (lockers[90].status === 'blue') { reservModalOn(true); }
                                else if (lockers[90].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[90].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('11');
                            }} alt="profile" />
                        <img className="locker" src={lockers[91].status + '.png'}
                            onClick={() => {
                                if (lockers[91].status === 'blue') { reservModalOn(true); }
                                else if (lockers[91].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[91].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('12');
                            }} alt="profile" />
                        <img className="locker" src={lockers[92].status + '.png'}
                            onClick={() => {
                                if (lockers[92].status === 'blue') { reservModalOn(true); }
                                else if (lockers[92].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[92].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('13');
                            }} alt="profile" />
                        <img className="locker" src={lockers[93].status + '.png'}
                            onClick={() => {
                                if (lockers[93].status === 'blue') { reservModalOn(true); }
                                else if (lockers[93].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[93].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('14');
                            }} alt="profile" />
                        <img className="locker" src={lockers[94].status + '.png'}
                            onClick={() => {
                                if (lockers[94].status === 'blue') { reservModalOn(true); }
                                else if (lockers[94].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[94].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('15');
                            }} alt="profile" />
                        <img className="locker" src={lockers[95].status + '.png'}
                            onClick={() => {
                                if (lockers[95].status === 'blue') { reservModalOn(true); }
                                else if (lockers[95].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[95].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('16');
                            }} alt="profile" />
                        <img className="locker" src={lockers[96].status + '.png'}
                            onClick={() => {
                                if (lockers[96].status === 'blue') { reservModalOn(true); }
                                else if (lockers[96].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[96].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('17');
                            }} alt="profile" />
                        <img className="locker" src={lockers[97].status + '.png'}
                            onClick={() => {
                                if (lockers[97].status === 'blue') { reservModalOn(true); }
                                else if (lockers[97].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[97].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('18');
                            }} alt="profile" />
                        <img className="locker" src={lockers[98].status + '.png'}
                            onClick={() => {
                                if (lockers[98].status === 'blue') { reservModalOn(true); }
                                else if (lockers[98].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[98].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('19');
                            }} alt="profile" />
                        <img className="locker" src={lockers[99].status + '.png'}
                            onClick={() => {
                                if (lockers[99].status === 'blue') { reservModalOn(true); }
                                else if (lockers[99].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[99].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('20');
                            }} alt="profile" />
                        <img className="locker" src={lockers[108].status + '.png'}
                            onClick={() => {
                                if (lockers[108].status === 'blue') { reservModalOn(true); }
                                else if (lockers[108].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[108].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('21');
                            }} alt="profile" />
                        <img className="locker" src={lockers[109].status + '.png'}
                            onClick={() => {
                                if (lockers[109].status === 'blue') { reservModalOn(true); }
                                else if (lockers[109].status === 'red') {
                                    cancelModalOn(true);
                                } else if (lockers[109].status === 'grey') {
                                    reservModalOn(false);
                                }
                                setHang('5');
                                setYeol('22');
                            }} alt="profile" />
                    </main>
                </div >
            </div>
            <In />
        </>
    );
}

export default B2;