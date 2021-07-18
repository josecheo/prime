import React, { useState } from 'react';
import useStyles from "./styles";
import EstimateShipping from '../../components/EstimateShipping'
import { Img } from "react-image";
import imgFondo from '../../assets/img/imgFondo.png'
import LogoPrime from '../../components/CustomIcons/LogoPrime'
import Eslogan from '../../components/CustomIcons/Eslogan'


const QuoteShipping = () => {
    const [firstStep, setFirstStep] = useState(true)
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {/* IMAGEN */}
            <div className={classes.imgContainer}>
                <Img
                    src={imgFondo}
                    alt="fondo"
                    className={classes.photo}
                />
                <div className={classes.logo}>
                    <LogoPrime />
                </div>

                <div className={classes.eslogan}>
                <Eslogan />
                </div>
               

            </div>
            {/* FORMULARIO */}
            <div className={classes.formContainer}>
                <h1 className={classes.title}>
                    COTIZADOR DE ENVÍOS
                </h1>
                <p className={classes.p}>
                    Con el cotizador Primer puedes calcular el costo de tus envíos nacionales. Las tarifas son preferenciales y su valor más cercano al costo real entre más especifica sea la información que ingreses al formulario.
                </p>

                {/* VALIDAR PRIMER PASO */}
                {firstStep && (
                    <EstimateShipping />
                )}

            </div>
        </div>
    );
}

export default QuoteShipping;
