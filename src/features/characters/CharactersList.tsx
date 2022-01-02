import React, {useState} from 'react';
import {useGetCharactersByPageQuery} from '../api/apiSlice';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './CharacterList.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addCharacters, selectCharacters} from "./charactersSlice";
import {Link} from "react-router-dom";


export const CharactersList = () => {
    const [page, setPage] = useState(1);
    const currentCharacters = useAppSelector(selectCharacters);
    const dispatch = useAppDispatch();

    const {
        data: characters,
        isFetching
    } = useGetCharactersByPageQuery(page);


    const loadMore = () => {
        if (characters?.info.next && !isFetching) {
            dispatch(addCharacters(characters?.results));
            setPage(page + 1);
        }
    }

    return (
        <section className={styles.list}>
            {currentCharacters &&
            <InfiniteScroll
                data-testid="episodes-infinite-scroll"
                pageStart={0}
                loadMore={loadMore}
                hasMore={!!characters?.info.next}
                loader={<div key={0}>Loading...</div>}
            >
                {currentCharacters
                    ? currentCharacters.map(character =>
                        <Link to={`/${character.id}`} key={character.id}>
                            <div key={character.id}>
                                {character.name}
                                <img alt={character.name} src={character?.image}/>
                            </div>
                        </Link>)
                    : <div>Loading...</div>
                }
            </InfiniteScroll>
            }
        </section>
    )
}
