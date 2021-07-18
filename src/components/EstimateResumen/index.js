import React, { useState } from 'react';
import useStyles from "./styles";
import CajaSola from '../CustomIcons/CajaSola'

const EstimateResumen = () => {

    const classes = useStyles();
    return (
        <>

            <h2 className={classes.title}>
                1. ESTIMAR ENVÍO
            </h2>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={classes.resumen}>
                    <CajaSola />
                    <div className={classes.containerText}>
                        <p className={classes.pString}>RECOJO: LIMA / LIMA / SAN MIGUEL</p>
                        <p className={classes.pString}>ENTREGA: LIMA / LIMA / LA MOLINA</p>
                        <p className={classes.pString}>MEDIDAS: 40 AN. x 50 LA. x 40 AL.</p>
                    </div>
                </div>
                <div className={classes.monto}>
                    <div>
                        <h2 className={classes.montoSoles}>
                            S/. 35.00
                        </h2>
                        <p className={classes.precioEstimado}>PRECIO ESTIMADO</p>
                    </div>
                </div>
            </div>
            <div className={classes.divider} />

        </>
    );
}

export default EstimateResumen;
