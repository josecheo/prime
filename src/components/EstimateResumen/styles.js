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
        resumen: {
            width: '63%',
            paddingLeft: '20px',
            height: '83px',
            border: '1px solid #C4C4C4',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        containerText: {
            marginLeft: '20px'
        },
        pString: {
            margin: '0',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '10px',
            lineHeight: '14px',
            letterSpacing: '-0.02em',
            color: '#595959'
        },
        monto: {
            width: '30%',
            height: '83px',
            borderRadius: '4px',
            background: '#950499',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        montoSoles: {
            fontWeight: 'bold',
            margin:'0',
            fontSize: '24px',
            lineHeight: '33px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#FFFFFF'
        },
        precioEstimado: {
            margin: '0',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '10px',
            color: '#FFF',
            textAlign: 'center'
        },
        divider: {
            marginTop: '20px',
            width: '100%',
            height: '0px',
            left: '774px',
            top: '213px',
            border: '1px solid #C4C4C4'
        },
    })
);
