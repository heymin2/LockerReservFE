import React, { useState } from 'react';
import LoginModal from '../modals/LoginModal';
import { Button } from "react-bootstrap";

const SignButton = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    return (
        <>
            <LoginModal
                show={signUpModalOn}
                onHide={() => setSignUpModalOn(false)}
            />
            <Button onClick={() => setSignUpModalOn(true)}>로그인</Button>
        </>
    )
}

export default SignButton