import React, { useState } from 'react';
import useStyles from "./styles";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";


const InputCustom = ({ title, um, handleTypeCaja }) => {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className={classes.tittleH3}>
                {title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    onFocus={() => handleTypeCaja(title)}
                    InputProps={{
                        className: classes.inputCustom
                    }}
                    variant="outlined" />
                <h4 className={classes.h4}>
                    {um}
                </h4>
            </div>
        </div>
    );
}

export default InputCustom;
