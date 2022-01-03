import charactersReducer, {addCharacters, CharactersState} from './charactersSlice';

describe('characters reducer', () => {
    const initialState: CharactersState = {
        loadedCharacters: [],
    };
    it('should handle initial state', () => {
        expect(charactersReducer(undefined, {type: 'unknown'})).toEqual({
            characters: [],
            info: {}
        });
    });

    it('should handle add characters', () => {
        const actual = charactersReducer(initialState, addCharacters([{
            name: "rick",
            id: 1234,
            image: 'someUrl',
            status: 'alive',
            species: "human",
            gender: "male",
            location: {name: "earth", url: "someUrl"}
        }]));
        expect(actual.loadedCharacters).toEqual([{name: "rick"}]);
    });
});
