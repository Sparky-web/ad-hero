import React, {useEffect, useState} from 'react';
import {GroupsContextProps} from "../../GroupsSelectContext";
import {Group10px, Group20px} from "../Service/Blocks";
import {Button, MenuItem, Select, Typography} from "@material-ui/core";
import {SortBy, SortDirection} from "../../../../../shared/types/Sort";


function Sort({updateSort, sort, close}: Partial<GroupsContextProps>) {
    const [sortBy, setSortBy] = useState<SortBy>("subscribers")
    const [direction, setDirection] = useState<SortDirection>("increment")

    const handleSortParam = (e: React.ChangeEvent<{ value: any }>) => {
        setSortBy(e.target.value as SortBy)
    }

    const handleSortDirection = (e: React.ChangeEvent<{ value: any }>) => {
        setDirection(e.target.value as SortDirection)
    }

    const handleSubmit = () => {
        if(updateSort) {
            updateSort(sortBy, direction)
        }
        close()
    }

    useEffect(() => {
        if (sort) {
            setDirection(sort.type)
            setSortBy(sort.sortBy)
        }
    }, [sort])

    return (
        <Group20px>
            <Group10px>
                <Typography variant={"h5"}>Параметр сортировки</Typography>
                <Select value={sortBy} onChange={handleSortParam}>
                    <MenuItem value={"subscribers"}>Кол-во подписчиков</MenuItem>
                    <MenuItem value={"viewsPerPost"}>Кол-во просмотров (среднее)</MenuItem>
                    <MenuItem value={"price"}>Цена за пост</MenuItem>
                </Select>
            </Group10px>
            <Group10px>
                <Typography variant={"h5"}>Тип сортировки</Typography>
                <Select value={direction} onChange={handleSortDirection}>
                    <MenuItem value={"increment"}>По возрастанию</MenuItem>
                    <MenuItem value={"decrement"}>По убыванию</MenuItem>
                </Select>
            </Group10px>
            <Button color={"primary"}
                    variant={"contained"}
                    disableElevation
                    onClick={handleSubmit}
            >Применить</Button>
        </Group20px>
    );
}

export default Sort;
