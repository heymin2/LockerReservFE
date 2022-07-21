import './Login.scss';
import axios from 'axios';

const Login = ({ login }) => {
    return (<div>
        <div className="rect" />
        <div className="word">사물함 로그인</div>
        <form>
            <input className="num" placeholder='학번 ex)22121234' />
            <input type='text' className="name" placeholder='이름 ex)김컴공' />
            <input className="phoneNum" placeholder='전화번호 ex)01012345078' />
            <div className="PIC" />
            <button className="logbtn">로그인</button>
        </form>
    </div>
    );
};

export default Login;