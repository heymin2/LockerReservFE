import { useState } from 'react';
import Modal from './Modal';
import Login from './Login.js';
import PIC from './PIC';
function App() {
  let [modal, setModal] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setModal(!modal)}>로그인</button>
      {modal === true ? <Modal /> : null}
      <Login />
    </div>
  );
};

export default App;
