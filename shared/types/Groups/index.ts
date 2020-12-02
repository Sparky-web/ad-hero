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
