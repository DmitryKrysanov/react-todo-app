import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './IsAuth.module.scss';
import { withRouter } from 'react-router-dom';

interface Props {
    logOut: () => void,
    resetTodos: () => void,

    location: any,
    history: any,
    match: any,
    staticContext: any

}

const IsAuth = (props: Props) => {

    const avatarPlaceholder = "https://placehold.it/80";

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const onLogOut = () => {
        props.logOut();
        props.resetTodos();
    }

    const onProfile = () => {
        props.history.push('profile')
    }

    return (
        <nav>
            <ul>
                <li>
                    <button className="btn" onClick={ handleMenuClick }>
                        <img className={ classes.avatar } src={ avatarPlaceholder } alt="user menu" />
                    </button>
                    <Menu
                        id="simple-menu"
                        anchorEl={ anchorEl }
                        keepMounted
                        open={ Boolean(anchorEl) }
                        onClose={ handleMenuClose }
                    >
                        <MenuItem onClick={ onProfile }>Profile</MenuItem>
                        <MenuItem onClick={ onLogOut }>Logout</MenuItem>
                    </Menu>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(IsAuth);
