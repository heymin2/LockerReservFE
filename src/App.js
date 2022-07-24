import { useState } from 'react';
import Modal from './Modal';

function App() {
  let [modal, setModal] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setModal(!modal)}>로그인</button>
      {modal === true ? <Modal /> : null}
    </div>

  );
};

export default App;
