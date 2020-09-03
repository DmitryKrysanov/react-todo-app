import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import classes from './Signup.module.scss';
import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';

interface INewUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

interface ConnectionProps {
    auth: any
}

type ComponentProps = ConnectionProps & ReturnType<typeof mapDispatchToProps>

const Signup = (props: ComponentProps): JSX.Element => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, errors } = useForm<INewUser>();

    const handleFirstNameChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(event.currentTarget.value)
    }

    const handleLastNameChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setLastName(event.currentTarget.value)
    }

    const handleEmailChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmit = (data: INewUser) => {
        props.signUp(data)
    }

        return (
            <div className={classes.signup}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.input}>
                        <input 
                            name="firstName"
                            className='input'
                            type="text" 
                            placeholder="First Name" 
                            onChange={handleFirstNameChange}
                            value={ firstName }
                            ref={register({
                                required: 'First Name is required',
                                minLength: {
                                  value: 2,
                                  message: 'Min length is 2',
                                },
                              })}
                        />
                        <small className="error_message">{errors.firstName && errors.firstName.message}</small>
                    </div>
                    <div className={classes.input}>
                        <input 
                            name="lastName"
                            className='input'
                            type="text" 
                            placeholder="Last Name" 
                            onChange={handleLastNameChange} 
                            value={ lastName }
                            ref={register({
                                required: 'Last Name is required',
                                minLength: {
                                  value: 2,
                                  message: 'Min length is 2',
                                },
                              })}
                        />
                        <small className="error_message">{errors.lastName && errors.lastName.message}</small>
                    </div>
                    <div className={classes.input}>
                        <input 
                            name="email"
                            className='input'
                            type="text" 
                            placeholder="Email" 
                            onChange={handleEmailChange} 
                            value={ email }
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: 'Invalid email address',
                                },
                              })}
                            />
                        <small className="error_message">{errors.email && errors.email.message}</small>
                    </div>
                    <div className={classes.input}>
                        <input 
                            name="password"
                            className='input'
                            type="password" 
                            placeholder="Password" 
                            onChange={handlePasswordChange}
                            value={ password }
                            ref={register({
                                required: 'Password is required',
                                pattern: {
                                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                                  message: 'Invalid password',
                                },
                              })}
                            />
                        <small className="error_message">{errors.password && errors.password.message}</small>
                    </div>
                    <button 
                        className='btn btn__primary'
                        type="submit">
                            Sign Up
                    </button>
                    <p className="error_message">{ props.auth.error }</p>
                </form>
                {props.auth.uid ? <Redirect to='/' /> : null }
            </div>
        );
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (newUser: INewUser) => {
        dispatch(signUp(newUser))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);