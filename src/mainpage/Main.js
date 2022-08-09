import React from 'react';
import '../css/lockerpage.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='box'>
      <Link to="/">
        <main>

          <img className="locker" src={"빨간사물함.png"} />
          <img className="locker" src={"파란사물함.png"} />
          <img className="locker" src={"회색사물함.png"} />
          <img className="locker" src={"회색사물함.png"} />
        </main>
      </Link>
    </div>
  )
}

export default Main;