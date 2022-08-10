import React, { useState } from 'react';
import '../css/Left.css'
import { Link } from 'react-router-dom';

const Left = () => {
    const [mapname, setmapname] = useState('1층A.png');
    const onclickA1 = () => {
        setmapname("1층A.png");
    }
    const onclickB1 = () => {
        setmapname("B1.jpg");
    }
    const onclickC1 = () => {
        setmapname("A1.jpg");
    }
    const onclickA2 = () => {
        setmapname("A1.jpg");
    }
    const onclickB2 = () => {
        setmapname("A1.jpg");
    }
    const onclickC2 = () => {
        setmapname("A1.jpg");
    }
    return (
        <aside className='asideleft'>
            <img className='map' src={mapname}></img>
            <Link to="/A1">
                <button className='locbtn' onClick={onclickA1}>1층 A</button>
            </Link>
            <Link to="/B1">
                <button className='locbtn' onClick={onclickB1}>1층 B</button>
            </Link>
            <Link to="/C1">
                <button className='locbtn' onClick={onclickC1}>1층 C</button>
            </Link>
            <Link to="/A2">
                <button className='locbtn' onClick={onclickA2}>2층 A</button>
            </Link>
            <Link to="/B2">
                <button className='locbtn' onClick={onclickB2}>2층 B</button>
            </Link>
            <Link to="/C2">
                <button className='locbtn' onClick={onclickC2}>2층 C</button>
            </Link>
        </aside>
    );
}

export default Left;