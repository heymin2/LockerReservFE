import { useState } from 'react';
import './Login.scss';
import PIC from './PIC';



const LoginModal = (props) => {
    const { onClose } = props;
    return (
        <div className="popWrap">
            <div className="popBox">
                <div>
                    <div>
                        <div className="rect" />
                        <p className="word">사물함 로그인</p>
                        <form>
                            <input type="text" className="num" placeholder='학번 ex)22121234' minLength="8" maxLength="8" />
                            <input type="text" className="name" placeholder='이름 ex)김컴공' minLength="4" />
                            <input type="tel" className="phoneNum" placeholder='전화번호 ex)01012345078' minLength="11" maxLength="11" />
                            <PIC />
                            <button className="logbtn">로그인</button>
                        </form>
                    </div>
                </div>
                <div className="btnWrap">
                    <div className="btn" onClick={() => { onClose(false) }}>
                        닫기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal