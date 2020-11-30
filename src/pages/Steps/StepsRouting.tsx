import React, {useContext, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {StepsContext} from "./index";
import Step from "./Step"
import styled from "styled-components";
import Pills from "./Pills";

import {useSelector} from "react-redux";
import {selectIsLogged} from "../../redux/userSlice"

const StyledStep = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--background_content);
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  
  img {
    width: 75%;
    max-width: 400px;
    height: 200px;
    object-fit: contain;
    object-position: center;
  }
`

function StepsRouting() {
    const navigate = useNavigate()
    const data = useContext(StepsContext)

    const [step, setStep] = useState(0)
    const {lk} = useParams() as {
        lk: "ad" | "owner"
    }


    return (
        <StyledStep>
            <Routes>
                <Route path={`:id`} element={<Step lk={lk}/>}/>
            </Routes>

            <Pills activeId={step} total={data[lk].length}/>
            {
                step + 1 < data[lk].length ?
                    <Button onClick={() => {
                        setStep(step + 1)
                        navigate(`${step + 1}`)
                    }} color='primary' variant='outlined'>
                        Продолжить
                    </Button>
                    :
                    <Button onClick={() => {
                        navigate(`/`)
                    }} color='primary' variant='contained'>
                        В кабинет
                    </Button>
            }
        </StyledStep>
    );
}

export default StepsRouting;
