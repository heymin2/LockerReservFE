import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PIC from '../PIC';
import Login from '../scss/Login.scss';
import { BsXLg } from "react-icons/bs";
import axios from 'axios';

const LoginModal = ({ show, onHide }) => {
    const [inputNum, setInputNum] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputPhone, setInputPhone] = useState('')

    const HandleInputNum = (e) => {
        setInputNum(e.target.value)
    }
    const HandleInputName = (e) => {
        setInputName(e.target.value)
    }
    const HandleInputPhone = (e) => {
        setInputPhone(e.target.value)
    }

    const onClickLogin = () => {
        axios.post('http://54.180.92.126:5000/login', null, {
            params: {
                'studentID': inputNum,
                'name': inputName,
                'phone': inputPhone
            }
        })
            .then(res => console.log(res))
            .catch()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='background'>
                <div className='modalBody'>
                    <div className='rect' />
                    <p className="word">사물함 로그인</p>
                    <form>
                        <input type="text" name="Num" className="num" value={inputNum} onChange={HandleInputNum} placeholder='학번 ex)22121234' minLength="8" maxLength="8" required />
                        <input type="text" name="Name" className="name" value={inputName} onChange={HandleInputName} placeholder='이름 ex)김컴공' minLength="3" required />
                        <input type="tel" name="phoneNum" className="phoneNum" value={inputPhone} onChange={HandleInputPhone} placeholder='전화번호 ex)01012345078' minLength="11" maxLength="11" required />
                        <PIC />
                        <input type="submit" className="logbtn" onClick={onClickLogin} value="로그인"></input>
                    </form>
                    <Modal.Footer>
                        <Button className="xbtn" onClick={onHide}><BsXLg /></Button>
                    </Modal.Footer>
                </div>
            </div>
        </Modal >
    )
}


export default LoginModal