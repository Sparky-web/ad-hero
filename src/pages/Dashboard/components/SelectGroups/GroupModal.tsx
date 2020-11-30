import React, {ReactNode, useContext} from 'react';
import {Modal} from "../Service/Modal";
import {useParams} from "react-router-dom"
import useSWR from "swr"
import {FirebaseContext} from "../../../../context/FirebaseContext";
import styled from "styled-components";
import {Typography} from "@material-ui/core";
import {GroupInterface} from "../../interface";
import Loading from "../Service/Loading";
import Error from "../Service/Error";

const StyledData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`
const StyledDataRow = styled.div`
  display: grid;
  justify-items: start;
  justify-content: space-between;
  grid-auto-flow: column;
  align-content: center;
  align-items: baseline;
`
const StyledTemplateDataRow = styled.div`
  width: 100%;
  height: 30px;
  background: rgba(0,0,0,0.1);
  border-radius: 5px;
`


const DataRow = ({icon, name, info, data}: { icon?: ReactNode, name?: string, info?: string, data?: string }) => {
    return (
        <StyledDataRow>
            {icon}
            <Typography className={"name"} variant={"body1"}>{name}</Typography>
            <Typography className={"value"} variant={"h5"}>{data}</Typography>
        </StyledDataRow>
    )
}

function GroupModal(
    {
        isVisible,
        open,
        close
    }: {
        isVisible: boolean,
        open: Function,
        close: Function
    }) {

    const {id} = useParams() as {
        id: string
    }

    const firebase = useContext(FirebaseContext)

    const {data, error} = useSWR<GroupInterface>(id, async (id): Promise<GroupInterface> => {
        // @ts-ignore
        const db = firebase.firestore()

        const snap = await db.collection("groups")
            .where("id", "==", +id)
            .get()

        let data = {
            name: "",
            subscribers: 0,
            price: 0,
            id: 0
        };

        await snap.forEach((doc: any) => {
            data = doc.data()
        })

        return data
    })


    return (
        <Modal isVisible={isVisible} close={close} open={open}>
            {data ? <StyledData>
                <DataRow name={"Название"} data={data.name}/>
                <DataRow name={"Подписчиков"} data={`${data.subscribers}`}/>
                <DataRow name={"Цена"} data={`${data.price}`}/>
                <DataRow name={"Просмотры на записях (в среднем)"} data={`${data.viewsPerPost}`}/>
                <DataRow name={"CTR (кликабельность)"} data={`${data.cpv} %`}/>
                <DataRow name={"CPC (стоимость за клик)"} data={`${data.cpv} %`}/>
            </StyledData> : error ? <Error /> : <Loading>
                <StyledData>
                    <StyledTemplateDataRow />
                    <StyledTemplateDataRow />
                    <StyledTemplateDataRow />
                    <StyledTemplateDataRow />
                    <StyledTemplateDataRow />
                    <StyledTemplateDataRow />
                </StyledData>
            </Loading>}
        </Modal>
    );
}


export default GroupModal;
