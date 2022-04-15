import React from 'react';
import classes from './MyInp.module.css';

const MyInput = (props) => {
    return (
        <input className={classes.inputCustom} {...props}/>
    );
};

export default MyInput;