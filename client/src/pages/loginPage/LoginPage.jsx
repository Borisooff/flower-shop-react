import { useState } from "react";

import RegisterForm from "../../components/registerForm/RegisterForm";
import LoginForm from "../../components/loginForm/LoginForm";
import Card from "../../components/UI/card/Card";

import './loginPage.scss';

const LoginPage = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="auth">
            {
                isRegister ?
                    <Card>
                        <div className="auth__title">Registration</div>
                        <RegisterForm />
                        <span className="auth__question"> Are registered?</span>
                        <span className="auth__link" onClick={()=> setIsRegister(false)}>Log in</span>
                    </Card> :
                    <Card>
                        <div className="auth__title">Authorization</div>
                        <LoginForm />
                        <span className="auth__question"> Are not registered?</span>
                        <span className="auth__link" onClick={()=> setIsRegister(true)}>Register</span>
                    </Card>
            }
        </div>
    );
}

export default LoginPage;