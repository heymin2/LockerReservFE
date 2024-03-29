import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsXLg } from "react-icons/bs";
import '../scss/Reserv.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReservModal = ({ show, onHide, floor, part, hang, yeol }) => {
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

    let body2 = {
        studentID: inputNum2,
        password: inputPass,
        part: part,
        hang: hang,
        yeol: yeol
    };

    const onClickReserv = () => {
        axios.post('http://52.78.124.15:5000/reservation/locker', body2)
            .then((res) => {
                console.log(res);
                if (inputNum2 === '') {
                    Swal.fire({
                        title: '미입력',
                        text: '학번을 입력하세요',
                        icon: 'warning',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                } else if (inputPass === '') {
                    Swal.fire({
                        title: '미입력',
                        text: '비밀번호를 입력하세요',
                        icon: 'warning',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                } else if (res.data === 'TTLover') {
                    Swal.fire({
                        title: 'Error',
                        text: '비밀번호 3회 오류난 회원입니다. 문의해 주세요.',
                        icon: 'error',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                } else if (res.data === 'wrongPW') {
                    Swal.fire({
                        title: 'Error',
                        text: '비밀번호를 틀렸습니다',
                        icon: 'error',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                } else if (res.data === 'userAR') {
                    Swal.fire({
                        title: 'Error',
                        text: '이미 사물함을 예약하셨습니다. 기존 사물함을 취소하고 예약해 주세요',
                        icon: 'error',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                } else if (res.data === 'other') {
                    Swal.fire({
                        title: 'Error',
                        text: '이미 예약된 사물함입니다. 다른 사물함을 예약해 주세요.',
                        icon: 'error',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    });
                }
                else if (res.data === true) {
                    Swal.fire({
                        title: 'Success',
                        text: '예약 완료되었습니다',
                        icon: 'success',
                        confirmButtonColor: '#0D3F7A',
                        confirmButtonText: '확인',
                    }, document.location.replace(`/${part}`));
                }
            });
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
                    <form method="post">
                        <p className="res"><c style={{ color: 'grey' }}>선택한 사물함</c><br />{floor}호 {hang}행 {yeol}열</p>
                        <input type="text" className="pass" value={inputPass} onChange={HandleInputPass} placeholder='비밀번호 4자리' minLength="4" maxLength="4" required />
                        <input type="text" className="num2" value={inputNum2} onChange={HandleInputNum2} placeholder='학번 ex)22121234' minLength="8" maxLength="8" required />
                        <p className='hint'><b>사물함 예약 변경하기 위해서<br /> 비밀번호가 꼭 필요하니<br />기억할 수 있는 번호로<br /> 설정해 주세요</b></p>
                        <input type="button" className="resbtn" onClick={onClickReserv} value="예약"></input>
                    </form>
                    <Modal.Footer>
                        <Button className="xbtn" onClick={onHide}><BsXLg /></Button>
                    </Modal.Footer>
                </div>
            </div>
        </Modal >
    )
}

export default ReservModal;