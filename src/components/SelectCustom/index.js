import React, { useState } from 'react';
import useStyles from "./styles";
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const SelectCustom = ({ dataName, data, title, handleSelectChange, dataValue }) => {
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <h3 className={classes.tittleH3}>{title}</h3>
            <Select
                name={dataName}
                className={classes.select}
                value={dataValue}
                onChange={handleSelectChange}
            >
                {data.map((item) => (
                    <MenuItem value={item.id}>{item.label}</MenuItem>
                ))}

            </Select>
        </FormControl>
    );
}

export default SelectCustom;
