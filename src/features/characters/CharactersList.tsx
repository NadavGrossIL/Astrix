import React, {useState} from 'react';
import {useGetCharactersByPageQuery} from '../api/apiSlice';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './CharacterList.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addCharacters, selectCharacters} from "./charactersSlice";


export const CharactersList = () => {
    const [page, setPage] = useState(1);
    const currentCharacters = useAppSelector(selectCharacters);
    const dispatch = useAppDispatch();

    const {
        data: characters,
        isFetching,
        isSuccess,
        isError,
        error
    } = useGetCharactersByPageQuery(page);

    const loadMore = () => {
        if (characters?.info.next && !isFetching) {
            dispatch(addCharacters(characters?.results));
            setPage(page + 1);
        }
    }

    return (
        <section className={styles.list}>
            <InfiniteScroll
                data-testid="episodes-infinite-scroll"
                pageStart={0}
                loadMore={loadMore}
                hasMore={!!characters?.info.next}
                loader={<div key={0}>Loading...</div>}
            >
                {currentCharacters
                    ? currentCharacters?.map(character => <div key={character.id}>

                        {character.name}
                        <img src={character?.image}/>
                    </div>)
                    : <div>Loading...</div>
                }
            </InfiniteScroll>
        </section>
    )
}
