import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export function SignInContainer() {

    const navigator = useNavigate();

    const handleButtonClick = useCallback(() => {
        navigator('/main', {replace: true})
    }, [navigator])

    return (
        <main>
            <h1>Sign In</h1>
            <div>
                <label>아이디</label>
                <br/>
                <input type="text" placeholder="아이디를 입력해주세요."/>
            </div>
            <div>
                <label>비밀번호</label>
                <br/>
                <input type="text" placeholder="비밀번호를 입력해주세요."/>
            </div>
            <div>
                <button type="button" onClick={handleButtonClick}>Sign In</button>
            </div>
        </main>
    )
}