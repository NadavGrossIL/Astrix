import charactersReducer, {addCharacter, CharactersState} from './charactersSlice';

describe('counter reducer', () => {
    const initialState: CharactersState = {
        characters: [],
        info: {}
    };
    it('should handle initial state', () => {
        expect(charactersReducer(undefined, { type: 'unknown' })).toEqual({
            characters: [],
            info: {}
        });
    });

    it('should handle add character', () => {
        const actual = charactersReducer(initialState, addCharacter({name: "rick"}));
        expect(actual.characters).toEqual([{name: "rick"}]);
    });
});
