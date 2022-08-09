import SignButton from './layouts/SignButton';
import ReservButton from './layouts/ReservButton';
import CancelButtzon from './layouts/CancelButton';
import Main from './Main';
import Test from './test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Allbutton() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Allbutton;