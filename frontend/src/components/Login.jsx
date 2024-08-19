// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const loginSubmit = async () => {
        if (id === '' || pw === '') {
            alert('아이디 또는 비밀번호를 입력해주시기 바랍니다');
            return
        } else {
            try {
                const res = await fetch('/api/loginCheck', {
                    method: 'POST',
                    body: JSON.stringify({userID: id, userPW: pw}),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();
                
                alert(data);
                if (res.status === 200) {
                    navigate('/main');
                } else {
                    setId('');
                    setPw('');
                    return;
                }
            } catch(err) {
                console.log(err);
            }
        }
    }

    const moveSignUP = () => {
        navigate('/signup');
    }

    return (
        <>
            <h1>로그인</h1>
            <div>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required/>
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required/>
                <button type='submit' onClick={loginSubmit}>로그인</button>
            </div>
            <button onClick={moveSignUP}>회원가입</button>
        </>
    );
};

export default Login;