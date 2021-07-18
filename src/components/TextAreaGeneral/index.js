import React from 'react';
import useStyles from "./styles";
import { TextField } from "@material-ui/core";


const TextAreaGeneral = ({ title, width,height }) => {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: width || '100%' }}>
            <h3 className={classes.tittleH3}>
                {title}
            </h3>

            <TextField
                multiline
                row={4}
                maxRows={4}
                InputProps={{
                    className: classes.inputCustom
                }}
                variant="outlined" />

        </div>
    );
}

export default TextAreaGeneral;
