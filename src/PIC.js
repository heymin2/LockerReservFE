function PIC() {
    return (
        <div className="PIC">
            <span style={{ color: 'blue' }}>* 아래 약관을 읽은 후 이용가능합니다.</span>
            <div className="flex-center">
                <textarea id="privacy_scroll" style={{ width: '98%', height: '5rem' }}>
                    [영남대학교 컴퓨터공학과 학생회] ('http://localhost:3000/'이하 '영남대학교 컴퓨터공학과 사물함')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

                    ○ 이 개인정보처리방침은 2023년 3월 2부터 적용됩니다.
                </textarea>
            </div>
            <form>
                <p ><b>위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부시에는 회원가입이 제한 됩니다.</b></p>
                <div style={{ textAlign: 'center' }}><b>개인정보 취급방침에 동의하십니까?</b>
                    <div className="radio-wrapper" style={{ textAlign: 'center' }}>
                        <label id="privacy-text1">
                            <input type="radio" id="agree" name="privacy" value="agree" /> 동의함
                        </label>
                        <label id="privacy-text2">
                            <input type="radio" id="disagree" name="privacy" value="disagree" checked="checked" /> 동의안함
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};



export default PIC