import { ADD_FILTER, REMOVE_FILTER, DATA_REQUESTED, DATA_RECEIVED } from '../../consts';
import mockHotels from '../../../../__mocks__/mock-hotels';
import reducer from '../filters';

describe('Filter Reducer', () => {
    describe(`when action type is ${ADD_FILTER}`, () => {
        const action = {
            type: ADD_FILTER,
            payload: 'foo'
        };

        it('adds the filter to the list if it is in the available filters list', () => {
            const state = {
                availableFilters: ['foo'],
                appliedFilters: []
            };

            const result = reducer(state, action);

            expect(result).toEqual({
                availableFilters: ['foo'],
                appliedFilters: ['foo']
            });
        });

        it('doesn\'t double add the filter', () => {
            const state = {
                availableFilters: ['foo'],
                appliedFilters: ['foo']
            };

            const result = reducer(state, action);

            expect(result).toEqual({
                availableFilters: ['foo'],
                appliedFilters: ['foo']
            });
        });

        it('doesn\'t add the filter if it not in the available filters list', () => {
            const state = {
                availableFilters: ['bar'],
                appliedFilters: []
            };

            const result = reducer(state, action);

            expect(result).toEqual({
                availableFilters: ['bar'],
                appliedFilters: []
            });
        });
    });


    it(`removes the filter from appliedFilters when action type is ${REMOVE_FILTER}`, () => {
        const state = {
            availableFilters: ['foo'],
            appliedFilters: ['foo']
        };

        const action = {
            type: REMOVE_FILTER,
            payload: 'foo'
        };

        const result = reducer(state, action);

        expect(result).toEqual({
            availableFilters: ['foo'],
            appliedFilters: []
        });
    });

    it(`clears the state when action type is ${DATA_REQUESTED}`, () => {
        const state = {
            availableFilters: ['foo', 'bar'],
            appliedFilters: ['foo']
        };

        const action = {
            type: DATA_REQUESTED
        };

        const result = reducer(state, action);

        expect(result).toEqual({
            availableFilters: [],
            appliedFilters: []
        });
    });

    it(`recalculates the available filters when action type is ${DATA_RECEIVED}`, () => {
        const state = {
            availableFilters: [],
            appliedFilters: []
        };

        const action = {
            type: DATA_RECEIVED,
            payload: mockHotels()
        };

        const result = reducer(state, action);

        expect(result).toEqual({
            availableFilters: ['car park', 'pool', 'gym'],
            appliedFilters: []
        });
    });
});
