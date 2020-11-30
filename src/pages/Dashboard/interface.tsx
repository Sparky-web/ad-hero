import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface GroupInterface {
    name: string,
    subscribers: number,
    price: number,
    image?: string,
    id: number,
    addedAt?: Timestamp,
    cpv?: Number,
    isAutoPosting?: boolean,
    viewsPerPost?: number

    [key: string]: any
}

export type SortBy = "subscribers" | "activeSubscribers"
| "viewsPerPost" | "price"
export type SortDirection = "increment" | "decrement"

export interface SortInterface {
    type: "increment" | "decrement",
    sortBy: SortBy
}

export interface FilterInterface {
    min: number,
    max: number,
}

export interface FiltersInterface {
    subscribers: FilterInterface,
    viewsPerPost: FilterInterface
    price: FilterInterface,
    withAutoPosting: boolean
}



