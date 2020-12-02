import * as functions from 'firebase-functions';
import admin from "firebase-admin";

import {GroupInterface} from "../../shared/types/Groups"
import {FilterMinMax, FiltersInterface} from "../../shared/types/Filters";
import DocumentData = admin.firestore.DocumentData;

admin.initializeApp();

async function getDocumentsByMinmaxFilter(
    minmax: FilterMinMax,
    fieldName: string
): Promise<GroupInterface[]> {
    const filtered: GroupInterface[] = []

    const snapshot = await admin.firestore().collection("groups")
        .where(fieldName, ">=", minmax.min)
        .where(fieldName, "<=", minmax.max)
        .limit(5)
        .get()

    snapshot.forEach((doc: DocumentData) => filtered.push(doc.data()))

    return filtered
}

async function getDocumentByBooleanFilter(
    bool: boolean,
    fieldName: string
): Promise<GroupInterface[]> {
    const filtered: GroupInterface[] = []

    const snapshot = await admin.firestore().collection("groups")
        .where(fieldName, "==", bool)
        .limit(5)
        .get()

    snapshot.forEach((doc: DocumentData) => filtered.push(doc.data()))

    return filtered
}

export const getGroups = functions.https.onCall(async (data, context) => {
    const groups: GroupInterface[] = []

    console.log(data)

    const typedData = data as FiltersInterface

    const arrays = await Promise.all([
        getDocumentByBooleanFilter(typedData.withAutoPosting, "withAutoPosting"),
        getDocumentsByMinmaxFilter(typedData.subscribers, "subscribers"),
        getDocumentsByMinmaxFilter(typedData.viewsPerPost, "viewsPerPost"),
        getDocumentsByMinmaxFilter(typedData.price, "price")
    ])


    arrays.forEach((el) => {
        el.forEach((el) => {
            groups.push(el)
        })
    })

    return groups.filter((v, i, a) => a.findIndex(t => (t.place === v.place && t.name === v.name)) === i)
});
