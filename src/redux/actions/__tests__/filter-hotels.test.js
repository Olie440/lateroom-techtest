import { ADD_FILTER, REMOVE_FILTER } from '../../consts';
import { addFilter, removeFilter } from '../filter-hotels';

describe('addFilter Action', () => {
    it(`it dispatches a ${ADD_FILTER} action`, () =>{
        const result = addFilter('test');
        expect(result).toEqual({
            type: ADD_FILTER,
            payload: 'test'
        });
    });
});

describe('removeFilter Action', () => {
    it(`it dispatches a ${ADD_FILTER} action`, () => {
        const result = removeFilter('test');
        expect(result).toEqual({
            type: REMOVE_FILTER,
            payload: 'test'
        });
    });
});
