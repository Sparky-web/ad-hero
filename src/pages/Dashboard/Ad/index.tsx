import React, {useContext} from 'react';
import {GroupsSelectContext, GroupsSelectProvider} from "../GroupsSelectContext";
import Index from "../components/SelectGroups";
import { Page } from '../components/Service/Blocks';

function Ad() {
    const groupsProps = useContext(GroupsSelectContext)

    return (
        <Page>
            <GroupsSelectProvider><Index /></GroupsSelectProvider>
        </Page>
    )
}

export default Ad;
