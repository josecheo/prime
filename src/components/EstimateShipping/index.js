import React, { useState } from 'react';
import useStyles from "./styles";
import SelectCustom from '../SelectCustom'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import CajaLados from '../CustomIcons/CajaLados'
import ShippingType from '../ShippingType'
import InputCustom from '../InputCustom'
import ButtonCustom from '../ButtonCustom'
import EstimateResumen from '../EstimateResumen'
import DatosEnvio from '../DatosEnvio'

const EstimateShipping = () => {
    const [value, setValue] = React.useState('SIN RECOJO');
    const [type, setType] = React.useState('SOBRE');
    const [typeCaja, setTypeCaja] = React.useState('ANCHO');
    const [form, setForm] = useState({})
    const [isDisabe,setIsDisabe] = useState(true)
    const [stimate, setStimate] = useState(false)
    const [dataSelect, setDataSelect] = useState({
        departamento: [],
        provincia: [],
        distrito: []
    })

    const handleSelectChange = (event) => {
        const { name, value } = event.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }


    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleTypeShipping = (type) => {
        setType(type)
    }

    const handleTypeCaja = (ty) => {
        setTypeCaja(ty)
    }

    const handleSend = () => {
        setStimate(!stimate)
    }

    const classes = useStyles();
    return (
        <>
            {stimate ? (
                <>
                    <EstimateResumen />
                </>
            ) : (
                <>
                    <h2 className={classes.title}>
                        1. ESTIMAR ENVÍO
                    </h2>
                    <div className={classes.llevamosContainer}>
                        <h3 className={classes.tittleH3} styles={{ width: '30%' }}>
                            ¿A DÓNDE LO LLEVAMOS?
                        </h3>
                        <div className={classes.divider} />
                    </div>

                    <div className={classes.selectContainer}>
                        <SelectCustom
                            dataValue={form.departamento}
                            handleSelectChange={handleSelectChange}
                            dataName='departamento'
                            title='DEPARTAMENTO'
                            data={dataSelect.departamento}
                        />
                        <SelectCustom
                            dataValue={form.provincia}
                            dataName='provincia'
                            handleSelectChange={handleSelectChange}
                            title='PROVINCIA'
                            data={dataSelect.provincia}
                        />
                        <SelectCustom
                            dataValue={form.distrito}
                            dataName='distrito'
                            handleSelectChange={handleSelectChange}
                            title='DISTRITO'
                            data={dataSelect.distrito}
                        />
                    </div>
                    <br />
                    <div className={classes.dividerFull} />
                    <br />
                    <h3 className={classes.tittleH3}>
                        ¿LO LLEVAS AL ALMACEN DE PRIME O LO RECOGEMOS DEL TUYO?
                    </h3>

                    <RadioGroup value={value} onChange={handleRadioChange}>
                        <div className={classes.radioContainer}>
                            <FormControlLabel value="SIN RECOJO" control={<Radio color="#000" />} label="SIN RECOJO" />
                            <FormControlLabel value="CON RECOJO" control={<Radio color="#000" />} label="CON RECOJO" />
                        </div>
                    </RadioGroup>
                    {/* validar que se CON RECOJO */}
                    {value === 'CON RECOJO' && (
                        <>
                            <div className={classes.llevamosContainer}>
                                <h3 className={classes.tittleH3} styles={{ width: '30%' }}>
                                    ¿DE DONDE LO RECOGEMOS?
                                </h3>
                                <div className={classes.divider} />
                            </div>

                            <div className={classes.selectContainer}>
                                <SelectCustom
                                    dataValue={form.departamento}
                                    handleSelectChange={handleSelectChange}
                                    dataName='departamento'
                                    title='DEPARTAMENTO'
                                    data={dataSelect.departamento}
                                />
                                <SelectCustom
                                    dataValue={form.provincia}
                                    dataName='provincia'
                                    handleSelectChange={handleSelectChange}
                                    title='PROVINCIA'
                                    data={dataSelect.provincia}
                                />
                                <SelectCustom
                                    dataValue={form.distrito}
                                    dataName='distrito'
                                    handleSelectChange={handleSelectChange}
                                    title='DISTRITO'
                                    data={dataSelect.distrito}
                                />
                            </div>
                        </>
                    )}
                    <br />
                    <ShippingType handleTypeShipping={handleTypeShipping} />
                    <br />
                    <div>
                        {type === 'SOBRE' && (
                            <InputCustom
                                handleTypeCaja={handleTypeCaja}
                                title='¿CUÁNTO PESA?'
                                um='KG.'
                            />
                        )}
                        {type === 'CAJA' && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '320px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <InputCustom
                                            title='¿CUÁNTO PESA?'
                                            um='KG.'
                                            handleTypeCaja={handleTypeCaja}
                                        />
                                        <InputCustom
                                            title='ANCHO'
                                            um='CM.'
                                            handleTypeCaja={handleTypeCaja}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <InputCustom
                                            title='LARGO'
                                            handleTypeCaja={handleTypeCaja}
                                            um='CM.'
                                        />
                                        <InputCustom
                                            title='ALTO'
                                            um='CM.'
                                            handleTypeCaja={handleTypeCaja}
                                        />
                                    </div>
                                </div>
                                <CajaLados
                                    type={typeCaja}
                                />
                            </div>
                        )}
                    </div>
                    <br />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <ButtonCustom
                            handleSend={handleSend}
                            title='ESTIMAR'
                        />
                    </div>
                </>
            )}
            <br />
            <div className={classes.dividerFull} />
            <DatosEnvio />
            <br />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <ButtonCustom
                    isDisable={isDisabe}
                    handleSend={handleSend}
                    title='PROGRAMAR ENVÍO'
                />
            </div>
        </>
    );
}

export default EstimateShipping;
