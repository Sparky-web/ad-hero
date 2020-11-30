import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {StepsContext} from "./index";
import {Typography} from "@material-ui/core";


function Step(params: { lk: "ad" | "owner" }) {
    const data = useContext(StepsContext)
    const {id} = useParams() as {id: string}
    const {lk} = params
    const stepData = data[lk][+id]


    return (
        <>
            {stepData.image}
            <Typography variant='h4' color="textPrimary">
                {stepData.header}
            </Typography>
            <Typography color="textPrimary">
                {stepData.description}
            </Typography>
        </>
    )
}

export default Step
