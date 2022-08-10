import React from 'react';
import '../css/Right.css';
const In = () => {
    return (
        <aside className="asideright">
            <div className='profilebox'>
                <img src='프로필사진.png' className='profile'></img>
                <div className='txt'>
                    사물함<br /> 1층 A 3행 5줄
                </div>
                <button className='logout'>로그아웃</button>
            </div>
        </aside>
    )

}

export default In;