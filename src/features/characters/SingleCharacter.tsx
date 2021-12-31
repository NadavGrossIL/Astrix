import {useGetSingleCharacterByIdQuery} from "../api/apiSlice";
// import {Link} from 'react-router-dom';

export const SingleCharacter = ({match}: { match: any }) => {
    const characterID = match.params;

    const {data: character, isFetching, isSuccess} = useGetSingleCharacterByIdQuery(characterID);

    let content;
    if (isFetching) {
        content = <div>Fetching</div>
    } else if (isSuccess) {
        console.log(character)
        content = <div>{character?.id}</div>
    }
}
