import { createStyles, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) =>
    createStyles({
        tittleH3: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '10px',
            margin: '0px'
        },
        formControl: {
            width: '30%',
        },
        inputCustom: {
            height: '40px',
            width:'110px'
        },
        h4: {
            marginLeft:'10px',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '-0.02em',
            color: ' #595959'
        }
    })
);
