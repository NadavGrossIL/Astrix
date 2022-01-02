import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../api/apiSlice";
import {RootState} from "../../app/store";

export interface CharactersState {
    loadedCharacters: Character[],
}

const initialState: CharactersState = {
    loadedCharacters: [],
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacters: (state, action: PayloadAction<Character[]>) => {
            state.loadedCharacters.push(...action.payload);
        }
    }
})

export const selectCharacters = (state: RootState) => state.characters.loadedCharacters;

export const {addCharacters} = charactersSlice.actions;

export default charactersSlice.reducer;
