import React, { useState } from 'react';
import ReservModal from '../modals/ReservModal';
import Reserv from '../scss/Reserv.scss';
import { Button } from "react-bootstrap";

const ReservButton = () => {
    const [reservModal, reservModalOn] = useState(false);
    return (
        <>
            <ReservModal
                show={reservModal}
                onHide={() => reservModalOn(false)}
            />
            <Button onClick={() => reservModalOn(true)}>예약하기</Button>
        </>
    )
}

export default ReservButton