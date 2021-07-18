import { createStyles, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) =>
    createStyles({
        tittleH3: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '10px',
            lineHeight: '14px',
            letterSpacing: '-0.02em'
        },
        formControl: {
            width: '30%',
        },
        select: {
            height: '40px'
        }
    })
);
