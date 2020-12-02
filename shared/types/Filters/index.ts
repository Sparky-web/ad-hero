export interface FilterMinMax {
    min: number,
    max: number,
}

export interface FiltersInterface {
    subscribers: FilterMinMax,
    viewsPerPost: FilterMinMax
    price: FilterMinMax,
    withAutoPosting: boolean
}
