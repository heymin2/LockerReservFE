import React, { useState } from 'react';
import SignUpModal from '../modals/SignUpModal';
import { Button } from "react-bootstrap";

const SignButton = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    return (
        <>
            <SignUpModal
                show={signUpModalOn}
                onHide={() => setSignUpModalOn(false)}
            />
            <Button onClick={() => setSignUpModalOn(true)}>로그인</Button>
        </>
    )
}

export default SignButton