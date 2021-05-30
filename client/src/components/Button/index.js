import "react"


import React, {  useState } from 'react';
import classes from './Button.module.css';

const AccountButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    return (
        <button className={btnClasses} onClick={props.onClick}>
             <span>Login</span>
            </button>
    )
}

export default AccountButton