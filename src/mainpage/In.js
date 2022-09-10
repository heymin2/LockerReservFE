import React from 'react';
import '../css/Right.css';
import axios from 'axios';

const In = () => {
    const onClickLogout = () => {
        axios.post('http://13.125.255.247:5000/login/logout', { logout: "logout" })
            .then((res) => {
                console.log(res);
                if (res === true) {
                    window.location = '/';
                }
            });
    }

    return (
        <aside className="asideright">
            <div className='profilebox'>
                <img src='프로필사진.png' className='profile' alt="profile"></img>
                <div className='txt'>사물함<br /> 예약하지 않음</div>
                <button className='logout' onClick={onClickLogout}>로그아웃</button>
            </div>
        </aside >
    );
}

export default In;