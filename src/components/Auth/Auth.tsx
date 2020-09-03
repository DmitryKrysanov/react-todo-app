import React from 'react';
import classes from './Auth.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import AuthBackground from './../../assets/images/auth_background.png'
import Header from '../Header/Header';

const Auth = (): JSX.Element => {
    return (
        <div className={classes.auth}>
            <Header />
            <div className={classes.auth_container}>
                <div className={classes.auth_image}>
                    <img src={AuthBackground} alt="background"/>
                </div>
                <div className={classes.auth_content}>
                    <div className={classes.content_inner}>
                        <Switch>
                            <Route path="/auth/login" component={Login} />
                            <Route exact path="/auth/signup" component={Signup} />
                        </Switch>
                        <Redirect to="/auth/login"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
