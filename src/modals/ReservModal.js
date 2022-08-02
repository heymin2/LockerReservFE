import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsXLg } from "react-icons/bs";
import Reserv from '../scss/Reserv.scss';
import axios from 'axios';

const SignUpModal = ({ show, onHide }) => {
    const [inputPass, setInputPass] = useState('')
    const [inputNum2, setInputNum2] = useState('')

    const HandleInputPass = (e) => {
        const regex = /^[0-9]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputPass(e.target.value);
        }
    }

    const HandleInputNum2 = (e) => {
        const regex = /^[0-9]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputNum2(e.target.value);
        }
    }

    let body = {
        studentID: inputNum2,
        pass: inputPass
    };

    const onClickLogin = () => {
        axios.post("http://13.125.255.247:5000/login", body)
            .then((res) => console.log(res));
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='background'>
                <div className='modalBody2'>
                    <div className='rect2' />
                    <p className="word2">사물함 예약</p>
                    <form>
                        <p className="res">선택한 사물함</p>
                        <input type="text" className="pass" value={inputPass} onChange={HandleInputPass} placeholder='비밀번호 4자리' minLength="4" maxLength="4" required />
                        <input type="text" className="num2" value={inputNum2} onChange={HandleInputNum2} placeholder='학번 ex)22121234' minLength="8" maxLength="8" required />
                        <p className='hint'><b>사물함 예약 변경하기 위해서<br /> 비밀번호가 꼭 필요하니<br />기억할 수 있는 번호로<br /> 설정해 주세요</b></p>
                        <input type="submit" className="resbtn" value="예약"></input>
                    </form>
                    <Modal.Footer>
                        <Button className="xbtn" onClick={onHide}><BsXLg /></Button>
                    </Modal.Footer>
                </div>
            </div>
        </Modal>
    )
}

export default SignUpModal