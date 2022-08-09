import React, { useState } from 'react';
import CancelModal from '../modals/CancelModal';
import { Button } from "react-bootstrap";

const CancelButton = () => {
    const [cancelModal, cancelModalOn] = useState(false);
    return (
        <>
            <CancelModal
                show={cancelModal}
                onHide={() => cancelModalOn(false)}
            />
            <Button onClick={() => cancelModalOn(true)}>취소하기</Button>
        </>
    )
}

export default CancelButton