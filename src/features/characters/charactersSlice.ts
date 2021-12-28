import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CharactersState {
    characters: any[],
    info: object
}

const initialState: CharactersState = {
    characters: [],
    info: {}
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<any>) => {
            state.characters.push(action.payload)
        }
    }
})

export const { addCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
