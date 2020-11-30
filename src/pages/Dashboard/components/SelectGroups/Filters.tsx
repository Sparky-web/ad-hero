import React, {ChangeEvent, useEffect, useState} from 'react';
import {GroupsContextProps} from "../../GroupsSelectContext";
import {Group10px, Group20px} from "../Service/Blocks";
import {Button, Switch, TextField, Typography} from "@material-ui/core";
import TwoColumns from "../Service/TwoColumns";

interface Range {
    min: number,
    max: number
}

const InputGroup = (props: {
    label: string,
    handler: Function,
    data: Range
}) => {
    return (
        <Group10px>
            <Typography color={"textPrimary"} variant={"h5"}>{props.label}</Typography>
            <TwoColumns>
                <TextField value={props.data.min}
                           onChange={(e) => props.handler(e, "min")} type="number"
                           label={"От"} color={"secondary"}/>
                <TextField value={props.data.max} onChange={(e) => props.handler(e, "max")} type="number"
                           label={"До"} color={"secondary"}/>
            </TwoColumns>
        </Group10px>
    )
}

function Filters({updateFilters, filters, close}: Partial<GroupsContextProps>) {

    const [subsRange, setSubsRange] = useState<Range>({
        min: 0,
        max: 0
    })
    const handleSubsChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: "min" | "max") => {
        setSubsRange({...subsRange, [type]: e.target.value})
    }

    const [viewsRange, setViewsRange] = useState<Range>({
        min: 0,
        max: 0
    })
    const handleViewsChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        type: "min" | "max"
    ) => {
        setViewsRange({...subsRange, [type]: e.target.value})
    }

    const [priceRange, setPriceRange] = useState<Range>({
        min: 0,
        max: 0
    })
    const handlePriceChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        type: "min" | "max"
    ) => {
        setPriceRange({...subsRange, [type]: e.target.value})
    }

    const [withAutoPosting, setWithAutoPosting] = useState(false)

    useEffect(() => {
        if (filters) {
            setSubsRange({
                min: filters.subscribers.min,
                max: filters.subscribers.max,
            })
            setPriceRange({
                min: filters.price.min,
                max: filters.price.max,
            })
            setViewsRange({
                min: filters.viewsPerPost.min,
                max: filters.viewsPerPost.max,
            })
            setWithAutoPosting(
                filters.withAutoPosting
            )
        }
    }, [filters])

    const handleSubmit = () => {
        if(updateFilters) {
            updateFilters({
                subscribers: subsRange,
                viewsPerPost: viewsRange,
                price: priceRange,
                withAutoPosting: withAutoPosting
            })
            close()
        }
    }

    return (
        <Group20px>
            <InputGroup label={"Количество подписчиков"}
                        handler={handleSubsChange} data={subsRange} />
            <InputGroup label={"Просмотры на записях (среднее)"}
                        handler={handleViewsChange} data={viewsRange} />
            <InputGroup label={"Цена (в рублях)"}
                        handler={handlePriceChange} data={priceRange} />
            <TwoColumns>
                <Typography variant={"h5"} color={"textPrimary"}>Только группы с автопостингом</Typography>
                <div style={{marginLeft: "auto"}}>
                    <Switch checked={withAutoPosting} onChange={() => setWithAutoPosting(!withAutoPosting)}/>
                </div>
            </TwoColumns>
            <Button color={"primary"}
                    variant={"contained"}
                    disableElevation
                    onClick={handleSubmit}
            >Применить</Button>
        </Group20px>
    );
}

export default Filters;
