import React, {createContext} from 'react';
import StepDataInterface from "./StepDataInterface";

import image1 from "../../img/ad_1.svg"
import image2 from "../../img/ad_2.svg"
import image3 from "../../img/ad_3.svg"

import image21 from "../../img/owner_1.svg"
import image23 from "../../img/owner_3.svg"
import image24 from "../../img/owner_4.svg"

import {Route, Routes } from 'react-router-dom';
import StepsRouting from "./StepsRouting";
import ChooseLk from "./ChooseLK";
import StepsInterface from './StepsInterface';

export const StepsContext = createContext<StepsInterface>({ad: [], owner: []})

function Index() {
    const steps: StepsInterface = {
        ad: [
            {
                header: "Выберете группы",
                image: <img alt={""} src={image1}/>,
                description: "Среди сотен вариантов выберете группы которае подойдут для размещения вашей рекламы."
            },
            {
                header: "Посмотрите аналитику",
                image: <img alt={""} src={image2}/>,
                description: "Оцните группы, посмотрите подробную статистику, доступны десятки показателей."
            },
            {
                header: "Закажите рекламу",
                image: <img alt={""} src={image3}/>,
                description: "Предложите владельцам сообществ вашу кампанию, оплатите заказ через VKPay"
            }
        ],
        owner: [
            {
                header: "Добавьте группу",
                image: <img alt={""} src={image21}/>,
                description: "Выберете группы с которых вы хотите получать доход и добавьте их в один клик."
            },
            {
                header: "Принимайте заказы",
                image: <img alt={""} src={image3}/>,
                description: "Вам будут предлагать размещение рекламы, вы можете как согласится, так и отказаться."
            },
            {
                header: "Разместите рекламу",
                image: <img alt={""} src={image23}/>,
                description: "Вы можете разместить рекламу вручную или доверить размещение нашему боту."
            },
            {
                header: "Выводите доход",
                image: <img alt={""} src={image24}/>,
                description: "После непродолжительного периода, вы сможете вывести ваш доход через VK Pay  "
            }
        ]
    }

    return (
        <StepsContext.Provider value={steps}>
            <Routes>
                <Route path={"/"} element={<ChooseLk />}/>
                <Route path={":lk/*"} element={<StepsRouting />}/>
            </Routes>
        </StepsContext.Provider>
    );
}


export default Index;
