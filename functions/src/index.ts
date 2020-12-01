import * as functions from 'firebase-functions';
import admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;
import DocumentData = admin.firestore.DocumentData;
admin.initializeApp();

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

export const getGroups = functions.https.onCall(async (data, context) => {
  const arr:Set<GroupInterface> = new Set()

  if(data) {
    admin.firestore().collection("groups")
  }

  return arr
})
