import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsXLg } from "react-icons/bs";
import Cancel from '../scss/Cancel.scss';

const CancelModal = ({ show, onHide }) => {
    const [inputPass2, setInputPass2] = useState('')

    const HandleInputPass2 = (e) => {
        setInputPass2(e.target.value)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='background'>
                <div className='modalBody3'>
                    <div className='rect2' />
                    <p className="word3">사물함 예약 취소</p>
                    <form>
                        <p className="res">선택한 사물함</p>
                        <input type="text" className="pass" value={inputPass2} onChange={HandleInputPass2} placeholder='비밀번호 4자리' minLength="4" maxLength="4" required />
                        <p className='hint2'><b>사물함 변경하고 싶은데<br /> 비밀번호를 잊으신 분은<br />1:1문의해 주세요</b></p>
                        <input type="submit" className="canbtn" value="취소"></input>
                    </form>
                    <Modal.Footer>
                        <Button className="xbtn" onClick={onHide}><BsXLg /></Button>
                    </Modal.Footer>
                </div>
            </div>
        </Modal>
    )
}

export default CancelModal