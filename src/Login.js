import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // useCookies import
import PIC from './PIC';

const Login = (props) => {
    const formRef = useRef();
    const [cookies, setCookie] = useCookies(['num']); // 쿠키 훅 
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axios
            .post('/users/login', { // 로그인 요청
                num: formRef.current.Num.value,
                name: formRef.current.Name.value,
                phonenum: formRef.current.phoneNum.value
            })
            .then((res) => {
                setCookie('num', res.data.token);// 쿠키에 토큰 저장
            });
    };

    return (
        <>
            <div className="rect" />
            <p className="word">사물함 로그인</p>
            <form>
                <input type="text" name="Num" className="num" placeholder='학번 ex)22121234' minLength="8" maxLength="8" />
                <input type="text" name="Name" className="name" placeholder='이름 ex)김컴공' minLength="4" />
                <input type="tel" name="phoneNum" className="phoneNum" placeholder='전화번호 ex)01012345078' minLength="11" maxLength="11" />
                <PIC />
                <input type="submit" className="logbtn"></input>
            </form>
        </>
    );
};

export default Login;