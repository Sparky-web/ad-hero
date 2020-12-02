import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {FiltersInterface} from "../../../shared/types/Filters";
import {GroupInterface} from "../../../shared/types/Groups";
import {SortBy, SortDirection, SortInterface} from "../../../shared/types/Sort";
import {q, client} from "../../context/db";

export type GroupsContextProps = {
    groups: GroupInterface[],
    selectGroup: Function,
    isSelected: Function,
    deselectGroup: Function,
    updateFilters: Function,
    updateSort: Function,
    filters: FiltersInterface,
    sort: SortInterface

    [key: string]: any;
};

export const GroupsSelectContext = createContext<Partial<GroupsContextProps>>({})

export function GroupsSelectProvider(props: { children: ReactNode }) {


    const [groups, setGroups] = useState<GroupInterface[]>([
        {
            name: "4ch",
            subscribers: 3000,
            price: 200,
            id: 123
        }
    ])
    const [selectedGroups, setSelectedGroups] = useState<GroupInterface[]>([])
    const [filters, setFilters] = useState<FiltersInterface>({
        price: {
            min: 0,
            max: 900
        },
        subscribers: {
            min: 0,
            max: 999999
        },
        viewsPerPost: {
            min: 0,
            max: 100
        },
        withAutoPosting: false
    })

    useEffect(() => {
        async function start() {
            await client.query(
                q.Paginate(
                    q.Range(q.Match(q.Index("all_groups")), [0, 0], [5999, 5001])
                )
            ).then(console.log)
        }
        start()
    }, [])

    const [sort, setSort] = useState<SortInterface>({
        type: "increment",
        sortBy: "price"
    })

    const updateFilters = (changes: Partial<FiltersInterface>) => {
        setFilters({...filters, ...changes})
    }
    const updateSort = (sortBy: SortBy, type: SortDirection) => {
        setSort({sortBy, type})
    }
    const selectGroup = (groupId: number) => {
        const group = groups.find(el => el.id === groupId)
        if (group) setSelectedGroups([...selectedGroups, group])
    }
    const deselectGroup = (groupId: number) => {
        setSelectedGroups(selectedGroups.filter(el => el.id !== groupId))
    }
    const isSelected = (groupId: number): boolean => {
        return !!selectedGroups.find(el => el.id === groupId);
    }

    useEffect(() => {

    }, [sort, filters])

    return (
        <GroupsSelectContext.Provider
            value={{
                groups, selectGroup,
                isSelected, deselectGroup,
                updateFilters, updateSort,
                filters, sort
            }}>
            {props.children}
        </GroupsSelectContext.Provider>
    );
}


