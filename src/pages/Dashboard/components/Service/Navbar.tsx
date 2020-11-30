import styled from "styled-components";
import {Button, Typography} from "@material-ui/core";
import React, {ReactNode} from "react";

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    max-width: 100%;
    button {
      font-size: 12px;
    }
`

export const Navbar = ({text, buttonText, buttonIcon}: { text: string, buttonText?: string, buttonIcon?: ReactNode }) => {
    return (
        <StyledNavbar>
            <Typography variant={"body2"} color="textPrimary">
                {text}
            </Typography>
            {
                buttonText &&
                <Button startIcon={buttonIcon}>
                    {buttonText}
                </Button>
            }
        </StyledNavbar>
    )
};
