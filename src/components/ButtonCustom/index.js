import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#950499'),
        backgroundColor: '#950499',
        width: '230px',
        height: '56px',
        "&:hover": {
            backgroundColor: purple[700]
        }
    }
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function ButtonCustom({ title, handleSend,isDisable }) {
    const classes = useStyles();

    return (
        <>
            <ColorButton
                onClick={() => handleSend()}
                variant="contained"
                disabled={isDisable}
                color="primary"
                className={classes.margin}
            >
                {title}
            </ColorButton>
        </>
    );
}
