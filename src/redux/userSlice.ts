import {createSlice} from '@reduxjs/toolkit';

interface UserInterface {
    isFirstStart: boolean,
    cabinet: {
        type: "ad" | "owner",
        isFirstStart: boolean
    }
}

const initialState: UserInterface = {
    cabinet: {
        isFirstStart: true,
        type: "ad"
    },
    isFirstStart: true
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: state => {
            state.isFirstStart = !state.isFirstStart;
        }
    },
});

export const {login} = slice.actions;

export const selectIsLogged = (state: { user: UserInterface }) => state.user.isFirstStart;
export const selectCabinet = (state: { user: UserInterface }) => state.user.cabinet


export default slice.reducer;
