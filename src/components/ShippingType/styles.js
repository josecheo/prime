import { createStyles, makeStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";

export default makeStyles((theme) =>
    createStyles({
        tittleH3: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '10px',
            lineHeight: '14px',
            letterSpacing: '-0.02em'
        },
        buttonContainer: {
            display: 'flex',
            width: '320px',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    })
);

export const ButtonType = styled.div`
    display: flex;
    width: 170px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-right: 18px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid gray;
  ${(props) =>
        props.theme.active &&
        css`
    background: #000;
    color: #FFF;
    `}
`;