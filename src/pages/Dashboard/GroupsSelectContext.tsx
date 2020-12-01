import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {FiltersInterface, GroupInterface, SortBy, SortDirection, SortInterface} from "./interface";
import {FirebaseContext} from "../../context/FirebaseContext";
import axios from "axios"
import firebase from "firebase";
import useSWR from "swr/esm/use-swr";


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

export const GroupsSelectContext = createContext<GroupsContextProps>({
    groups: [],
    selectGroup: () => {
    },
    isSelected: (): boolean => true,
    deselectGroup: () => {
    },
    updateFilters: (changes: Partial<FiltersInterface>) => {
    },
    updateSort: () => {
    },
    filters: {
        price: {
            min: 0,
            max: 900
        },
        subscribers: {
            min: 0,
            max: 100
        },
        viewsPerPost: {
            min: 0,
            max: 100
        },
        withAutoPosting: false
    },
    sort: {
        type: "increment",
        sortBy: "price"
    }
})

export function GroupsSelectProvider(props: { children: ReactNode }) {
    const firebase = useContext(FirebaseContext)

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


    const {data, error} = useSWR(
        ["getGroups", filters],
        async (method: string) => {
            const getGroups = firebase?.functions?.().httpsCallable(method);
            return getGroups?.(filters);
    })

    console.log(data)

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


