import React from 'react';
import useStyles from "./styles";
import InputGeneral from '../InputGeneral'
import TextAreaGeneral from '../TextAreaGeneral'

const DatosEnvio = () => {
    const classes = useStyles();
    return (
        <>
            <h2 className={classes.title}>
                2. DATOS DEL ENVÍO
            </h2>
            <br />
            <InputGeneral
                title='¿CÚAL ES TU NOMBRE?'
            />
            <InputGeneral
                title='¿CÚAL ES TU DIRECCIÓN EXACTA?'
            />

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <InputGeneral
                    width={'30%'}
                    title='¿CÚAL ES TU NÚMERO DE DNI?'
                />
                <InputGeneral
                    width={'68%'}
                    title='¿CÚAL ES TU CORREO?'
                />
            </div>
            <InputGeneral
                title='¿CÚAL ES EL NOMBRE DEL DESTINATARIO?'
            />
            <InputGeneral
                title='¿CÚAL ES LA DIRECCIÓN EXACTA DEL DESTINATARIO?'
            />

            <InputGeneral
                width={'30%'}
                title='¿CÚAL ES EL TELÉFONO DEL DESTINATARIO?'
            />
            <TextAreaGeneral
                width={'100%'}
                title='¿CUÉNTANOS DETALLES DEL PAQUETE QUE ENVIARÁS?'
            />
        </>
    );
}

export default DatosEnvio;
