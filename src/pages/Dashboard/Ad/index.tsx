import React, {useContext} from 'react';
import {GroupsSelectContext, GroupsSelectProvider} from "../GroupsSelectContext";
import SelectGroups from "../components/SelectGroups/SelectGroups";
import { Page } from '../components/Service/Blocks';

function Ad() {
    const groupsProps = useContext(GroupsSelectContext)

    return (
        <Page>
            <GroupsSelectProvider><SelectGroups /></GroupsSelectProvider>
        </Page>
    )
}

export default Ad;
