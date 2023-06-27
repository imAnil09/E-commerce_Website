import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import TextFieldComponent from '../Components/TextFieldComponent';
import { Button } from '@mui/material';
import background from '../images/woman-holding-various-shopping-bags-copy-space.jpg';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().min(8).required(),
    });

    const methods = useForm({
        defaultValues: { name: "", password: "" },
        resolver: yupResolver(schema),
    });

    const { register, handleSubmit, formState: { errors } } = methods;

    //   hooks
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [userName, setUserName] = useState();

    const navigateFunction = (data) => {
        const { name, password } = data;
        // console.log(name, email)
        if (name.length > 0 && password.length > 0) {
            // console.log('anilanil')
            navigate('/products')
        }
    }

    useEffect(()=>{
        dispatch({type:"USER_NAME", payload:{userName: userName}})
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(navigateFunction)} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
                    <TextFieldComponent name="name" placeholder="Enter Name" type="text" />
                    <br />
                    <ErrorMessage errors={errors} name='name' message='This is required!' />
                    <br />
                    <br />
                    <TextFieldComponent name={'password'} placeholder={'Enter password'} type={'password'} />
                    <br />
                    <ErrorMessage errors={errors} name='password' message='This is required!' />
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded" type="submit">LogIn</button>
                </form>
            </FormProvider>
        </div>
    )
}

export default LoginPage