import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';

import { login } from '../../http/userApi';
import { MAIN_ROUTE } from "../../utils/consts";
import { userChanged, userAuthed } from "../../pages/loginPage/userSlice";
import ModButton from "../UI/button/ModButton";

const LoginForm = () => {
    const [submitError, setSubmitError] = useState();
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
        try {
            const email = data.email;
            const password = data.password;
            const user = await login(email, password)
            dispatch(userAuthed(true))
            dispatch(userChanged(user))
            navigate(MAIN_ROUTE)
        } catch (e) {
            setSubmitError(e.response.data.message)
        }
    }


    return ( 
            <form  onSubmit={handleSubmit(onSubmit)}>
            <input
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
                })}
                type='password'
                tabIndex='2'
                placeholder='password...' />
            <div>{errors?.password && <p>{errors?.password?.message || 'error'}</p>}</div>
            <div>{submitError}</div>
            <ModButton primary={true} type='submit'>
                Войти
            </ModButton>
        </form>
     );
}

export default LoginForm;