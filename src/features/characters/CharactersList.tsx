import React from 'react';
import {useGetCharactersQuery} from '../api/apiSlice';

export const CharactersList = () => {
    const {
        data: characters,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCharactersQuery();

    let content: any;
    if (isLoading) {
        content = <div>Loading</div>
    } else if (isSuccess) {
        content = characters?.results?.map(character => <div key={character.id}>{character.name}</div>)
    } else if (isError) {
        content = <div>{error?.toString()}</div>
    }

    return (
        <section className="characters-list">
            <h2>Characters</h2>
            {content}
        </section>
    )
}
