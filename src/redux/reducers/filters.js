import { ADD_FILTER, REMOVE_FILTER, DATA_REQUESTED, DATA_RECEIVED } from '../consts';
import { uniq } from 'lodash';

const defaultState = {
    appliedFilters: [],
    availableFilters: []
}

export default function (state = defaultState, { type, payload } = {}) {
    switch (type) {
        case ADD_FILTER:
            return addFilter(state, payload);

        case REMOVE_FILTER:
            return removeFilter(state, payload);

        case DATA_REQUESTED:
            return defaultState;

        case DATA_RECEIVED:
            return collectAvailableFilters(payload);

        default:
            return state;
    }
}

function addFilter(state, filter) {
    const filterIsAvailable = state.availableFilters.find(x => x === filter);
    const filterAlreadyApplied = state.appliedFilters.find(x => x === filter);

    if (!filterIsAvailable || filterAlreadyApplied) {
        return state;
    }

    return {
        ...state,
        appliedFilters: state.appliedFilters.concat(filter)
    };
}

function removeFilter(state, filter) {
    return {
        ...state,
        appliedFilters: state.appliedFilters.filter(x => x !== filter)
    };
}

function collectAvailableFilters(hotels) {
    const availableFilters = hotels.reduce((acc, hotel) => {
        return uniq(acc.concat(hotel.facilities));
    }, []);

    return {
        appliedFilters: [],
        availableFilters
    }
}
