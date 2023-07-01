import { useState } from "react";

import RegisterForm from "../../components/registerForm/RegisterForm";
import LoginForm from "../../components/loginForm/LoginForm";

const LoginPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    
    return (
        <div>
            {
                isRegister ?
                    <>
                        <RegisterForm />
                        <span> Are registered?</span>
                        <span onClick={()=> setIsRegister(false)}>Log in</span>
                    </> :
                    <>
                        <LoginForm />
                        <span> Are not registered?</span>
                        <span onClick={()=> setIsRegister(true)}>Register</span>
                    </>
            }
        </div>
    );
}

export default LoginPage;