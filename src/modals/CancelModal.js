import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import '../scss/Cancel.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

const CancelModal = ({ show, onHide, floor, part, hang, yeol }) => {
  const [inputPass2, setInputPass2] = useState('');

  const HandleInputPass2 = (e) => {
    const regex = /^[0-9]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputPass2(e.target.value);
    }
  };

  let body3 = {
    password: inputPass2,
    part: part,
    hang: hang,
    yeol: yeol,
  };

  const onClickDelete = () => {
    axios.post('http://13.125.255.247:5000/deleteInfo', body3).then((res) => {
      console.log(res);
      if (inputPass2 === '') {
        Swal.fire({
          title: '미입력',
          text: '비밀번호를 입력하세요',
          icon: 'warning',
          confirmButtonColor: '#0D3F7A',
          confirmButtonText: '확인',
        });
      } else if (res.data === 'false') {
        Swal.fire({
          title: 'Error',
          text: '비밀번호 오류입니다',
          icon: 'error',
          confirmButtonColor: '#0D3F7A',
          confirmButtonText: '확인',
        });
      } else if (res.data === 'nonRuser') {
        Swal.fire({
          title: 'Error',
          text: '사물함 예약자가 아닙니다',
          icon: 'error',
          confirmButtonColor: '#0D3F7A',
          confirmButtonText: '확인',
        });
      } else if (res.data === 'TTLover') {
        Swal.fire({
          title: 'Error',
          text: '비밀번호 3회 오류입니다 고객센터로 문의해 주세요',
          icon: 'error',
          confirmButtonColor: '#0D3F7A',
          confirmButtonText: '확인',
        });
        document.location.replace('/');
      } else if (res.data === true) {
        Swal.fire(
          {
            title: 'Success',
            text: '예약 취소되었습니다',
            icon: 'success',
            confirmButtonColor: '#0D3F7A',
            confirmButtonText: '확인',
          },
          document.location.replace(`/${part}`),
        );
      }
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="background">
        <div className="modalBody3">
          <div className="rect2" />
          <p className="word3">사물함 예약 취소</p>
          <form method="post">
            <p className="res">
              <c style={{ color: 'grey' }}>선택한 사물함</c>
              <br />
              {floor}호 {hang}행 {yeol}열
            </p>
            <input
              type="text"
              className="pass"
              value={inputPass2}
              onChange={HandleInputPass2}
              placeholder="비밀번호 4자리"
              minLength="4"
              maxLength="4"
              required
            />
            <p className="hint2">
              <b>
                사물함 취소하고 싶은데
                <br /> 비밀번호를 잊으신 분은
                <br />
                1:1문의해 주세요
              </b>
            </p>
            <input
              type="button"
              className="canbtn"
              value="취소"
              onClick={onClickDelete}
            ></input>
          </form>
          <Modal.Footer>
            <Button className="xbtn" onClick={onHide}>
              <BsXLg />
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
};

export default CancelModal;
