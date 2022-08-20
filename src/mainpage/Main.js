import '../css/lockerpage.css';
import { Link } from 'react-router-dom';
import '../css/Left.css';
import Right from './Right';
const Main = () => {
  return (
    <>
      <aside className='asideleft'>
        <img className='map' src={'1층A.png'}></img>
        <button className='locbtn' onClick={() => alert('로그인하세요')} >113호 앞</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>114호 앞</button><br />
        <button className='locbtn' onClick={() => alert('로그인하세요')}>214호 앞</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>219호 앞</button>
        <button className='locbtn' onClick={() => alert('로그인하세요')}>219호 옆</button>
      </aside>
      <div className="app-center">
        <div className='box'>
          <Link to="/">
            <main>
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} /><br />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"회색사물함.png"} onClick={() => alert('로그인하세요')} /><br />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
              <img className="locker" src={"파란사물함.png"} onClick={() => alert('로그인하세요')} />
            </main>
          </Link>
        </div>
      </div>
      <Right />
    </>
  )
}

export default Main;