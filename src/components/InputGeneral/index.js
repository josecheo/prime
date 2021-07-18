import React from 'react';
import useStyles from "./styles";
import { TextField } from "@material-ui/core";


const InputGeneral = ({ title,width }) => {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: width || '100%'}}>
            <h3 className={classes.tittleH3}>
                {title}
            </h3>
                <TextField
                    InputProps={{
                        className: classes.inputCustom
                    }}
                    variant="outlined" />
           
        </div>
    );
}

export default InputGeneral;
