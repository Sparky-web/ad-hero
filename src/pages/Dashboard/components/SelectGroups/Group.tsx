import styled from "styled-components";
import React, {ReactNode, useState} from "react";
import {Typography} from "@material-ui/core";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import GroupModal from "./GroupModal";


const GroupStyled = styled.div`
  align-items: center;
  display: flex;
  button {
    margin-left: auto;
  }
  .text {
    margin-left: 20px;
  }
`

const AvatarStyled = styled.div`
  img {
    background: gray;
    border-radius: 99px;
    width: 48px;
    height: 48px;
    object-position: center;
    object-fit: cover;
  }
`
const Avatar = ({url}: { url: string | undefined, [key: string]: any }) => (<AvatarStyled>
    <img src={url} alt=""/>
</AvatarStyled>)

export const Group = (props: {
    name: string,
    description: string | undefined,
    button: ReactNode | undefined,
    image?: string,
    id: number
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const open = () => {
        navigate("groupModal/" + props.id)
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false)
        setTimeout(() => navigate("./"), 300)
    }

    return (
        <GroupStyled>
            <Routes>
                <Route path={"groupModal/:id"} element={<GroupModal open={open} close={close} isVisible={isOpen}/>}/>
                <Route path={"groupModal"}><Navigate to={"./"}/></Route>
            </Routes>
            <Avatar url={props.image} onClick={() => open()}/>
            <div className={"text"} onClick={() => open()}>
                <Typography variant={"h5"} color={"textPrimary"}>
                    {props.name}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"}>
                    {props.description}
                </Typography>
            </div>
            {props.button}
        </GroupStyled>
    )
};
