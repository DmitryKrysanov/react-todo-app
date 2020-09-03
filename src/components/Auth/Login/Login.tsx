import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import classes from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../../redux/actions/authActions';

interface ConnectedProps {
    auth: any;
}

interface IFormInput {
    email: string;
    password: string;
}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const Login = (props: ComponentProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, errors } = useForm<IFormInput>();

    const handleEmailChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmit = (data: IFormInput) => {
        props.logIn(data.email, data.password)
    }

    return (
        <div className={classes.login}>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.input}>
                    <input
                        name="email"
                        className='input'
                        id="email"
                        placeholder="Email"
                        type="text"
                        onChange={handleEmailChange}
                        value={email}
                        ref={register({ required: true })}
                    />
                    <small className="error_message">{errors.email && "Email is required"}</small>
                </div>
                <div className={classes.input}>
                    <input
                        name="password"
                        className='input'
                        id="password"
                        placeholder="Password"
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                        ref={register({ required: true })}
                    />
                    <small className="error_message">{errors.password && "Password is required"}</small>
                </div>
                <button
                    className='btn btn__primary'
                    type="submit"
                >
                    Log In
                </button>
                <p className="error_message">{props.auth.error}</p>
            </form>
            {props.auth.uid ? <Redirect to='/' /> : null}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    logIn: (email: string, password: string) => {
        return dispatch(logIn(email, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
