import React from 'react';
import classes from './MyBtn.module.css';

const MyBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnCustom}>
            {children}
        </button>
    );
};

export default MyBtn;