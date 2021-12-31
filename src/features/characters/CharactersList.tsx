import React, {useState} from 'react';
import {useGetCharactersByPageQuery} from '../api/apiSlice';

export const CharactersList = () => {
   const [page, setPage] = useState(1)
    const {
        data: characters,
        isFetching,
        isSuccess,
        isError,
        error
    } = useGetCharactersByPageQuery(page);

    let content: any;
    if (isFetching) {
        content = <div>Loading</div>
    } else if (isSuccess) {
        console.log(characters)
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
