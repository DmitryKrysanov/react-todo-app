import React from 'react';
import classes from './Loader.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader: React.FC = () => {
    return (

        <div className={classes.loader} role="status">
            <CircularProgress color="primary" />
            <span>Loading...</span>
        </div>
    )
}