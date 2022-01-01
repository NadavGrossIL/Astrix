import charactersReducer, {addCharacters, CharactersState} from './charactersSlice';

describe('counter reducer', () => {
    const initialState: CharactersState = {
        loadedCharacters: [],
    };
    it('should handle initial state', () => {
        expect(charactersReducer(undefined, { type: 'unknown' })).toEqual({
            characters: [],
            info: {}
        });
    });

    it('should handle add characters', () => {
        const actual = charactersReducer(initialState, addCharacters([{name: "rick", id: 1234, image:'someUrl'}]));
        expect(actual.loadedCharacters).toEqual([{name: "rick"}]);
    });
});
