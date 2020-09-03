import React from 'react';
import classes from './IsNotAuth.module.scss';
import { NavLink } from 'react-router-dom';

const IsNotAuth = () => {
    return (
        <nav className={classes.auth_nav}>
            <li>
                <NavLink 
                    to="/auth/login" 
                    exact 
                    className='btn btn__secondary'
                    activeClassName={'nav-active'}
                >
                    Log In
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/auth/signup"
                    className='btn btn__secondary'
                >
                    Sign Up
                </NavLink>
            </li>
        </nav>
    )
}

export default IsNotAuth;