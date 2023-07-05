import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";

import ModButton from "../UI/button/ModButton";
import { userAuthed, userChanged } from "../../pages/loginPage/userSlice";
import { MAIN_ROUTE } from "../../utils/consts";
import { registration } from "../../http/userApi";

const RegisterForm = () => {
    const [submitError, setSubmitError] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const onSubmit = async (data) => {
        if (data.password === data.repeatPassword) {
            try {
                const email = data.email;
                const password = data.password;
                const user = await registration(email, password)
                dispatch(userAuthed(true))
                dispatch(userChanged(user))
                navigate(MAIN_ROUTE)
            } catch (e) {
                setSubmitError(e.response.data.message)
            }
        } else {
            setSubmitError("Passwords don't match")
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('email', {
                    required: 'field must be filled in',
                    pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "incorrect email"
                    }
                })}
                tabIndex='1'
                placeholder='email...' />
            <div>{errors?.email && <p>{errors?.email?.message || 'error'}</p>}</div>
            <input
                {...register('password', {
                    required: 'field must be filled in',
                    pattern: {
                        value: /(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                        message: 'password must be at least 6 characters long, contain digits, special characters, lowercase and uppercase Latin letters'
                    }
                })}
                type='password'
                tabIndex='2'
                placeholder='password...' />
                <div>{errors?.password && <p>{errors?.password?.message || 'error'}</p>}</div>
            <input
                {...register('repeatPassword', {
                    required: 'field must be filled in'
                })}
                type='password'
                tabIndex='3'
                placeholder='repeat password...' />
            <div>{errors?.repeatPassword && <p>{errors?.repeatPassword?.message || 'error'}</p>}</div>
            <div>{submitError}</div>
            <ModButton>
                Register
            </ModButton>
        </form>
    );
}

export default RegisterForm;