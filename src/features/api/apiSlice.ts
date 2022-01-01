import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Character {
    id: number,
    name: string,
    image: string
}

export interface CharactersInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface Characters {
    info: CharactersInfo,
    results: Character[]
}

const BASE_URL: string = "https://rickandmortyapi.com/api";
const CHARACTERS_QUERY: string = "/character";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: builder => ({
        getCharactersByPage: builder.query<Characters, number>({
            query: (pageNumber) => `${CHARACTERS_QUERY}?page=${pageNumber}`
        }),
        getCharactersByName: builder.query<Characters, string>({
            query: (name) => `${CHARACTERS_QUERY}/?name=${name}`
        }),
        getSingleCharacterById: builder.query<Character, number>({
            query: (characterId) => `${CHARACTERS_QUERY}/${characterId}`
        })
    })
})

export const {useGetCharactersByPageQuery, useGetCharactersByNameQuery, useGetSingleCharacterByIdQuery} = apiSlice
