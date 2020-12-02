import React from 'react';
import {Group10px} from "../Service/Blocks";
import {GroupsContextProps} from "../../GroupsSelectContext";
import {Group} from "./Group";
import {Button} from "@material-ui/core";
import {Icon28CancelOutline} from "@vkontakte/icons";

function Groups(props: Partial<GroupsContextProps>) {
    const {
        groups,
        selectGroup,
        isSelected,
        deselectGroup
    } = props

    return (
        <Group10px>
            {
                groups && selectGroup && deselectGroup && isSelected && groups.map(el => (
                    <Group name={el.name}
                           description={`${el.subscribers} подписчиков`}
                           button={
                               isSelected(el.id) ?
                                   <Button
                                       className={"button"}
                                       onClick={() => deselectGroup(el.id)}>
                                       <Icon28CancelOutline/>
                                   </Button> :
                                   <Button className={"button"}
                                           color={"primary"}
                                           variant={"outlined"}
                                           onClick={() => selectGroup(el.id)}>+ {el.price} ₽</Button>
                           }
                           key={el.id}
                           id={el.id}
                    />
                ))
            }
        </Group10px>
    );
}

export default Groups;
