import React, {useEffect} from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import Ad from "./Ad";
import {GroupsSelectProvider} from "./GroupsSelectContext";
import {useSelector} from "react-redux";
import {selectCabinet} from "../../redux/userSlice";

function Dashboard() {
    const cabinet = useSelector(selectCabinet)

    return (
        <div>
            <Routes>
                <Route path={"ad/*"} element={<Ad />}/>
                <Route path={"/"}><Navigate to={cabinet.type} /></Route>
            </Routes>
        </div>
    );
}

export default Dashboard;
