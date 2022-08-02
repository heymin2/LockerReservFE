import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PIC from '../PIC';
import { BsXLg } from "react-icons/bs";
const SignUpModal = ({ show, onHide }) => {
    return (
        <Modal
            className='modalBody'
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   <div className='rect' />
            <p className="word">사물함 로그인</p>
            <form>
                <input type="text" name="Num" className="num" placeholder='학번 ex)22121234' minLength="8" maxLength="8" />
                <input type="text" name="Name" className="name" placeholder='이름 ex)김컴공' minLength="4" />
                <input type="tel" name="phoneNum" className="phoneNum" placeholder='전화번호 ex)01012345078' minLength="11" maxLength="11" />
                <PIC />
                <input type="submit" className="logbtn"></input>
            </form>
            <Modal.Footer>
                <Button className="xbtn" onClick={onHide}><BsXLg /></Button>
            </Modal.Footer>
        </Modal>
    )
}


export default SignUpModal