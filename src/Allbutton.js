import SignButton from './button/SignButton';
import ReservButton from './button/ReservButton';
import CancelButtzon from './button/CancelButton';
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