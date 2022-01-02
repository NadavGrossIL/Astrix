import {useGetSingleCharacterByIdQuery} from "../api/apiSlice";
import {Fragment} from "react";
import {useParams} from "react-router-dom";

export const SingleCharacter = () => {
    let params = useParams();
    const {data: character, isFetching, isSuccess} = useGetSingleCharacterByIdQuery(params.characterId);

    let content;
    if (isFetching) {
        content = <div>Fetching</div>
    } else if (isSuccess && character) {
        content =
            <Fragment>
                <div>{character.id}</div>
                <div>{character.name}</div>
                <div>{character.status}</div>
            </Fragment>
    }

    return <div>{content}</div>
}
