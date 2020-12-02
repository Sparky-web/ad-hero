import React, {useContext, useState} from 'react';
import {Group20px} from "../Service/Blocks";
import {Button} from "@material-ui/core";
import {Icon24Filter} from "@vkontakte/icons";
import {useNavigate, Routes, Route} from "react-router-dom"
import {Modal} from "../Service/Modal";
import Groups from "./Groups";
import {GroupsSelectContext} from "../../GroupsSelectContext";
import Filters from "./Filters";
import Sort from "./Sort";
import TwoColumns from "../Service/TwoColumns";

function Index() {
    const contextProps = useContext(GroupsSelectContext)

    const navigate = useNavigate()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openFilterModal = () => {
        navigate("filters")
        setModalIsOpen(true)
    }
    const openSortModal = () => {
        navigate("sorting")
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        setTimeout(() => navigate("./"), 300)
    }



    return (
        <Group20px>
            <Routes>
                <Route path="filters">
                    <Modal open={openFilterModal} isVisible={modalIsOpen} close={closeModal} title={"Фильтры"}>
                        <Filters {...{...contextProps, close: closeModal}} />
                    </Modal>
                </Route>
                <Route path="sorting">
                    <Modal open={openFilterModal} isVisible={modalIsOpen} close={closeModal} title={"Сортировка"}>
                        <Sort {...{...contextProps, close: closeModal}} />
                    </Modal>
                </Route>
            </Routes>
            <TwoColumns>
                <Button color={"primary"}
                        variant={"text"}
                        startIcon={<Icon24Filter />}
                        onClick={openFilterModal}
                >
                    Фильтры
                </Button>
                <Button color={"primary"}
                        variant={"text"}
                        startIcon={<Icon24Filter />}
                        onClick={openSortModal}
                >
                    Сортировка
                </Button>
            </TwoColumns>
            <Groups {...contextProps}/>
        </Group20px>
    );
}

export default Index;
