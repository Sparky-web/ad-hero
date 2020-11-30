import React from 'react';
import {Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


function ChooseLk() {
    return (
        <div className={"choose-lk slideAnimate"}>
            <Typography variant="h2">
                Выберете
            </Typography>
            <Link to={"ad/0"}>
                <Button variant="contained" color="primary">Я рекламодатель</Button>
            </Link>
            <Link to={"owner/0"}>
                <Button variant="outlined" color="primary">Я владелец группы</Button>
            </Link>
        </div>
    );
}

export default ChooseLk;
