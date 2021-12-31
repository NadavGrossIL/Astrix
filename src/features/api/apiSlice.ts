import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Character {
    id: number,
    name: string
}

export interface Characters {
    info: any,
    results: Character[]
}

const BASE_URL: string = "https://rickandmortyapi.com/api";
const CHARACTERS_QUERY: string = "/character";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: builder => ({
        getCharacters: builder.query<Characters, void>({
            query: () => CHARACTERS_QUERY
        }),
        getCharactersByName: builder.query<Characters, string>({
            query: (name) => `${CHARACTERS_QUERY}/?name=${name}`
        }),
        getSingleCharacterById: builder.query<Character, number>({
            query: (characterId) => `${CHARACTERS_QUERY}/${characterId}`
        })
    })
})

export const {useGetCharactersQuery, useGetCharactersByNameQuery, useGetSingleCharacterByIdQuery} = apiSlice
