import { useState } from "react";
import Popup from './LoginModal';

export default function FullPageLanding() {
    const [popup, setPopup] = useState(true);

    return (
        <>
            {popup ? <Popup onClose={setPopup} /> : null}
        </>
    )
}