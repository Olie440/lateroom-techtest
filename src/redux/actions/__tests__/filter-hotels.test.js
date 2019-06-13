import { ADD_FILTER, REMOVE_FILTER } from '../../consts';
import { toggleFilter } from '../filter-hotels';

describe('toggleFilter Action', () => {
    it(`it dispatches a ${ADD_FILTER} action when applied = true`, () =>{
        const result = toggleFilter('test', true);
        expect(result).toEqual({
            type: ADD_FILTER,
            payload: 'test'
        });
    });

    it(`it dispatches a ${REMOVE_FILTER} action when applied = false`, () => {
        const result = toggleFilter('test', false);
        expect(result).toEqual({
            type: REMOVE_FILTER,
            payload: 'test'
        });
    });
});
