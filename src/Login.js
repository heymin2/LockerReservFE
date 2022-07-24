import './Login.scss';
import axios from 'axios';

const Login = ({ login }) => {
    return (<div>
        <div className="rect" />
        <p className="word">사물함 로그인</p>
        <form>
            <input type="number" className="num" placeholder='학번 ex)22121234' />
            <input type="text" className="name" placeholder='이름 ex)김컴공' />
            <input type="tel" className="phoneNum" placeholder='전화번호 ex)01012345078' />
            <div className="PIC" />
            <button className="logbtn">로그인</button>
        </form>
    </div>
    );
};

export default Login;