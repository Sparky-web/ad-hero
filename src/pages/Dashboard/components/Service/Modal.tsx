import styled from "styled-components";
import React, {ReactNode, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Button, Typography} from "@material-ui/core";
import {Icon16Cancel} from "@vkontakte/icons";

const StyledModalHeader = styled.div`
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
`
const Wrap = styled.div`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1;
    
    .modal {
      padding-bottom: 50%;
      padding-top: 1rem;
      height: 100%;
      position: absolute;
      left: 0;
      z-index: 2;
      background: var(--background_content);
      border-radius: 20px;
      box-shadow: 0 0 20px -10px black;
      width: 100%;
    }
    
    .modalContent {
      padding: 1rem 1rem 1rem 1rem;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
`

export const Modal = (props: {
    children?: ReactNode,
    isVisible: boolean,
    close: Function,
    title?: string,
    height?: number,
    open: Function
}) => {
    useEffect(() => {
        if (!props.isVisible) props.open()
    }, [])

    const [startPoint, setStartPoint] = useState(0)

    const onDragStart = (e: any, info: any) => {
        setStartPoint(info.point.y)
    }
    const onDragEnd = (e: any, info: any) => {
        if (info.point.y - startPoint > 100) {
            props.close()
        }
    }

    return (
        <Wrap
            className={"wrap"}
            onClick={e => {
                // @ts-ignore
                if (e.target.classList && e.target.classList.length && [...e.target.classList].indexOf("wrap") >= 0) props.close()
            }}>
            <AnimatePresence>
                {props.isVisible &&
                <motion.div
                    drag={"y"}
                    dragConstraints={{top: 0, bottom: 0}}
                    dragElastic={0.2}

                    initial={{bottom: "-100%"}}
                    animate={{bottom: "-20%"}}
                    exit={{bottom: "-100%"}}

                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}

                    className={"modal"}
                >
                    <StyledModalHeader>
                        <Typography variant="body1" color="textPrimary">
                            {props.title}
                        </Typography>
                        <Button onClick={() => props.close()}><Icon16Cancel/></Button>
                    </StyledModalHeader>
                    <div className={"modalContent"}>
                        {props.children}
                    </div>
                </motion.div>
                }

            </AnimatePresence>
        </Wrap>
    )
}
