import { ADD_FILTER, REMOVE_FILTER } from '../consts';

export function toggleFilter(filter, applied) {
    const action = applied ? ADD_FILTER : REMOVE_FILTER;

    return {
        type: action,
        payload: filter
    };
}
