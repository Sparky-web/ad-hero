import React from "react";
import {Button} from "@material-ui/core";
import {Icon24Filter} from "@vkontakte/icons";


export const Filters = ({action}: { action: Function }) => {
    return (
        <Button color={"primary"}
                onClick={() => action()}
                startIcon={<Icon24Filter/>}>
            Фильтры
        </Button>
    )
}



