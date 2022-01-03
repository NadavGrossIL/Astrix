import {useGetSingleCharacterByIdQuery} from "../api/apiSlice";
import {useParams} from "react-router-dom";
import {Card, Container, Image, Loader} from "semantic-ui-react";
import styles from './SingleCharacter.module.css';

export const SingleCharacter = () => {
    let params = useParams();
    const {data: character, isFetching, isSuccess} = useGetSingleCharacterByIdQuery(params.characterId);

    let content;
    if (isFetching) {
        content = <Loader active>Loading</Loader>
    } else if (isSuccess && character) {
        content =
            <Container textAlign="center" className={styles.singleCharacterContainer}>
                <Card>
                    <Image src={character.image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{character.name}</Card.Header>
                        <Card.Meta>{`${character.species} | ${character.gender}`}</Card.Meta>
                        <Card.Description>Status: {character.status}</Card.Description>
                        <Card.Description>Location: {character.location.name}</Card.Description>
                    </Card.Content>
                </Card>
            </Container>
    }

    return <div>{content}</div>
}
