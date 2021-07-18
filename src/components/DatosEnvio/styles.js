import { createStyles, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) =>
    createStyles({

        title: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '25px',
            letterSpacing: '-0.02em',
            color: '#000000'
        },
        llevamosContainer: {
            display: 'flex',
            width:'100%',
            alignItems: 'center'
        },
        tittleH3: {
          
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '10px',
            lineHeight: '14px',
            letterSpacing: '-0.02em'
        },
        divider: {
            marginLeft: '40px',
            width: '100%',
            height: '0px',
            left: '774px',
            top: '213px',
            border: '1px solid #C4C4C4'
        },
        selectContainer: {
            display: 'flex',
            width:'100%',
            justifyContent: 'space-between',
        },
        dividerFull: {
            width: '100%',
            height: '0px',
            border: '1px solid #C4C4C4'
        },
        radioContainer : {
            display:'flex',
            
            width:'100%',
        }
    })
);
