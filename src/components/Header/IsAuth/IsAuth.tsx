import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './IsAuth.module.scss';

interface Props {
    logOut: () => void
    resetTodos: () => void
}

const IsAuth = (props: Props) => {

    const avatarPlaceholder = "https://placehold.it/80";

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogOut = () => {
        props.logOut();
        props.resetTodos();
    }

    return (
        <nav>
            <ul>
                <li>
                    <button className="btn" onClick={handleClick}>
                        <img className={ classes.avatar } src={ avatarPlaceholder } alt="user menu" />
                    </button>
                    <Menu
                        id="simple-menu"
                        anchorEl={ anchorEl }
                        keepMounted
                        open={ Boolean(anchorEl) }
                        onClose={ handleClose }
                    >
                        <MenuItem onClick={ handleClose }>Profile</MenuItem>
                        <MenuItem onClick={ onLogOut }>Logout</MenuItem>
                    </Menu>
                </li>
            </ul>
        </nav>
    )
}

export default IsAuth;
