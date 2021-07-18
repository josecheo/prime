import React, { useState } from 'react';
import useStyles from "./styles";
import { ButtonType } from './styles'
import SobreIcons from '../CustomIcons/SobreIcons'
const ShippingType = ({handleTypeShipping}) => {
    const [activeType, setActiveType] = useState([
        {
            type: 'SOBRE',
            active: true
        },
        {
            type: 'CAJA',
            active: false
        },
    ])

    const handleActiveType = (typeString) => {
        const aux = [...activeType]
        aux.map((item, index) => {
            if (typeString === item.type) {
                aux[index].active = true
            } else {
                aux[index].active = false
            }
        })
        handleTypeShipping(typeString)
        setActiveType(aux)
      
    }


    const classes = useStyles();
    return (
        <>
            <h3 className={classes.tittleH3}>
                ¿QUÉ ENVÍAS?
            </h3>
            <div className={classes.buttonContainer}>

                {activeType.map((item) => (

                    <ButtonType
                        key={item.active}
                        theme={{ active: item.active }}
                        onClick={() => handleActiveType(item.type)}>
                        <SobreIcons type={item.type} color={item.active ? '#FFF' : '#595959'} />
                        <span style={{marginLeft:'10px'}}>
                        {item.type}
                        </span>
                       
                    </ButtonType>

                ))}


            </div>

        </>
    );
}

export default ShippingType;
