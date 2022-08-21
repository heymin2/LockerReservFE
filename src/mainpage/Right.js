import React, { useState } from 'react';
import LoginModal from '../modals/LoginModal';
import { Button } from "react-bootstrap";
import '../css/Right.css';

const Right = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  return (
    <aside className="asideright">
      <LoginModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <Button className='login' onClick={() => setSignUpModalOn(true)}>로그인</Button>
    </aside>
  );
}

export default Right;