import React from 'react';
import styled from "styled-components"

import ErrorImg from "../../../../img/Error.svg"
import {Typography} from "@material-ui/core";

const StyledError = styled.div`
    height: 100%;
    display: grid;
    gap: 1rem;
    align-content: center;
    justify-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 70%;
      max-width: 150px;
    }
    text-align: center;
`

function Error() {
    return (
        <StyledError>
            <img src={ErrorImg} alt=""/>
            <Typography>
                Произошла ошибка, попробуйте позже
            </Typography>
        </StyledError>
    );
}

export default Error;
