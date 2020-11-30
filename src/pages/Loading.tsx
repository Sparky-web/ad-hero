import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../redux/userSlice";

function Loading() {
    const navigate = useNavigate()
    const isLogged = useSelector(selectIsLogged)

    useEffect(() => {
        setTimeout(() => {
            if(isLogged) {
                navigate("/dashboard")
            } else {
                navigate("/steps")
            }
        }, 1000)
    }, [])

    return (
        <div className={"loading-screen"}>
            <Typography variant={"h1"} color={"primary"}
                        className="loading-screen__logo">
                <div/>
                AdHero
            </Typography>
        </div>
    )
}

export default Loading;
