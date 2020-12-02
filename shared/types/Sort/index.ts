export interface SortInterface {
    type: "increment" | "decrement",
    sortBy: SortBy
}

export type SortBy = "subscribers" | "activeSubscribers"
    | "viewsPerPost" | "price"

export type SortDirection = "increment" | "decrement"
