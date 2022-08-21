import React from 'react';
import '../css/Right.css';
import { Link } from 'react-router-dom';

const In = () => {
    return (
        <aside className="asideright">
            <div className='profilebox'>
                <img src='프로필사진.png' className='profile' alt="profile"></img>
                <div className='txt'>
                    사물함<br /> 예약하지 않음
                </div>
                <Link to="/"><button className='logout' >로그아웃</button></Link>
            </div>
        </aside>
    );
}

export default In;